import { BOXES } from './db.boxes';
import { Sku } from './sku.module';

export const SKUS: Sku[] = [
  {
    skuName: 'location A',
    boxes: BOXES,
  },
  {
    skuName: 'location B',
    boxes: BOXES,
  },
];
