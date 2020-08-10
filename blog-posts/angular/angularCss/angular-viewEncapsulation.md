
## ViewEncapsulaion in Angular

Before deep dive into ViewEncapsulation first understand ShadowDOM.

ShadowDOM which is separate form others code so that different parts do not clash.
The ShadowDOM API key is part of this, providing a way to attach hidden sperated DOM to an element.

https://media.prod.mdn.mozit.cloud/attachments/2018/01/29/15788/9d23f749f26b93a00f5c2aa72f00e720/shadow-dom.png

What Is ViewEncapsulation in Angular?
In this article, we take a look at ViewEncapsulation and the Shadow DOM in Angular. Though it may sound a little sketchy, no need to worry. It's actually really helpful!
 by Dhananjay Kumar    · Jun. 18, 18 · Web Dev Zone · Tutorial
Like (11)
  Comment (0) 
Save  Tweet 75.85k Views
Join the DZone community and get the full member experience. JOIN FOR FREE

To understand ViewEncapsulation in Angular, first, we should understand the Shadow DOM. You can learn in detail about the Shadow DOM here. Simply put, the Shadow DOM brings Encapsulation to HTML Elements. Using the Shadow DOM, markup, styles, and behaviors are scoped to the element and do not clash with other nodes of the DOM. The Shadow DOM is part of Web Components, which encapsulates styles and login of the element.

Angular Components are made up of three things:

Component Class
Template
Style
The combination of these three factors makes an Angular component reusable across an application. Theoretically, when you create a component, in some way you create a web component (theoretically, Angular Components are not web components) to take advantage of the Shadow DOM. You can also use Angular with browsers, which does not support the Shadow DOM because Angular has its own emulation and it can emulate the Shadow DOM.

To emulate the Shadow DOM and encapsulate styles, Angular provides there types of View Encapsulation. They are as follows:



Let's try to understand it using an example. I have created a component, as shown below:

app.component.ts
import { Component, ViewEncapsulation } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    title = 'parent component';
}
app.component.html app.component.css
h1 {
        background: red;
        color: white;
        text-transform: uppercase;
        text-align: center;
    }
We are setting the style of h1 in the component CSS. We have also created another component:

import { Component } from '@angular/core';
@Component({
    selector: 'app-child',
    template: `
  <h1>{{title}}</h1>
  `
})
export class AppChildComponent {
    title = 'child app';
}
In AppChildComponent, we are also using the h1 tag. To understand different ViewEncapsulation options, we will change the metadata of AppComponent.

Let us start with ViewEncapsulation.None, in this option:

There is no shadow DOM.
Style is not scoped to the component.
As you run the application, you will find h1 style has applied to both components, even though we only set style the in AppComponent. This happened because in AppComponent we have set the encapsulation property to ViewEncapsulation.None.

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    title = 'parent component';
}
In the browser, when you examine source code, you will find the h1 style has been declared in the head section of the DOM.



Therefore, in ViewEncapsulation.None, the style gets moved to the DOM's head section and is not scoped to the component. There is no Shadow DOM for the component and the component style can affect all nodes in the DOM.

Next, let us explore ViewEncapsulation.Native, in this option:

Angular will create Shadow DOM for the component.
Style is scoped to the component.
As you run the application, you will find the h1 style has applied to both components, even though we only set the style only in AppComponent. This happened because in AppComponent we have set the encapsulation property to ViewEncapsulation.Native, and we are using AppChildComponnet as a child inside the template of AppComponent.

import { Component, ViewEncapsulation } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
    title = 'parent component';
}
In the browser, when you examine source code, you will a Shadow DOM has been created for the AppComponent and the style is scoped to that.



Therefore, in ViewEncapsulation.Native, Angular creates a Shadow DOM and the style is scoped to that Shadow DOM.

Next, let us explore ViewEncapsulation.Emulated, in this option:

Angular will not create a Shadow DOM for the component.
Style will be scoped to the component.
This is the default value for encapsulation.
import { Component, ViewEncapsulation } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
    title = 'parent component';
}
As you run the application, you will find that the h1 style from AppComponent is not applied to the h1 of the AppChildComponent. This is due to emulated scoping. In this, the style is scoped only to the component. In this option, Angular only emulates the Shadow DOM and does not create a real shadow DOM. Hence, the application that runs in browsers does not support a Shadow DOM also and styles are scoped to the component as well.

Let us see how Angular achieves this. In the browser, when you examine source code, you will find the answer.



Angular has created the style in the head section of the DOM and given an arbitrary id to the component. On basis of ID, selector style is scoped to the component.

These are three ViewEncapsulation options available in Angular. I hope you find this post useful. Thanks for reading. If you like this post, please share it.

