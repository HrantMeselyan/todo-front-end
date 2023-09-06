import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {environment} from "../environment";
import {Category} from "../model/category";


@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(`${this.apiServerUrl}/category`);
    }

    public addCategory(category: Category): Observable<Category> {
        return this.http.post<Category>(`${this.apiServerUrl}/category`, category);
    }

    public deleteCategory(categoryId: number): Observable<void> {
        const url = `${this.apiServerUrl}/category/${categoryId}`;
        return this.http.delete<void>(url);
    }
}
