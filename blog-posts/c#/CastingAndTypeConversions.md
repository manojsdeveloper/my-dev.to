C# is statically-type at compile time, after a variable is declared, it cannot be declared again or assigned a value of another type unless that type implicitly convertible to the variable's type.

#Testing code

###Implicit conversions
For built-in numeric types, an implicit conversion can be made when the value to be stored can fit into the variable without being truncated or rounded off. For integral types, this means the range of the source type is a proper subset of the range for the target type. For example, a variable of type long (64-bit integer) can store any value that an int (32-bit integer) can store. In the following example, the compiler implicitly converts the value of num on the right to a type long before assigning it to bigNum.
```
// Implicit conversion. A long can
// hold any value an int can hold, and more!
int num = 2147483647;
long bigNum = num;
```
For a complete list of all implicit numeric conversions, see the Implicit numeric conversions section of the Built-in numeric conversions article.

For reference types, an implicit conversion always exists from a class to any one of its direct or indirect base classes or interfaces. No special syntax is necessary because a derived class always contains all the members of a base class.

```
Derived d = new Derived();
// Always OK.
Base b = d;
```

###Explicit conversions
However, if a conversion cannot be made without a risk of losing information, the compiler requires that you perform an explicit conversion, which is called a cast. A cast is a way of explicitly informing the compiler that you intend to make the conversion and that you are aware that data loss might occur, or the cast may fail at runtime. To perform a cast, specify the type that you are casting to in parentheses in front of the value or variable to be converted. The following program casts a double to an int. The program will not compile without the cast.
```
class Test
{
    static void Main()
    {
        double x = 1234.7;
        int a;
        // Cast double to int.
        a = (int)x;
        System.Console.WriteLine(a);
    }
}
// Output: 1234
```
For a complete list of supported explicit numeric conversions, see the Explicit numeric conversions section of the Built-in numeric conversions article.
For reference types, an explicit cast is required if you need to convert from a base type to a derived type:
```
// Create a new derived type.
Giraffe g = new Giraffe();

// Implicit conversion to base type is safe.
Animal a = g;

// Explicit conversion is required to cast back
// to derived type. Note: This will compile but will
// throw an exception at run time if the right-side
// object is not in fact a Giraffe.
Giraffe g2 = (Giraffe)a;
```
A cast operation between reference types does not change the run-time type of the underlying object; it only changes the type of the value that is being used as a reference to that object. For more information, see Polymorphism.
