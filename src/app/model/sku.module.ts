import { BoxItem } from './box-item.module';

export interface Sku {
  skuName: string;
  boxes?: BoxItem[];
}
