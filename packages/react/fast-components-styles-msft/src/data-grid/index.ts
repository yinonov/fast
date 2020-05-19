import { ComponentStyles } from "@microsoft/fast-jss-manager";
import {
    directionSwitch,
    ellipsis,
    format,
    localizeSpacing,
    toPx,
} from "@microsoft/fast-jss-utilities";
import { DataGridClassNameContract } from "@microsoft/fast-components-class-name-contracts-msft";
import {
    neutralForegroundRest,
    neutralLayerFloating,
    neutralOutlineRest,
} from "../utilities/color";
import { glyphSize, height, horizontalSpacing } from "../utilities/density";
import { applyElevation, ElevationMultiplier } from "../utilities/elevation";
import DesignSystemDefaults, { DesignSystem } from "../design-system";
import { applyElevatedCornerRadius } from "../utilities/border";
import { designUnit, outlineWidth } from "../utilities/design-system";
import { inputFieldStyles } from "../patterns/input-field";
import { applyCursorPointer } from "../utilities/cursor";
import {
    HighContrastColor,
    highContrastDisabledForeground,
    highContrastForeground,
    highContrastOptOutProperty,
    highContrastOutline,
    highContrastSelector,
} from "../utilities/high-contrast";

const styles: ComponentStyles<DataGridClassNameContract, DesignSystem> = {};

export default styles;
