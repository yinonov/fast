# Toolbar

## Overview

The [toolbar](https://www.w3.org/TR/wai-aria-practices/#toolbar) component is a container for grouping a set of controls, such as buttons, menubuttons, or checkboxes.

The component is a single tab stop with the child control that last had focus in the toolbar being the one gaining focus when the `toolbar` is tabbed to, otherwise the first focusable control focused.

When focus is within the component the arrow keys move focus within the toolbar.  Also, the end and home keys move focus to the first and last items in the toolbar respectively.

## Design

### API

**Toolbar**
*Component name:*
- `fast-toolbar`

*Attributes:*
- orientation:  whether the toolbar is oriented vertically or horizontally

*Functions:*
- focus(): Focuses on the toolbar item at the current focusIndex

*Slots:*
- default slot for items

*Events*
- none

### Anatomy and Appearance

**Toolbar**

| State | Image |
| ----- | ----- |
| default | ![](./images/menu.png)
| with glyph | ![](./images/menu-glyph.png)

The toolbar has no named slots or parts - it has a default slot for toolbar items.


### Accessibility

The menu should align to the interaction model provided by the [W3C](https://w3c.github.io/aria-practices/#toolbar)


### Globalization
The component should respond appropriately to both ltr/rtl layouts in that horizontal layouts should reverse and arrow keys move focus in the expected direction.

### Dependencies

This component depends on Fast Element and the [tabbable](https://github.com/focus-trap/tabbable) library to identify tabbable children.