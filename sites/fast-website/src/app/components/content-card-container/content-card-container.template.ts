import { html, when, repeat } from "@microsoft/fast-element";
import { ContentCardContainer } from "./content-card-container";
import { ContentCard } from "../content-card";

export const ContentCardContainerTemplate = html<ContentCardContainer>` <div
    class="section-component"
>
    ${repeat(
        x => x.communityCardList,
        html`<fast-content-card>
            <div slot="icon"><img src=${x => x.iconSource} alt=${x => x.iconAlt}></div>
            <h3>${x => x.header}</h3>
            <p slot="body">${x => x.body}</p>
            <fast-anchor slot="action" appearance="lightweight" href=${x =>
                x.actionLink}>${x => x.actionText}</fast-anchor>
        </fast-content-card>
    </div>
    `
    )}
</div>`;
