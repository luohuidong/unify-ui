<script setup lang="ts">
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue'
import ShowCaseFixedColumn from './ShowCaseFixedColumn.vue'
import ShowCaseSingleSelection from './ShowCaseSingleSelection.vue'
import ShowCaseMultipleSelection from './ShowCaseMultipleSelection.vue'
import ShowCaseExpandableRow from './ShowCaseExpandableRow.vue'
import ShowCaseCustomHeader from './ShowCaseCustomHeader.vue'
import ShowCaseNoData from './ShowCaseNoData.vue'
import ShowCaseSort from './ShowCaseSort.vue'
import ShowCaseTextEllipsis from './ShowCaseTextEllipsis.vue'
</script>

# Table

## Basic Usage

The simplest way to create a table is by defining the `row-key`, `columns`, and `data` props. The `row-key` prop represents a unique identifier for each data item. The `columns` prop is used to define the columns of the table, and the `data` prop is used to pass the data that the table should display.

If you want to customize the content of a cell, you can define the content and then pass it to the appropriate slot. The `key` attribute of the `columns` prop represents the slot name for the corresponding cell slot.

::: raw
<ShowCaseBasicUsage class="vp-raw" />
:::

::: details View Source
<<< @/components/data-display/table/ShowCaseBasicUsage.vue
:::

## Fixed Columns

The table supports fixed columns. For keeping the left columns fixed in the table, you can set the `fixed` attribute of the `columns` prop to `left`. Similarly, to keep the right columns fixed in the table, you can set the `fixed` attribute of the `columns` prop to `right`.

::: raw
<ShowCaseFixedColumn class="vp-raw" />
:::

::: details View Source
<<< @/components/data-display/table/ShowCaseFixedColumn.vue
:::

## Selection

Rows can be selected by using the `selection` prop. The `selection` prop is an object that contains the following properties:

- `type`: Type of selection. Can be `single` or `multiple`
- `disabledCondition`: Function to determine whether the row can be selected

### Single Selection

If you want to ensure that only one row can be selected at a time, set the `type` attribute of the `selection` prop to `single`.

::: raw
<ShowCaseSingleSelection class="vp-raw" />
:::

::: details View Source
<<< @/components/data-display/table/ShowCaseSingleSelection.vue
:::

### Multiple Selection

If you want to allow multiple rows to be selected in the table simultaneously, you can set the `type` attribute of the `selection` prop to `multiple`.

::: raw
<ShowCaseMultipleSelection class="vp-raw" />
:::

::: details View Source
<<< @/components/data-display/table/ShowCaseMultipleSelection.vue
:::

## Expandable Row

::: raw
<ShowCaseExpandableRow class="vp-raw" />
:::

::: details View Source
<<< @/components/data-display/table/ShowCaseExpandableRow.vue
:::

## Custom Header

::: raw
<ShowCaseCustomHeader class="vp-raw" />
:::

::: details View Source
<<< @/components/data-display/table/ShowCaseCustomHeader.vue
:::

## No Data

::: raw
<ShowCaseNoData class="vp-raw" />
:::

::: details View Source
<<< @/components/data-display/table/ShowCaseNoData.vue
:::

## Sort

::: raw
<ShowCaseSort class="vp-raw" />
:::

::: details View Source
<<< @/components/data-display/table/ShowCaseSort.vue
:::

## Text Ellipsis

::: raw
<ShowCaseTextEllipsis class="vp-raw" />
:::

::: details View Source
<<< @/components/data-display/table/ShowCaseTextEllipsis.vue
:::

## API

### Table Props

| Property        | Type    | Default | Description                       |
| --------------- | ------- | ------- | --------------------------------- |
| columns         | Array   | -       | Columns of table                  |
| data            | Array   | -       | Table data                        |
| rowExpand       | Object  | -       | Enabled row can be expandable     |
| rowKey          | String  | -       | Row's unique key                  |
| selectedRowKeys | Set     | -       | The set of selected row keys      |
| selection       | Object  | -       | Config of row selection           |
| showFoot        | Boolean | false   | Whether to show foot              |
| sort            | Object  | -       | Config of row sort                |
| tbodyCellClass  | String  | -       | Class name of table body row cell |
| tbodyRowClass   | String  | -       | Class name of Table body row      |

#### columns

| Property | Type    | Default | Description                                                                                                                       |
| -------- | ------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ellipsis | Boolean | false   | If the text content in a cell exceeds the available space, it can be clipped and replaced with an ellipsis to indicate truncation |
| fixed    | String  | -       | `left` or `right`. To set Column to fixed left or right of the table                                                              |
| key      | String  | -       | Column key                                                                                                                        |
| sortable | Boolean | false   | To set Column to be Sortable                                                                                                      |
| sortType | Array   | -       | Array need to be one of the following:`ascending` or `descending`. The column sort type                                           |
| title    | String  | -       | Column title                                                                                                                      |
| width    | String  | -       | Column width                                                                                                                      |

#### rowExpand

| Property             | Type     | Default | Description                                           |
| -------------------- | -------- | ------- | ----------------------------------------------------- |
| expandCondition      | Function | -       | Function to determine whether the row can be expanded |
| showExpandRowDefault | Boolean  | false   | Whether to show expand row by default                 |

#### selection

| Property          | Type     | Default | Description                                           |
| ----------------- | -------- | ------- | ----------------------------------------------------- |
| type              | String   | -       | Type of selection. Can be `single` or `multiple`      |
| disabledCondition | Function | -       | Function to determine whether the row can be selected |
