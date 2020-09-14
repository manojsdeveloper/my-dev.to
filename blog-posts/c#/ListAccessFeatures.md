List<T> Methods

List<T>.Exists(Predicate<T>) Method
true if the List<T> contains one or more elements that match the conditions defined by the specified predicate; otherwise, false.
```
    // Check if an item with Id 1444 exists.
    Console.WriteLine("\nExists: Part with Id=1444: {0}",
        parts.Exists(x => x.PartId == 1444));

    o/p  Exists: Part with Id=1444: True
```


Any<TSource>(IEnumerable<TSource>)
true if the source sequence contains any elements; otherwise, false.
```
List<int> numbers = new List<int> { 1, 2 };
bool hasElements = numbers.Any();

Console.WriteLine("The list {0} empty.",
    hasElements ? "is not" : "is");
```


