##Angular Architecture - Smart Components vs Presentational Components

Components might seem quite simple but there is a lot more to it than meets the eye. The Components structure breaks the page into chunks and helps you manage your page in a very flexible way by encapsulating all the styles, markups, and business logic into each individual Component, and then you merge them to build your app.

`Smart Components:` also know sometimes as application-level components, container components or controller components

Smart Components are those components who know how to handle data, How to fetch data from services, How to interact with services and keep track of the state and care about how the app works as a whole. They are called containers as they send data to Dumb Components via property bindings.

``
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
    private API_KEY:string = 'API_KEY';
    book: Observable<any[]>;
    constructor(private _http: HttpClient) { }
    ngOnInit() {
        const URL = 'https://www.googleapis.com/books/v1';
        //Fetch All Books from API
        //@Params = URL: String
        this.fetchBooks(URL);
    }
    fetchBooks(URL: string){
        this.book = this._http.get<any>(`${URL}/q=&key=${this.API_KEY}`,             
        {headers}).pipe(
        map(resp=>{
            return resp.items;
        });
    );
}}
``

`Presentation Components:` also known sometimes as pure components or dumb components

A Component that does absolutely nothing on its own and is dependent on Smarter Components.

All Dumb Components do is present themselves to the DOM. Hence they are also referred to as “Presentational Components” or something called “Isolated Components”.

``
import{ Component, Input, OnInit } from ‘@angular/core’;
@Component({
    selector: ‘app-book-list’,
    templateUrl: ‘./book-list.component.html’,
    styleUrls: [‘./book-list.component.css’]
})
export class BookListComponent implements OnInit {
    @Input(‘book’) book: any[];
    constructor() { }
        ngOnInit() {
    }
}
``

##Conclusion
Using these concepts, we have separated the business logic code and presentation code between smart and dumb components. This intern allows for one component to do all the heavy lifting while leaving the other ones to display the data smoothly.

#Ref: https://blog.angular-university.io/angular-2-smart-components-vs-presentation-components-whats-the-difference-when-to-use-each-and-why/