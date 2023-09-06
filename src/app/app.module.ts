import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoService} from "./todo.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MainComponent} from "./main/main.component";
import {HeaderComponent} from './layouts/header/header.component';
import {AngularEditorModule} from "@kolkov/angular-editor";

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        AngularEditorModule,
        ReactiveFormsModule

    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
