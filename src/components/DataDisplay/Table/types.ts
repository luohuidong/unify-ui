export type Record = any;

export type Key = string | number;

export type SortType = "ascending" | "descending";

export interface Column {
  key: string;
  title: string;
  /** should pass width if column is fixed. */
  width?: number;
  fixed?: "left" | "right";
  sortable?: boolean;
  sortType?: SortType[];
  /** ellipsis cell content via setting column.ellipsis. ellipsis only valid the column not use the slot  */
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
}

export interface RootEmit {
  (e: "update:selectedRowKeys", selectedRowKeys: Set<Key>): void;
  /** emit when select/deselect one row */
  (e: "select", params: { selected: boolean; rowKey: Key; record: Record }): void;
  /** emit when select/deselect all rows */
  (e: "selectAll", params: { selected: boolean; rowKeys: Key[]; records: Record[] }): void;
  /** emit when click sortable column table header cell */
  (e: "update:sort", params: { columnKey: Key; order: SortType } | null): void;
  /** emit when click sortable column table header cell */
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
}
