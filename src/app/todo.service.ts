import {BehaviorSubject, Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "./environment";
import {TodoDto} from "./model/todo";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private todos: TodoDto[] = [];
    private todoSubject = new BehaviorSubject<TodoDto[]>([]);

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    public addTodo(todo: TodoDto): Observable<TodoDto> {
        return this.http.post<TodoDto>(`${this.apiServerUrl}/todo/save`, todo);
    }


    public getToDos(): Observable<any> {
        return this.http.get<any>(`${this.apiServerUrl}/todo`);
    }

    public getById(todoId: number): Observable<TodoDto> {
        return this.http.get<TodoDto>(`${this.apiServerUrl}/todo/${todoId}`);
    }


    public update(todo: TodoDto): Observable<TodoDto> {
        return this.http.put<TodoDto>(`${this.apiServerUrl}/todo/update`, todo);
    }


    public delete(toDoId: number): Observable<void> {
        const url = `${this.apiServerUrl}/todo/delete/${toDoId}`;
        return this.http.delete<void>(url);
    }

}
