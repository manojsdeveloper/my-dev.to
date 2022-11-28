`First()`

Returns first element of a sequence.
It throw an error when There is no element in the result or source is null.
you should use it,If more than one element is expected and you want only first element.
```
IList<int> intList = new List<int>() { 7, 10, 21, 30, 45, 50, 87 };
IList<string> strList = new List<string>() { null, "Two", "Three", "Four", "Five" };
IList<string> emptyList = new List<string>();
		
Console.WriteLine("1st Element in intList: {0}", intList.First());
Console.WriteLine("1st Even Element in intList: {0}", intList.First(i => i % 2 == 0));

Console.WriteLine("1st Element in strList: {0}", strList.First());

Console.WriteLine("emptyList.First() throws an InvalidOperationException");
Console.WriteLine("-------------------------------------------------------------");
Console.WriteLine(emptyList.First());
```

`FirstOrDefault()`

Returns first element of a sequence, or a default value if no element is found.
It throws an error Only if the source is null.
you should use it, If more than one element is expected and you want only first element. Also good if result is empty.
```
IList<int> intList = new List<int>() { 7, 10, 21, 30, 45, 50, 87 };
IList<string> strList = new List<string>() { null, "Two", "Three", "Four", "Five" };
IList<string> emptyList = new List<string>();
		
Console.WriteLine("1st Element in intList: {0}", intList.FirstOrDefault());
Console.WriteLine("1st Even Element in intList: {0}",
                                 intList.FirstOrDefault(i => i % 2 == 0));

Console.WriteLine("1st Element in strList: {0}", strList.FirstOrDefault());

Console.WriteLine("1st Element in emptyList: {0}", emptyList.FirstOrDefault());
```
### Summary
The major difference between `First` and `FirstOrDefault` is that `First()` will throw an exception if there is no result data for the supplied criteria whereas `FirstOrDefault()` will return the default value (`null`) if there is no result data.

