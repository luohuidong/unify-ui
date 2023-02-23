export type Record = any;

export interface Column {
  key: string;
  title: string;
  width?: number;
  fixed?: "left" | "right";
  sortable?: boolean;
}

export interface RootProps {
  /** 数据唯一索引 */
  rowKey: string;
  data: Record[];
  columns: Column[];
  rowExpand?: {
    expandCondition: (Record: Record) => boolean;
  };
  sort?: {
    columnKey: string;
    order: "ascending" | "descending";
  };
  showFoot?: boolean;
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
