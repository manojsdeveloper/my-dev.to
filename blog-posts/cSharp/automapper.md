AutoMapper in C# is a mapper between two objects. That is AutoMapper is an object-object mapper. It maps the properties of two different objects by transforming the input object of one type to the output object of another type.

It also provides some interesting facts to take the dirty work out of figuring out how to map an object of type A with an object of type B as long as the object of type B follows AutoMapper’s established convention.

**Let’s discuss the step-by-step procedure to use AutoMapper in C#.**

### 1: Installing the AutoMapper library

The AutoMapper is an open-source library present in [GitHub](https://github.com/AutoMapper). To install this library, open the Package Manager Console window and then type the following command and press enter key to install the AutoMapper library in your project:

**> Install-Package AutoMapper**

Once you installed the AutoMapper library, then it will add a reference to the AutoMapper dll which you can find in the project references section as shown in the below image.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2zhwtgwy9r6s4dk2punm.png)

### 2: Initializing or Configuring the AutoMapper

Once you have defines your types (i.e. classes) then you can create a mapper for the two types using the constructor of MapperConfiguration class. You can create only one MapperConfiguration instance per AppDomain and should be instantiated during the application start-up. The syntax to create the MapperConfiguration instance is given below.
```
//Initialize the mapper
  var config = new MapperConfiguration(cfg =>
               cfg.CreateMap<Employee, EmployeeDTO>()
            );
```
The type on the left is the source type i.e. TSource, in our example, it will be going to Employee object, and the type on the right is the destination type i.e. TDestination, in our example, it will be going to EmployeeDTO object. So, two maps the Employee with EmployeeDTO, you need to create the mapper configuration.

```
using System;
using AutoMapper;
namespace AutoMapperDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            //Initialize the mapper
            var config = new MapperConfiguration(cfg =>
                    cfg.CreateMap<Employee, EmployeeDTO>()
                );

            //Creating the source object
            Employee emp = new Employee
            {
                Name = "James",
                Salary = 20000,
                Address = "London",
                Department = "IT"
            };

            //Using automapper
            var mapper = new Mapper(config);
            var empDTO = mapper.Map<EmployeeDTO>(emp);
            //OR
            //var empDTO2 = mapper.Map<Employee, EmployeeDTO>(emp);

            Console.WriteLine("Name:" + empDTO.Name + ", Salary:" + empDTO.Salary + ", Address:" + empDTO.Address + ", Department:" + empDTO.Department);
            Console.ReadLine();
        }
    }
    
    public class Employee
    {
        public string Name { get; set; }
        public int Salary { get; set; }
        public string Address { get; set; }
        public string Department { get; set; }
    }

    public class EmployeeDTO
    {
        public string Name { get; set; }
        public int Salary { get; set; }
        public string Address { get; set; }
        public string Department { get; set; }
    }
}
```

Ref: https://dotnettutorials.net/lesson/automapper-in-c-sharp/
