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

  selectionType?: "multiple" | "single";
  selectedRowKeys?: Set<Key>;
  selectedRows?: Map<string, Record>;
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

export interface RootState {
  selectedRowKeys: Set<Key>;
  selectedRows: Map<Key, Record>;
}
