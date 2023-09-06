import {Status} from "./enum";

export interface TodoRequestDto {
    id: number;
    title: string;
    status: Status;
    categoryId: number;
}
