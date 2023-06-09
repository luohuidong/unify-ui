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

The rows in the table can be selected by using the `selection` prop. The `selection` prop is an object that contains the following properties:

- `type`: the type of selection, which can be either `single` or `multiple`
- `disabledCondition`: a function that determine whether a row can be selected.

You can use the `v-model:selectedRowKeys` to get the selected row keys.

Additionally, there are two events that you can use to listen to changes in selection:

- `select`: emitted when a row is selected
- `select-all`: emitted when all rows are selected

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

The `rowExpand` prop can be used to mark a row expandabled. The `rowExpand` prop is an object that contains the following properties:

- `expandCondition`: a function that determine whether a row can be expanded.
- `showExpandRowDefault`: whether to show expand row by default.

Additionally, you must define the content of the expanded row and pass it to the slot named `rowExpand`.

::: raw
<ShowCaseExpandableRow class="vp-raw" />
:::

::: details View Source
<<< @/components/data-display/table/ShowCaseExpandableRow.vue
:::

## Custom Header

Sometimes, you may want to customize the content of a column header cell. In this case, when you define a column with `column.key` as `author`, you can pass the custom content to the slot named `header-author`.

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

```ts
export interface TableProps {
  columns: Column[];

  /** Table data */
  data: Record[];

  /** Enabled row can be expandable */
  rowExpand?: {
    expandCondition: (record: Record) => boolean;
    showExpandRowDefault?: boolean;
  };

  /** Row's unique key */
  rowKey: Key;

  /** The set of selected row keys */
  selectedRowKeys?: Set<Key>;

  /** Config of row selection */
  selection?: {
    type: "multiple" | "single";
    disabledCondition?: (record: Record) => boolean;
  };

  /** Whether to show foot */
  showFoot?: boolean;

  /** Config of row sort  */
  sort?: {
    columnKey: Key;
    order: SortType;
  } | null;

  /** Class name of Table body row */
  tbodyCellClass?: string;

  /** Class name of table body row cell */
  tbodyRowClass?: string | ((record: Record) => string);
}
```

#### columns

```ts
interface Column {
  /**
   * If the text content in a cell exceeds the available space, it can be clipped and
   * replaced with an ellipsis to indicate truncation
   */
  ellipsis?: boolean;

  /** `left` or `right`. To set Column to fixed left or right of the table  */
  fixed?: "left" | "right";

  /** Column key */
  key: string;

  /** To set Column to be Sortable */
  sortable?: boolean;

  /** The column sort type. Array need to be one of the following:`ascending` or `descending`. */
  sortType?: SortType[];

  /** Column title */
  title: string;

  /** Column width. When a column is fixed, it is necessary to provide the 'width' property */
  width?: number;
}
```

### Event

```ts
interface TableEmits {
  (e: "update:selectedRowKeys", selectedRowKeys: Set<Key>): void;

  (e: "update:sort", params: { columnKey: Key; order: SortType } | null): void;

  /** Emits the "select" event when a row is selected or deselected. */
  (
    e: "select",
    params: { selected: boolean; rowKey: Key; record: Record }
  ): void;

  /** Emits the "selectAll" event when all rows are selected or deselected. */
  (
    e: "selectAll",
    params: { selected: boolean; rowKeys: Key[]; records: Record[] }
  ): void;

  /** Emits the "sortChange" event when the column sort order changes */
  (e: "sortChange", params: { columnKey: Key; order: SortType } | null): void;
}
```