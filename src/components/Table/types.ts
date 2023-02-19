export type Record = any;

export interface RootProps {
  rowKey: string;
  columns: {
    key: string;
    title: string;
  }[];
  rowExpand?: {
    expandCondition: (record: Record) => boolean;
  };
  data: Record[];
}
