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
  right?: number;
  left?: number;
}

export interface ShowShadow {
  showLeft: boolean;
  showRight: boolean;
}
