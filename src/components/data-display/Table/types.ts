import type { ComputedRef } from "vue";

export type Record = any;

export type Key = string | number;

export type SortType = "ascending" | "descending";

export interface Column {
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

  /**
   * Minimum width of the column
   * @default 200
   */
  minWidth?: number;
}

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

export interface TableState {
  selectionColumnOffset: number;

  showExpandToggleCell: boolean;
}

export interface TableEmits {
  (e: "update:selectedRowKeys", selectedRowKeys: Set<Key>): void;

  (e: "update:sort", params: { columnKey: Key; order: SortType } | null): void;

  /** Emits the "select" event when a row is selected or deselected. */
  (e: "select", params: { selected: boolean; rowKey: Key; record: Record }): void;

  /** Emits the "selectAll" event when all rows are selected or deselected. */
  (e: "selectAll", params: { selected: boolean; rowKeys: Key[]; records: Record[] }): void;

  /** Emits the "sortChange" event when the column sort order changes */
  (e: "sortChange", params: { columnKey: Key; order: SortType } | null): void;
}

export interface ColumnData extends Column {
  leftLastFixedColumn?: boolean;

  leftOffset?: number;

  rightFirstFixedColumn?: boolean;

  rightOffset?: number;
}

export interface ShowShadow {
  showLeftFixedColumnShadow: boolean;
  showRightFixedColumnShadow: boolean;
}

export interface ColumnsInfo {
  columnsData: ComputedRef<ColumnData[]>;
  columnCount: ComputedRef<number>;
  hasLeftFixedColumn: ComputedRef<boolean>;
}
