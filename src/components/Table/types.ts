export type Record = any;

export interface RootProps {
  /** 数据唯一索引 */
  rowKey: string;
  data: Record[];
  columns: {
    key: string;
    title: string;
    width?: number;
    fixed?: "left" | "right";
    sortable?: boolean;
  }[];
  rowExpand?: {
    expandCondition: (Record: Record) => boolean;
  };
  sort?: {
    columnKey: string;
    order: "ascending" | "descending";
  };
  showFoot?: boolean;
}
