export type Record = any;

export type Key = string | number;

export type SortType = "ascending" | "descending";

export interface Column {
  key: string;
  title: string;
  /** When a column is fixed, it is necessary to provide the 'width' property */
  width?: number;
  fixed?: "left" | "right";
  sortable?: boolean;
  sortType?: SortType[];
  /** ellipsis cell content via setting 'ellipsis' property. The 'ellipsis' property only valid the column not use the slot  */
  ellipsis?: boolean;
}

export interface RootProps {
  rowKey: Key;
  data: Record[];
  columns: Column[];
  rowExpand?: {
    expandCondition: (record: Record) => boolean;
    showExpandRowDefault?: boolean;
  };
  sort?: {
    columnKey: Key;
    order: SortType;
  } | null;
  showFoot?: boolean;
  selection?: {
    type: "multiple" | "single";
    disabledCondition?: (record: Record) => boolean;
  };
  selectedRowKeys?: Set<Key>;
  tbodyRowClass?: string | ((record: Record) => string);
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
