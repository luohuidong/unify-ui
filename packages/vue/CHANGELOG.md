# unify-ui

## 0.14.34

### Patch Changes

- Updated dependencies [6e669d6]
  - @unify-ui/web-components@0.4.0

## 0.14.33

### Patch Changes

- 6452bee: change components import path
- Updated dependencies [42ea876]
  - @unify-ui/web-components@0.3.1

## 0.14.32

### Patch Changes

- 3d7e9ae: tr text can't be selected
- b446148: optimize column resize logic

## 0.14.31

### Patch Changes

- 8871839: optimize table column resize logic

## 0.14.30

### Patch Changes

- 6611ddf: Fix the issue where the shadow on the right side of the table component displays abnormally under different scaling ratios

## 0.14.29

### Patch Changes

- dfa91b1: modify table css style

## 0.14.28

### Patch Changes

- 1eaf228: modify table css style

## 0.14.27

### Patch Changes

- dd768fe: modify table css style

## 0.14.26

### Patch Changes

- 4f6cf4b: The table supports the resizing of th

## 0.14.25

### Patch Changes

- ea12d9d: Show the placeholder if there are no selection options in the selection

## 0.14.24

### Patch Changes

- d55e138: never emit the click event if the disabled property value is true

## 0.14.23

### Patch Changes

- 13f1ae3: optimize Button component code

## 0.14.22

### Patch Changes

- 304649b: Fix the issue where the checkbox in the table header is not centered.

## 0.14.21

### Patch Changes

- d9f955d: Hide the floating element when the popup trigger is clicked, but only if the floating element is currently visible

## 0.14.20

### Patch Changes

- 5973024: Correct the incorrect "modelValue" value after deleting all selected options.

## 0.14.19

### Patch Changes

- 26f4f0a: modify the cursor style of the select component

## 0.14.18

### Patch Changes

- 2a9a977: selected options can be removed by clicking the tag's close button

## 0.14.17

### Patch Changes

- 1a0c808: Resolve the issue of incorrect validation status for form fields

## 0.14.16

### Patch Changes

- 98689c1: Resolve the issue where the shadow of the fixed column is displayed incorrectly when the table size changes.

## 0.14.15

### Patch Changes

- e550bb8: add an error status to the Select component

## 0.14.14

### Patch Changes

- 4c7e227: simplify Form composable functions for better validation access by other controls

## 0.14.13

### Patch Changes

- 617d087: The Selection component supports multiple selection.

## 0.14.12

### Patch Changes

- 4b90a5e: Change the background when the Selection component is disabled.

## 0.14.11

### Patch Changes

- 20f89a5: The Select component can be disabled

## 0.14.10

### Patch Changes

- c128fdb: The Select component can display the loading state.
- fd219c7: The Select component adds remote search functionality
- 7943ce4: The Selection components have the ability to filter options

## 0.14.9

### Patch Changes

- 3d66508: Select Options can be disabled

## 0.14.8

### Patch Changes

- a7be60c: refactor the Selection component

## 0.14.7

### Patch Changes

- 87482af: the Tooltip component allows the floating element to be appended to the body
- 22e94cf: The Popup component allows the floating element to be appended to the body.

## 0.14.6

### Patch Changes

- 6613a50: The Popup component does not hide the floating element when moving the mouse into the floating element.
- 12431ad: Inside the Popup component, encapsulate the mouse movement event handler using throttle instead of debounce.

## 0.14.5

### Patch Changes

- 040d00d: Optimize the implementation of the table header
- 7558f0e: optimize the implementation of the table tbody

## 0.14.4

### Patch Changes

- 9b1f31e: Rename the function
- 6dadbff: If no right fixed column is defined, the expand and selection columns of the table won't be fixed.

## 0.14.3

### Patch Changes

- 38ded6a: Modify the step size for switching years in the calendar component.
- 912d0ca: Add the DatePicker component

## 0.14.2

### Patch Changes

- 0940851: Users can easily change the year and month when using the Calendar component
- 8b90ce2: Emit the 'select' event after selecting a date
- 03afae6: The Calendar component supports the use of v-model
- dbb75cb: Refactor the logic of the Calendar component.
- 4144288: Modify the CSS style of the Calendar component
- ad5df63: The Calendar component allows setting disabled dates.

## 0.14.1

### Patch Changes

- 223192b: Always display 42 dates in the Calendar component
- 64b9e09: Highlight the selected date in the Calendar component.
- ba64b71: Prevent text selection in the Calendar component.

