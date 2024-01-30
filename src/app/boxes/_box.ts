export interface Box {
  name: string;
  item: BoxItem[];
}

export interface BoxItem {
  itmeName: string;
  qty?: number;
}
