# Angular 9/8 Change Detection Tutorial with Example

In this Angular tutorial, We are going to see how does Change Detection Strategy work in a simple and easy way.
The ChangeDetectorRef will be explored in this tutorial for your reference. Every time there is a change in the app, Angular will perform ChangeDetectorRef on all the components.

Whether it is a network request or user event, change detection will be performed by Angular.

Depending on the increase in the components of the apps and complexity, ChangeDetectorRef in Angular 9/8/7 will end up doing more work.

When it comes to specific components, we can set ChangeDetectionRef strategy to OnPush. Angular will take this is a call to run Changedetectionstrategy on the components and their component chain alone.

We are going to explore ChangeDetectionRef examples in Angular in this article.We are going to look at change detection for Angular 7 below. We can decode change detection with the help of a clear example.

Angular 9/8 Change Detection Example
Add the following code in app.component.ts file:
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  fruits = ['Mengo', 'Orange', 'Banana'];

  constructor() { }

  addFruit(item) {
    this.fruits.push(item);
  }  
}
```

Go to app.component.html file and add the following code.

```
<input #newFruit type="text" placeholder="Enter a new fruit">
<button (click)="addFruit(newFruit.value)">Add Fruit</button>

<app-child [data]="fruits"></app-child>
```

Go to your child > child.component.ts file and add the following code.
```
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {

  @Input() data: string[];

  constructor() { }

}
```

Go to your child > child.component.html file and add the following code.
```
<h1>Fruit List</h1>

<ul>
  <li *ngFor="let item of data">{{item}}</li>
</ul>
```

As you can see things go as planned. You can see that new fruit items are being added to the list. Let’s set Angular’s OnPush change detection strategy in the child component.

Go to your child > child.component.ts file and add the following code.
```
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChildComponent {

  @Input() data: string[];

  constructor() { }

}
```

However, it doesn’t seem to be working. Angular fails to see a new reference that suggests data input. Therefore, change detection doesn’t get invoked.

In order to make it tick, we must pass a new reference. You can go for a method like given below:
```
addFruit(item) {
  this.fruits = [...this.fruits, item];
}
```

Here we are returning a new foods array instead of mutating it. As you can see, it is working like magic now! As you can see Angular ran change detection after detecting a new reference to data.

The good thing about OnPush strategy in Angular 7 is that it fits well with most components. We are using ngrx/store to manage state, and it is powerful in its way! Here ngrx will bear the responsibility to new references if there is a change in data.

Understanding ChangeDetectorRef in Angular 7
Instead of the methods we have seen, we can adopt ChangeDetectRef to gain full control.

ChangeDetectorRef.detectChanges()

We can have a button in the child component. Let’s take a look at the example of a refresh button below.

Go to your child > child.component.ts file and add the following code.
```
import {
  Component,
  Input,
  ChangeDetectorRef,  
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChildComponent {
  @Input() data: string[];
  
  constructor(private cd: ChangeDetectorRef) { }

  update() {
    this.cd.detectChanges();
  }
}
```

Go to your child > child.component.html file and include the following code.
```
<h1>Fruit List</h1>

<button (click)="update()">Update Data</button>

<ul>
  <li *ngFor="let item of data">{{item}}</li>
</ul>
```

Angular will run change detection the moment we click the refresh button.

ChangeDetectorRef.markForCheck() in Angular 9/8/7

Alternatively, in other words, we can call the data input an observable. We are going to explain it with the help of an example. We are going to use the RxJS Behavior Subject here:

Go to app.component.ts.
```
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  fruits = new BehaviorSubject(['Mengo', 'Orange', 'Banana']);

  constructor() { }

  addFruit(item) {
    this.fruits.next(item);
  }  
}
```

We are going to add new fruit items to the array in the following example:

Go to app.component.ts.
```
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChildComponent implements OnInit {
  @Input() data: Observable<any>;
  fruitList: string[] = [];
  
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.data.subscribe(item => {
      this.fruitList = [...this.fruitList, ...item];
    });
  }
}
```

This is supposed to work like the previous example. However, Angular refuses to run change detection. How to solve this then? Well, it is time for us to call markForCheck of ChangeDetectorRef.
```
  ngOnInit() {
    this.data.subscribe(item => {
      this.fruitList = [...this.fruitList, ...item];
      this.cd.markForCheck();
    });
  }
  ```

markForCheck will tell Angular to run change detection when a particular input comes into picture when mutated.

ChangeDetectorRef.detach() and ChangeDetectorRef.reattach()

Another interesting thing about ChangeDetectorRef is that you can use the detach and reattach methods to change detection in a manual manner in Angular.

