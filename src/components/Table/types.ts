export type Record = any;

export type Key = string | number;

export interface Column {
  key: string;
  title: string;
  width?: number;
  fixed?: "left" | "right";
  sortable?: boolean;
}

export interface RootProps {
  /** 数据唯一索引 */
  rowKey: Key;
  data: Record[];
  columns: Column[];
  rowExpand?: {
    expandCondition: (Record: Record) => boolean;
  };
  sort?: {
    columnKey: Key;
    order: "ascending" | "descending";
  };
  showFoot?: boolean;

  selection?: {
    type?: "multiple" | "single";
    disabledCondition: (record: Record) => boolean;
  };
  selectedRowKeys?: Set<Key>;
}

export interface RootState {
  selectedRowKeys: Set<Key>;
}

export interface RootEmit {
  (e: "update:selectedRowKeys"): void;
  /** executed when select/deselect one row */
  (e: "select", params: { record: Record; selected: boolean }): void;
  /** executed when selected rows change */
  (e: "selectChange", params: { newSelectedRowKeys: Set<Key> }): void;
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
