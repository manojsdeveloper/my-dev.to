In this blog, we will talk about **synchronism**, **parallelism**, **concurrency**, and how to implement asynchronous algorithms in our C# applications.

### What Is Asynchronous Programming?

We could define asynchronous programming as the way of executing programming code in a thread without having to wait for an I/O-bound or CPU-bound task to finish. I/O-bound operations could be file-system accesses, HTTP requests, API calls, or database queries. And CPU-bound operations would be actions like encrypting data, complex calculations, image or document management.

One of the ideas of asynchronous programming is to divide our logic into awaitable tasks so that we don't block the execution of our application. We can call an async method and get a task object that represents it. In the meantime, we can do some not related and not dependant work. After we execute those operations, we await the async task, which may already be finished or not. If the execution is finished, we will get the resulting value from the task and use it in the next dependant operations.

### Asynchronous Programming in C#

As we mentioned, async programming in C# can be accomplished by implementing the Task-based Asynchronous Pattern. We will have methods that return a Task or Task<T> object. Defining those methods as async operations will enable us to await them and keep using the same execution thread to run other operations that are not linked to the awaited task.

C# provides us two keywords to handle Task objects in an easier way: async and await. Adding the keyword async to a method signature allows us to use the await keyword inside the method while instructs the compiler to create a state machine to handle the asynchronicity. On the other hand, the await keyword is used to pause the execution of a method and asynchronously wait for a Task to finish, while the current thread is sent back to the thread pool instead of keeping it in a blocked state. Everything happens in the background, avoiding us to implement and maintain the complexity of thread management and the state of the calls.

Let's analyze this piece of code:

```
public async Task<User> GetLoggedUserEmailAsync()
{
  int userId = GetId();
  string email = await GetEmailAsync(userId);
  User user = GetUserByEmail(email);
  return user;
}

public async Task<string> GetEmailAsync(int userId)
{
  // Do something
}
```

An async method should return void, Task, or Task<T>, where T is the return data type that we need. Returning void is normally used for event handlers. The keyword async enables us to use the command await within the method so that we can wait for the asynchronous method processing as expected.

Notice that the methods end with "Async". Although it is not mandatory, there is a naming convention that an asynchronous method name should end with the word "Async". This convention aims to make it clear to the consumer of the functionality that the method won't complete all of its work synchronously.

In our previous example, GetId() is called synchronously. When the execution thread encounters the await keyword on await GetEmailAsync(userId), it creates a Task<User> that contains the remainder of the GetLoggedUserEmailAsync method. This task is executed asynchronously after the Task<string> returned by GetEmailAsync. So, the User object is returned from the Task<User> created by the await keyword.

### Asynchronous Code in Action

Let's see a short example to review the concepts previously explained. Having the following console application:

```
using System;
using System.IO;
using System.Threading.Tasks;

class Program
{
   static async Task Main(string[] args)
   {
       string filePath = "bigFile.txt";

       // Create a big file
       FileStream fs = new FileStream(filePath, FileMode.CreateNew);
       fs.Seek(1024 * 1024, SeekOrigin.Begin);
       fs.WriteByte(0);
       fs.Close();

       var task = ReadFileAsync(filePath);

       Console.WriteLine("A synchronous message");

       int length = await task;

       Console.WriteLine("Total file length: " + length);
       Console.WriteLine("After reading message");
       Console.ReadLine();
   }

   static async Task<int> ReadFileAsync(string file)
   {
       Console.WriteLine("Start reading file");

       int length = 0;

       using(StreamReader reader = new StreamReader(file))
       {
           string fileContent = await reader.ReadToEndAsync();
           length = fileContent.Length;
       }

       Console.WriteLine("Finished reading file");

       return length;
   }
}
```

In this application, we read a big file, count the number of characters it has, and print different messages in the console. The method that triggers the file reading operation is defined as asynchronous, and it's the one that starts the asynchronous thread reading the text. While the message "A synchronous message" is printed, the reading of the file continues. If we execute the application, we can see how the execution thread behaves based on the output messages:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n65bju182j6eayckm53n.png)

### Summary

In this blog, we talked about how we can manage and organize the tasks in our application based on the dependency and order of execution. We talked about synchronism, parallelism, concurrency, and asynchronism. We described async programming, its benefits, and how we can implement it in our C# applications. 
