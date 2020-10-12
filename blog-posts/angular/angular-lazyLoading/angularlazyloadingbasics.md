##Lazy-loading feature modules

By default, NgModules are eagerly loaded, so do all the NgModules, whether or not they are immediately necessary.
For large apps with lots of routes, consider lazy loading--a design pattern that loads NgModules as needed. Lazy loading keep initial bundle sizes smaller, which in turn helps decrease load time.

###Lazy loading basics
This section introduces the basic procedure for configuring a lazy-loaded route.
To lazy load Angular modules, use loadChildren(instead of component) in your AppRoutingModule routes configuration as follows.

