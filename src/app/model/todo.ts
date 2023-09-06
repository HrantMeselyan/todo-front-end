import {Category} from "./category";
import {Status} from "./enum";

export interface TodoDto {
  id: number;
  title: string;
  status: Status;
  category: Category;
}
