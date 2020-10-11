##Pipe

The **pipe** function is the assembly line from your observable data source through your operators. 
Just like raw material in a factory goes through a series of stops before it becomes a finished product,
source data can pass through a pipe-line of operators where you can manipulate, filter, and transform the data to fit your use case.

For instance, a typeahead solution built with observables may use a group of operators to optimize both the request and display process:

// observable of values from a text box, pipe chains operators together
```
inputValue
  .pipe(
    // wait for a 200ms pause
    debounceTime(200),
    // if the value is the same, ignore
    distinctUntilChanged(),
    // if an updated value comes through while request is still active cancel previous request and 'switch' to new observable
    switchMap(searchTerm => typeaheadApi.search(searchTerm))
  )
  // create a subscription
  .subscribe(results => {
    // update the dom
  });
```

##map

Similar to the well known Array.prototype.map function, this operator applies a projection to each value and emits that projection in the output Observable.

```
const example = source.pipe(map(val => val + 10));
```

##mergeMap

Now let’s say there is a scenario where we have an Observable that emits an array, and for each item in the array we need to fetch data from the server.
We could do this by subscribing to the array, then setup a map that calls a function which handles the API call and then subscribe to the result.
```
import { of, from } from 'rxjs'; 
import { map, delay } from 'rxjs/operators';

const getData = (param) => {
  return of(`retrieved new data with param ${param}`).pipe(
    delay(1000)
  )
}

from([1,2,3,4]).pipe(
  map(param => getData(param))
).subscribe(val => console.log(val);
```

Our map function returns the value of the getData function. In this case that is an Observable. This does however create a problem because now we’re dealing with an additional Observable.
To further clarify this: we have from([1,2,3,4]) as our ‘outer’ Observable, and the result of the getData() as our ‘inner’ Observable. In theory we have to subscribe to both our outer and inner Observable to get the data out.
```
const getData = (param) => {
  return of(`retrieved new data with param ${param}`).pipe(
    delay(1000)
  )
}

from([1,2,3,4]).pipe(
  map(param => getData(param))
).subscribe(val => val.subscribe(data => console.log(data)));
```
As you can might imagine this is far from ideal as we have to call Subscribe two times. This is where mergeMap comes to the rescue. MergeMap essentially is a combination of mergeAll and map. MergeAll takes care of subscribing to the ‘inner’ Observable so that we no longer have to Subscribe two times as mergeAll merges the value of the ‘inner’ Observable into the ‘outer’ Observable. This could look like this:
```
const getData = (param) => {
  return of(`retrieved new data with param ${param}`).pipe(
    delay(1000)
  )
}

from([1,2,3,4]).pipe(
  map(param => getData(param)),
  mergeAll()
).subscribe(val => console.log(val));
```
This already is much better, but as you might already guessed mergeMap would be the best solution for this.
```
// using a regular map
from([1,2,3,4]).pipe(
  map(param => getData(param))
).subscribe(val => val.subscribe(data => console.log(data)));

// using map and mergeAll
from([1,2,3,4]).pipe(
  map(param => getData(param)),
  mergeAll()
).subscribe(val => console.log(val));

// using mergeMap
from([1,2,3,4]).pipe(
  mergeMap(param => getData(param))
).subscribe(val => console.log(val));
```
So mergeMap() is just map() + mergeAll().

Another simple example
```
var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');

var span = document.querySelector('span');

var obs1 = Rx.Observable.fromEvent(input1, 'input');
var obs2 = Rx.Observable.fromEvent(input2, 'input');

obs1.mergeMap(
	event1 => {
  	return obs2.map(
    	event2 => event1.target.value + ' ' + event2.target.value
    )
  }
).subscribe(
	combinedValue => span.textContent = combinedValue
);

```