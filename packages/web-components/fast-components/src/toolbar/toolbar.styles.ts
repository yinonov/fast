import { css } from "@microsoft/fast-element";
import { forcedColorsStylesheetBehavior } from "@microsoft/fast-foundation";
import { display } from "@microsoft/fast-foundation";
import {
    accentFillActiveBehavior,
    accentFillHoverBehavior,
    accentFillRestBehavior,
    neutralFillHoverBehavior,
    neutralFillInputActiveBehavior,
    neutralFillInputHoverBehavior,
    neutralFillInputRestBehavior,
    neutralFillRestBehavior,
    neutralFocusBehavior,
    neutralForegroundRestBehavior,
    neutralOutlineRestBehavior,
} from "../styles/index";

export const ToolbarStyles = css`
    ${display("flex")}:host {
        box-sizing: border-box;
        padding: 0 calc((6 + (var(--design-unit) * 2 * var(--density))) * 1px);
        display: flex;
        flex-wrap: wrap;
    }
    :host([orientation="vertical"]) {
        flex-direction: column;
    }
    :host([orientation="horizontal"]) {
        flex-direction: row;
    }
    ::slotted(*) {
        margin: calc(var(--design-unit) * 1px);
    }
`.withBehaviors(
    accentFillActiveBehavior,
    accentFillHoverBehavior,
    accentFillRestBehavior,
    neutralFillHoverBehavior,
    neutralFillInputActiveBehavior,
    neutralFillInputHoverBehavior,
    neutralFillInputRestBehavior,
    neutralFillRestBehavior,
    neutralFocusBehavior,
    neutralForegroundRestBehavior,
    neutralOutlineRestBehavior,
    forcedColorsStylesheetBehavior(css``)
);
