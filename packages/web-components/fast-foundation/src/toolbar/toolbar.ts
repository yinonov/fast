import { attr, DOM, elements, FASTElement, observable } from "@microsoft/fast-element";
import {
    isHTMLElement,
    keyCodeArrowDown,
    keyCodeArrowLeft,
    keyCodeArrowRight,
    keyCodeArrowUp,
    keyCodeEnd,
    keyCodeHome,
    Orientation,
} from "@microsoft/fast-web-utilities";
import { inRange } from "lodash-es";

/**
 * An Toolbar Custom HTML Element.
 *
 * @public
 */
export class Toolbar extends FASTElement {
    private static focusableRoles: string[] = [
        "button",
        "checkbox",
        "link",
        "radio",
        "searchbox",
        "slider",
        "spinbutton",
        "switch",
        "textbox",
        "combobox",
        "grid",
    ];

    /**
     * Toolbar orientation
     *
     * @defaultValue - "horizontal"
     * @public
     * HTML Attribute: orientation
     */
    @attr
    public orientation: Orientation = Orientation.horizontal;

    /**
     * @internal
     */
    @observable
    public items: HTMLSlotElement;
    private itemsChanged(oldValue, newValue): void {
        if (this.$fastController.isConnected) {
            this.toolbarItems = this.domChildren();
            this.resetItems(oldValue);
            this.setItems();
        }
    }

    private toolbarItems: Element[];

    /**
     * The index of the focusable element in the items array
     * defaults to -1
     */
    private focusIndex: number = -1;

    public connectedCallback(): void {
        this.toolbarItems = this.domChildren();
        super.connectedCallback();
    }

    public disconnectedCallback(): void {
        super.disconnectedCallback();
        this.toolbarItems = [];
    }

    /**
     * Focuses on the appropriate toolbar item
     *
     * @public
     */
    public focus(): void {
        if (this.focusIndex === -1) {
            this.setFocus(0, 1);
            return;
        }
        this.setFocus(this.focusIndex, 1);
    }

    /**
     * @internal
     */
    public handleKeyDown(e: KeyboardEvent): void | boolean {
        if (e.defaultPrevented) {
            return;
        }
        switch (e.keyCode) {
            case keyCodeArrowDown:
            case keyCodeArrowRight:
                // go forward one index
                this.setFocus(this.focusIndex + 1, 1);
                return;
            case keyCodeArrowUp:
            case keyCodeArrowLeft:
                // go back one index
                this.setFocus(this.focusIndex - 1, -1);
                return;
            case keyCodeEnd:
                // set focus on last item
                this.setFocus(this.domChildren().length - 1, -1);
                return;
            case keyCodeHome:
                // set focus on first item
                this.setFocus(0, 1);
                return;

            default:
                // if we are not handling the event, do not prevent default
                return true;
        }
    }

    /**
     * get an array of valid DOM children
     */
    private domChildren(): Element[] {
        return Array.from(this.children);
    }

    private handleItemBlur = (e: KeyboardEvent): void => {
        const target = e.currentTarget as Element;
        const focusIndex: number = this.toolbarItems.indexOf(target);

        if (focusIndex !== this.focusIndex && focusIndex !== -1) {
            this.setFocus(focusIndex, focusIndex > this.focusIndex ? 1 : -1);
        }
    };

    private setFocus(focusIndex: number, adjustment: number): void {
        const children: Element[] = this.toolbarItems;

        while (inRange(focusIndex, children.length)) {
            const child: Element = children[focusIndex];

            if (this.isFocusableElement(child)) {
                // update the tabindex of next focusable element
                child.setAttribute("tabindex", "0");

                // focus the element
                (child as HTMLElement).focus();

                // change the previous index to -1
                children[this.focusIndex].setAttribute("tabindex", "-1");

                // update the focus index
                this.focusIndex = focusIndex;

                break;
            }

            focusIndex += adjustment;
        }
    }

    private setItems = (): void => {
        const focusIndex = this.toolbarItems.findIndex(this.isFocusableElement);

        // if our focus index is not -1 we have items
        if (focusIndex !== -1) {
            this.focusIndex = focusIndex;
        }

        for (
            let itemIndex: number = 0;
            itemIndex < this.toolbarItems.length;
            itemIndex++
        ) {
            const thisElement = this.toolbarItems[itemIndex];

            if (this.isFocusableElement(thisElement)) {
                thisElement.setAttribute(
                    "tabindex",
                    itemIndex === this.focusIndex ? "0" : "-1"
                );
                thisElement.addEventListener("blur", this.handleItemBlur);
            }
        }
    };

    private resetItems = (oldValue: any): void => {
        for (let item: number = 0; item < oldValue.length; item++) {
            oldValue[item].removeEventListener("blur", this.handleItemBlur);
        }
    };

    /**
     * check if the item is focusable
     */
    private isFocusableElement = (el: Element): el is HTMLElement => {
        return Toolbar.focusableRoles.indexOf(el.getAttribute("role") as string) !== -1;
    };
}
