import { css } from "@microsoft/fast-element";
import { display } from "@microsoft/fast-components";

export const ContentCardContainerStyles = css`
    :host {
        contain: content;
        font-family: var(--body-font);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        /* allows space for box shadow that appears on hover */
        padding: calc(var(--design-unit) * 11px) 0;
    }
    :host([hidden]) {
        display: none;
    }

    /* This creates the blur and background color changes on hover */
    /* start */
    :host(:hover) fast-content-card {
        filter: blur(2px);
    }

    :host(:hover) fast-content-card:hover {
        /* background: linear-gradient(349.8deg, rgba(143, 68, 95, 0.3) 20.91%, rgba(148, 81, 73, 0.3) 99.75%); */
        box-shadow: 0px 10px 44px rgba(0, 0, 0, 0.1);
        border-radius: var(--design-unit);
        filter: blur(0);
    }
    /* end */
`;
