Host.CreateDefaultBuilder(args)

The host is responsible for app startup and lifetime management. At a minimum, the host configures a server and a request processing pipeline. The host can also set up logging, dependency injection, and configuration.

CreateDefaultBuilder a generic Host builder in .NET and ASP.NET Core plays an important role in initializing the Host and its configuration like getting access to applications host details including app configuration, logger configuration, user secretes, getting access to environmental configuration etc.

	
var builder = Host.CreateDefaultBuilder().Build();

Let see in detail how CreateDefaultBuilder helps us managing all the above details.

## Access to Application Configuration in ASP.NET and NET Core

Please note that when you define your host with CreateDefaultBuilder it loads Application Configuration in ASP.NET Core appsettings.json in ASP.NET Core.

If you are using a non-prod environment like DEV or TEST then such environment-specific configuration details will also be available from appsettings.[EnvironmentName].json


## Turning Our App Into A Windows Service

Microsoft.Extensions.Hosting.WindowsServices

.CreateDefaultBuilder(args).UseWindowsService()

Running our application normally is just the same and everything functions as it was. The big difference is that we can now install everything as a service.

To do that, first we need to publish our application. In the project directory we run :

`dotnet publish -r win-x64 -c Release`

Note in my case, I’m publishing for Windows X64 which generally is going to be the case when deploying a Windows service.

## AddScoped
Scoped lifetime services are created once per request.
