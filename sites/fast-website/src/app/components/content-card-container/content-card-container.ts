import { FASTElement, attr, repeat } from "@microsoft/fast-element";
import {
    CommunityContentCard,
    communityContentCardList,
} from "../../data/community.data";

export class ContentCardContainer extends FASTElement {
    @attr community: boolean = false;
    @attr framework: boolean = false;

    communityCardList: CommunityContentCard[] = communityContentCardList;
}