## 0.14.0

### Minor Changes

- 0fa5eda: add the Calendar component

### Patch Changes

- dc8c048: switch the CSS style of components from scoped to CSS module
- f1b2a74: switch the CSS style of the Checkbox and CheckboxGroup components from scoped to CSS module

## 0.13.4

### Patch Changes

- 547e3de: switch the CSS style of the Empty component from scoped to CSS module
- e852ba5: The Form component now supports the layout feature.
- ea962c6: switch the CSS style of the Table component from scoped to CSS mdoule
- 973d18a: Switch the CSS style of the Input components from scoped to CSS modules.

## 0.13.3

### Patch Changes

- 61918bd: Adjust the font style of the Tag component
- bc8a026: The Tag component supports closing

## 0.13.2

### Patch Changes

- e289c19: Revise the SCSS variables for colors.
- d3bced0: Move all frequently used icon components into the 'icons' folder.
- 846bb22: Modify the CSS style of the Checkbox component
- 1781b73: Resolve the issue of the Checkbox component displaying the wrong background when it is disabled.
- 503479f: Create a set of predefined colorful tag styles for various usage scenarios.
- 2e21ce9: Modify the default type of the Button component to 'soft'

## 0.13.1

### Patch Changes

- f34f139: Hide the floating element when clicking outside the Select component.
- fce66dd: utilize SCSS variables instead of hard-coded values within the Radio component
- 719a156: remove the name property of the CheckboxGroup component
- 915c4ad: revise the css style of the CheckboxGroup component
- 75088a0: The CheckboxGroup component adds a 'change' event.
- abc7446: revise the css style of the Select component
- 8eda6e4: Resolve the issue of the Popup component's arrow displaying incorrectly.
- 73104dd: Utilize SCSS variables instead of hard-coded values within the Checkbox component.
- 66e275a: Table columns without a specified width default to a minimum of 200px.

## 0.13.0

### Minor Changes

- 82c89ec: Add the Select component.
- 245d718: Add the tag component

### Patch Changes

- 5c7005b: remove the backgroundColor and fontColor property of the Popup component
- 1c0aa2d: Extract the common CSS values for form controls from the Input component.
- 0b76b45: Modify the CSS styles of the Popup and Tooltip components.

## 0.12.4

### Patch Changes

- 6036357: Create CSS design tokens for forms
- a93500b: Resolved the issue where the Popup component's floating element displayed incorrectly when the showArrow property was set to false.
- 5649ebf: Setting the default value for the form item store injection

## 0.12.3

### Patch Changes

- 7a64ae9: By default, the Popup component and Tooltip component are appended to the body

## 0.12.2

### Patch Changes

- f275dca: Remove the validation logic when the data is changed.
- caca777: The Form component allows access to the resetFields function
- 7dd15c4: The UniButton component supports the htmlType property, which allows you to specify the type of native button element
- ee9c222: The Form component allows access to the clearValidate function.

## 0.12.1

### Patch Changes

- 2fa8fe3: Form data can be validated at the form level
- 902dfe2: The Input and Password components support displaying error statuses for form validation.

## 0.12.0

### Minor Changes

- 7aac461: Add the Form and FormItem components

## 0.11.6

### Patch Changes

- b3367c7: Modify the import path of components

## 0.11.5

### Patch Changes

- 0cff708: Resolve the problem with the internationalization of the ConfirmModal component not working.

## 0.11.4

### Patch Changes

- f8a58f3: Internationalize the Empty component
- d677129: Add an error status to the Input component using the 'status' property
- fb0aaca: internationalize the NotFound component

## 0.11.3

### Patch Changes

- 2ca740a: Modify the location of the useConfig.ts file

## 0.11.2

### Patch Changes

- 6e95171: Add the fallbackLocale property to the ConfigProvider component

## 0.11.1

### Patch Changes

- d96953f: rename the en locale file

## 0.11.0

### Minor Changes

- d02c0e8: Add the ConfigProvider component

### Patch Changes

- d8d8492: Internationalize the Empty component

## 0.10.3

### Patch Changes

- f806359: Make the 'selectedRowKeys' property of the Table component optional

## 0.10.2

### Patch Changes

- f04ba4f: The Password component can listen for the "change" and "input" events.

## 0.10.1

### Patch Changes

- e1875f5: The input component can be disabled, and a placeholder can be set.

