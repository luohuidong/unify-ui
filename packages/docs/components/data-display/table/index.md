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

::: raw
<ShowCaseBasicUsage class="vp-raw" />
:::

::: details View Source
<<< @/components/data-display/table/ShowCaseBasicUsage.vue
:::

## Fixed Column

::: raw
<ShowCaseFixedColumn class="vp-raw" />
:::

::: details View Source
<<< @/components/data-display/table/ShowCaseFixedColumn.vue
:::

## Single Selection

::: raw
<ShowCaseSingleSelection class="vp-raw" />
:::

::: details View Source
<<< @/components/data-display/table/ShowCaseSingleSelection.vue
:::

## Multiple Selection

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
| key      | String  | -       | Column key                                                                                                                        |
| title    | String  | -       | Column title                                                                                                                      |
| width    | String  | -       | Column width                                                                                                                      |
| fixed    | String  | -       | `left` or `right`. To set Column to fixed left or right of the table                                                              |
| sortable | Boolean | false   | To set Column to be Sortable                                                                                                      |
| sortType | Array   | -       | Array need to be one of the following:`ascending` or `descending`. The column sort type                                           |
| ellipsis | Boolean | false   | If the text content in a cell exceeds the available space, it can be clipped and replaced with an ellipsis to indicate truncation |
