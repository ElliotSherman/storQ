import { BoxItem } from './box-item.module';

export interface Location {
  locationName: string;
  boxes?: BoxItem[];
}
