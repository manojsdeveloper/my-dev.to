Dependency injection (DI) is a technique for achieving loose coupling between objects and their collaborators, or dependencies.

Most often, classes will declare their dependencies via their constructor, allowing them to follow the Explicit Dependencies Principle. This approach is known as "constructor injection".

To implement dependency injection, we need to configure a DI container with classes that is participating in DI. DI Container has to decide whether to return a new instance of the service or provide an existing instance. In startup class, we perform this activity on ConfigureServices method.

The lifetime of the service depends on when the dependency is instantiated and how long it lives. And lifetime depends on how we have registered those services.

1. AddTransient
Transient lifetime services are created each time they are requested. This lifetime works best for lightweight, stateless services.

2. AddScoped
Scoped lifetime services are created once per request.

3. AddSingleton
Singleton lifetime services are created the first time they are requested (or when ConfigureServices is run if you specify an instance there) and then every subsequent request will use the same instance.
