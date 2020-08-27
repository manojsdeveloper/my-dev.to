Building components that not only have well-defined and consistent APIs, but are also reusable.
Components that are capable of working on the data of today as well as the data of tomorrow will give you the most flexible capabilities for building up large software systems.

Generics, that is, being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.

While using `any` is certainly generic in that it will cause the function to accept any and all types for the type of arg, we actually are losing the information about what that type was when the function returns. If we passed in a number, the only information we have is that any type could be returned.

I don't know what 'T' is.
'T' is going to be a type declared at run-time instead of compile time. The T variable could be any non-declared variable (I couldn't find a reference, but I would assume any valid set of characters that could be used for a variable names). Similarly in c#, if the type T represents is not a value type but a more complex type (class) or interface, it could be named/declared as TVehicle or TAnimal to help denote a valid type for future programmers (and could be considered best practice because just T is not intuitive). I prefer TSomething because I know that uppercase T means a generic type.  WSometing or ASomething is also valid, but I just don't prefer it. (Microsofts APIs are almost always [TContext]: https://msdn.microsoft.com/en-us/library/gg679506(v=vs.113).aspx or [TEntity]: https://msdn.microsoft.com/en-us/library/gg696460(v=vs.113).aspx for example).

It'd also be helpful if someone could explain to me what this function is doing.
Well the function isn't doing anything. This is more declaring a type of function that can have multiple run-time type values. Instead of explaining that, I'll include an excerpt taken directly from the link above.

## Working with Generic Type Variables

Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned. Here, we will use a type variable, a special kind of variable that works on types rather than values.

```
function identity<T>(arg: T): T {
  return arg;
}
```

What if we want to also log the length of the argument arg to the console with each call? We might be tempted to write this:

```
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length); // Error: T doesn't have .length
  return arg;
}
```

When we do, the compiler will give us an error that we’re using the .length member of arg, but nowhere have we said that arg has this member. Remember, we said earlier that these type variables stand in for any and all types, so someone using this function could have passed in a number instead, which does not have a .length member.

we’ve actually intended this function to work on arrays of T rather than T directly. Since we’re working with arrays, the .length member should be available. We can describe this just like we would create arrays of other types

```
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}
console.log(loggingIdentity<string>(['cow','dog']))
```

The type of loggingIdentity as “the generic function loggingIdentity takes a type parameter T, and an argument arg which is an array of Ts, and returns an array of Ts.”

we created generic identity functions that worked over a range of types. In this section, we’ll explore the type of the functions themselves and how to create generic interfaces.

 // Array<T>
`let list: number[] = [1, 2, 3];`
 // or 
 `let list: Array<number> = [1, 2, 3];`
Now each value in the array has a type. Typescript will throw a compile-time error if you attempt to put a string into this array. And you get type-safety and intellisense (depending on your editor) when you retrieve a value:
```
class Person {
  FirstName: string;
}

let people: Array<Person> = [];
people.push({ FirstName: "John" } as Person);
```
`let john = people.pop();`
// john is of type Person, the typescript compiler knows this
// because we've declared the people variable as an array of Person

`console.log(john.FirstName);`
Declaring type'd generic constraints. A very good example of [Open - Closed Principle]: https://en.wikipedia.org/wiki/Open–closed_principle.

In object-oriented programming, the open/closed principle states "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification";[1] that is, such an entity can allow its behaviour to be extended without modifying its source code.
In the following example, anyone could extend Human or Cheetah or even create their own derived type and the Logger functionality would continue to work without any modification.
```
interface IAnimal {
  LegCount: number;
}

class Cheetah 
  implements IAnimal {
  LegCount: number = 4;
}

class Human
  implements IAnimal {
  LegCount: number = 2;
}

public class Logger<TAnimal extends IAnimal> {
  public Log(animal: TAnimal) {
    console.log(animal.LegCount);
  }
}

var logger = new Logger();
var human = new Human();
logger.Log(human);
```      
[Working Example]: https://codepen.io/erikphilips/pen/LJYQda?editors=0022

In the previous example I used a [Generic Constraint]: https://www.typescriptlang.org/docs/handbook/generics.html#generic-constraints to limit the TAnimal type programmers can use to create a Logger instance to types that derive from the interface IAnimal. This allows the compiler to validate that the Logger class always assume the type has a property LegCount.

You can explain to me why in the Typescript documentation they put <T> instead of putting something more descriptive like <Identity> for example. Nothing and <T> for me is the same. Now does everyone use the <T> like fools, or did I miss something?
These are all going to be assumptions in the following. I do not know neither the team who designed the typescript generic system nor the team who wrote the documentation.

At the root level of generics is the ability to use T as any possible type (not to be confused with typescript any). Meaning Array<T> is the interface (for lack of a better word) and when we create a concrete type we replace T with a declared type:

Array<number>
So for the interface Array<T> what makes more sense than T? I don't know. I do know that T has to be a Type (number, string, etc) so it makes sense to use T because it the first letter of the word Type. I think Array<Type> would be really confusing and/or might even be invalid if type or Type became reserved or restricted (currently type has special meaning in certain contexts so it's also a poor choice) so avoiding those is a good choice. Other languages ([C-sharp]: https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/generic-methods, [Java]: https://docs.oracle.com/javase/tutorial/java/generics/types.html) also choose to use T, so switching between languages and being able to use the same term is advantageous.

On the flip side what would the following mean?

Array<Identity>
What is Identity here? There is no constraint to help other developers or future developers know what it is. It would appear to me to be a specific typed Array that I must implement explicitly, which means it's not up to me to choose the generic type.
```
interface Foo1 {
  bars: Array<Identity>;
}
```
In the previous example, I (and probably most developers) would assume that Identity is an existing type and I cannot change it.
```
interface Foo2<T> {
  bars: Array<T>;
}
```
With Foo2 I know I have to choose a type.
```
interface Foo3<Identity> {
  bars: Array<Identity>;
}
```
Foo3 is just confusing.
```
interface Foo4<TIdentity> {
  bars: Array<TIdentity>;
}
```
Now with Foo4, I am much more confident that I must choose the type, but I'm still a bit confused why TIdentity. Obviously in some contexts, where the type is more defined, it would make sense.

