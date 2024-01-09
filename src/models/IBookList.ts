import { IBookItem } from './IBookItem';

export interface IBookList {
    kind: string;
    totalItems: number;
    items: IBookItem[];
  }