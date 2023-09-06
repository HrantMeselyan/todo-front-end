import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../todo.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {TodoDto} from "../../model/todo";
import {Category} from "../../model/category";
import {CategoryService} from "../../main/category.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public todo: TodoDto[] = [];
    public editToDo: TodoDto | null = null;
    public deleteToDo: TodoDto | null = null
    public categories: Category[] = [];


    constructor(private categoryService: CategoryService, private todoService: TodoService) {
    }

    ngOnInit() {
        this.getToDos()
        this.getCategories()
    }

    public getToDos(): void {
        this.todoService.getToDos().subscribe(
            (response: TodoDto[]) => {
                this.todo = response;
                console.log(this.todo);
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    public getCategories(): void {
        this.categoryService.getCategories().subscribe(
            (response: Category[]) => {
                this.categories = response;
                console.log(this.categories);
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    public onAddToDo(addForm: NgForm): void {

        // @ts-ignore
        document.getElementById('add-ToDo-form').click();
        this.todoService.addTodo(addForm.value).subscribe(
            (response: TodoDto) => {
                console.log(response);
                this.getToDos();
                addForm.reset();
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
                addForm.reset();
            }
        );
    }


    public onOpenModal(toDo: TodoDto | null, mode: string): void {
        const container = document.getElementById('main-container');
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-toggle', 'modal');
        if (container) {
            if (mode === 'add') {
                button.setAttribute('data-target', '#addToDoModal');
            }
            if (mode === 'edit') {
                this.editToDo = toDo;
                button.setAttribute('data-target', '#updateToDoModal');
            }
            if (mode === 'delete') {
                this.deleteToDo = toDo;
                button.setAttribute('data-target', '#deleteToDoModal');
            }
            container.appendChild(button);
            button.click();
        }
    }
}
