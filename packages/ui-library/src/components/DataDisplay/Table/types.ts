export type Record = any;

export type Key = string | number;

export type SortType = "ascending" | "descending";

export interface Column {
  /** Column key */
  key: string;
  /** Column title */
  title: string;
  /** Column width. When a column is fixed, it is necessary to provide the 'width' property */
  width?: number;
  /** `left` or `right`. To set Column to fixed left or right of the table  */
  fixed?: "left" | "right";
  /** To set Column to be Sortable */
  sortable?: boolean;
  /** The column sort type. Array need to be one of the following:`ascending` or `descending`. */
  sortType?: SortType[];
  /** If the text content in a cell exceeds the available space, it can be clipped and replaced with an ellipsis to indicate truncation  */
  ellipsis?: boolean;
}

export interface RootProps {
  /** Row's unique key */
  rowKey: Key;
  /** Table data */
  data: Record[];
  columns: Column[];
  /** Enabled row can be expandable */
  rowExpand?: {
    expandCondition: (record: Record) => boolean;
    showExpandRowDefault?: boolean;
  };
  /** Config of row sort  */
  sort?: {
    columnKey: Key;
    order: SortType;
  } | null;
  /** Whether to show foot */
  showFoot?: boolean;
  /** Config of row selection */
  selection?: {
    type: "multiple" | "single";
    disabledCondition?: (record: Record) => boolean;
  };
  /** The set of selected row keys */
  selectedRowKeys?: Set<Key>;
  /** Class name of table body row cell */
  tbodyRowClass?: string | ((record: Record) => string);
  /** Class name of Table body row */
  tbodyCellClass?: string;
}

export interface RootState {
  selectedRowKeys: Set<Key>;
  showExpandToggleCell: boolean;
  selectionColumnOffset: number;
}

export interface RootEmit {
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
  rightOffset?: number;
  rightFirstFixedColumn?: boolean;
  leftOffset?: number;
  leftLastFixedColumn?: boolean;
}

export interface ShowShadow {
  showLeftFixedColumnShadow: boolean;
  showRightFixedColumnShadow: boolean;
  selectionColumnShadowVisible: boolean;
  expandColumnShadowVisible: boolean;
}
