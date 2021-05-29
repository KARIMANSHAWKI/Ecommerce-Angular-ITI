import { Good } from './goods.interface';

export interface Order {
  id?: string;
  userId?: string;
  date?: string;
  items?: Good[];
  status: string;
}