## 0.10.0

### Minor Changes

- d825477: Add the Password component

## 0.9.5

### Patch Changes

- f515c3d: Replace the native radio element with the UniRadio Component within the Table component.

## 0.9.4

### Patch Changes

- 3a5e5f5: Fix the layout issue that occurs when the inline property is passed to the Checkbox component.
- 3bda64b: Modify the CSS style of the Checkbox component

## 0.9.3

### Patch Changes

- 48900e8: The Button component supports the disabled feature.

## 0.9.2

### Patch Changes

- 3f2a8e6: The Radio and RadioGroup components can be disabled.

## 0.9.1

### Patch Changes

- 4101082: The RadioGroup component can use v-model to bind its value.

## 0.9.0

### Minor Changes

- 98aa2bb: add RadioGroup component

## 0.8.2

### Patch Changes

- 1d3bbd5: Remove any keys from selectedRowKeys that do not exist in data.

## 0.8.1

### Patch Changes

- cd8b195: change the text of the Empty component
- 4b08caf: Modify the CSS style of the Table component.
- 6b8e808: Integrate the FilePicker into the FileDropZone.

## 0.8.0

### Minor Changes

- fcf38a9: Add FilePicker component

## 0.7.7

### Patch Changes

- 9a26f3d: modify component names

## 0.7.7

### Patch Changes

- 848e7de: The FileDropZone allows for customized content.

## 0.7.6

### Patch Changes

- 2bff8e0: The Button component allows for rounded borders.

## 0.7.5

### Patch Changes

- 11b3b9f: Add a 'Close' button to the Modal component.
- 8adc8ce: Add a 'modalClass' property to the Modal component for custom styling.

## 0.7.4

### Patch Changes

- d4218f6: Corrected the issue where the Scrim display was incorrect when the content exceeded the viewport height

## 0.7.3

### Patch Changes

- 40d2e58: Change the useUniConfirmModal's confirm method to the form of a promise
- 9322471: Modify the z-index of the Scrim component

## 0.7.2

### Patch Changes

- 5d6d178: refactor Modal component

## 0.7.1

### Patch Changes

- e06063e: The switch component can be rendered unusable

## 0.7.0

### Minor Changes

- e64742d: Add Switch component

## 0.6.1

### Patch Changes

- 7248553: add a 'readonly' property to the Input component

## 0.6.0

### Minor Changes

- 06ac04b: add NotFound component

## 0.5.4

### Patch Changes

- 11c2431: fix the issue of incorrect calculation of table column count

## 0.5.3

### Patch Changes

- 8f6c153: If the total width of all columns is less than the width of the table, then the width of all columns will be set to 'auto'.

## 0.5.2

### Patch Changes

- 3a726d8: remove the 'selectedRowKeys' property from the table's state.

## 0.5.1

### Patch Changes

- 14028ff: adjust the height of the table rows and font size of the table cells
- b55c378: Update the hint text of the Empty component.

## 0.5.0

### Minor Changes

- f4ccf91: Add the Empty component

### Patch Changes

- 2af6dcc: Replace the empty data placeholder in the table with the UniEmpty component

## 0.4.3

### Patch Changes

- 088df9e: Add both the 'input' and 'change' events to the input component.

## 0.4.2

### Patch Changes

- 772983c: change the width of the table header divider
- 772983c: change the hover color of the table rows

## 0.4.1

### Patch Changes

- 1a6b4f9: hide the expand toggle cell if none of the data meets the condition for expanding
- f987a32: Solved the issue of incorrect sticky positioning of selection columns

## 0.4.0

### Minor Changes

- 38ab0e2: the input component can add add-on and inline add-on

### Patch Changes

- b695682: solved the issue of incorrect shadow display for expand toggle cells and selection toggle cells
- 7029c30: Fix issue with table sorting

## 0.3.2

### Patch Changes

- 8655a71: update version of dependencies

## 0.3.1

### Patch Changes

- 51f4dae: Fix the bug where the selection column does not display the shadow correctly when the selection type is set to single.
- 51f4dae: fix the bug where the table sort state changes incorrectly

## 0.3.0

### Minor Changes

- change the type of button
- add the size prop which can change button size.

## 0.2.0

### Minor Changes

- 21535b9: add FilePicker

## 0.1.0

### Minor Changes

- 8c7d0be: add input component

### Patch Changes

- 71f91ff: Popup can use offset prop to set floating element's offset
