`Main()` method in the Program class in `Program.cs` file is the entry point for an **asp.net** core application. This method calls `CreateDefaultBuilder()` method performs several tasks like 
1. Setting up the web server 
2. Loading the host and application configuration from various configuration sources and 
Configuring logging

The following is the code snippet from CreateDefaultBuilder() method. 
```
.ConfigureLogging((hostingContext, logging) =]
{
    logging.AddConfiguration(hostingContext.Configuration.GetSection("Logging"));
    logging.AddConsole();
    logging.AddDebug();
    logging.AddEventSourceLogger();
})
```
As part of configuring logging, `CreateDefaultBuilder()` method adds the following 3 logging providers by default. This is the reason when we run the asp.net core project we see the log displayed both on the console and on the debug window in Visual Studio.
1. Console
2. Debug
3. EventSource

`CreateDefaultBuilder()` method looks for Logging section in the application configuration file `appsettings.json`.

Logging section in `appsettings.json`

The following is the Logging section in `appsettings.json` file on my machine.
```
"Logging": {
  "LogLevel": {
    "Default": "Warning",
    "Microsoft": "Information"
  }
}
```
LogLevel is used to control how much log data is logged or displayed.


