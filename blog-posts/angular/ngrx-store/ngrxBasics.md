
# Managing state in angular app with NgRx Store and Effects

In this part we going to focus on todo implementation. Let see our component tree.

https://miro.medium.com/max/700/1*aYLG3IceuJ1ydhc3LqRiQA.png

# Angular: State Management With NgRx

NgRx is one of the libraries used for application state management. It is a Redux implementation for Angular.

First, let’s look at the problem we are trying to solve, and then understand the concepts behind the NgRx, and, finally, we'll jump into the coding.

## Application State

What is application state?
Theoretically, it is the entire memory of the application, but, typically, it is the data received via API calls, user inputs, presentation UI State, app preferences, etc.

Simply put, it is the data that can differentiate two instances of the same application.

A simple concrete example of application state would be a list of customers maintained in an application.

## Problem we are trying to solve

For simplicity, let's assume we have a list of customers in the application, and that is the state that we are trying to manage. Some API calls and user inputs could change the state ( i.e. the list ) by adding or removing customers. The state change should be reflected in the UI and other dependent components. Surely, in this particular case, we can have a global variable to hold the list and then add/remove customers from/to it and then write the code to update the UI and dependencies. 

## NgRx app state management

Let’s look at the NgRx implementation — there are several components to understand. 

1. Store: Store is what holds the app's state. 
2. Action: A unique event dispatched from components and services that describe how the state should changed.
   For example, ‘Add Customer’ can be an action that will change the state (i.e. add a new customer to the list).
3. Reducer: All the state changes happen inside the reducer; it responds to action and based on that action, it will
   create new immutable state and return it to the store.
4. Selector: Selector is a function used for obtaining a part of the state from the store.
5. Effect: A Mechanism that listens for dispatched actions in an observabls stream, processes the server response,
   and returns new actions either immmediately or asynchronously to the reducer to change the state.

Eg: https://dzone.com/storage/temp/11424495-ngrxstatemanagement1.png

The user interface and other components dispatch actions. Actions can have a payload which needs to change the state. The reducer creates a new state as described by the specified action and returns it to the store. Once the store updates with the new state, it will notify the UI and all dependent components. Each UI reacts to the state change and its view gets updated to reflect the changes. 

https://dzone.com/storage/temp/11450321-ngrxstatemanagement2222.png

The “Add New Customer” UI control dispatches the AddCustomer action with the new customer as a payload in that action. The reducer takes the AddCustomer action and the new customer comes as a payload and creates a new list with the existing customers. Then, it will update the store with the new customer list. Finally, it will notify the UI and it will render the new list.

Below blog have example code, create new examples by reference of below blog codings.
https://dzone.com/articles/angular-app-state-management-with-ngrx

My own customer example
https://stackblitz.com/edit/angular-ivy-qmf86m?file=src%2Fapp%2Fstate%2Fcustomer.reducer.ts
https://stackblitz.com/edit/angular-ivy-qmf86m?file=src%2Fapp%2Fapp.module.ts