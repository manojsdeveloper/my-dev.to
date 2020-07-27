# Hosting an Angular app in IIS Server

Hosting the Angular application in IIS will be done through the following steps…

1. Use Angular CLI to create a build artifact
2. Create a Web application in IIS
3. Install URL rewrite module in IIS
4. Add web.config with a URL rewrite rule
5. Use Angular CLI to create a production package


## Install URL rewrite module in IIS
This step is required to support deep-linking. Deep-linking is the capability for the user to navigate directly to a page by typing the route into the address bar instead of using the Angular routing. Deep-linking causes a problem for IIS because the URL that the user attempts to access is not known to the server and therefore the user receives a 404 response. The solution is for the server to always return the root of the application, even if the user requests a path within the application.


# Add web.config with a URL rewrite rule
In production server navigating directly to a angular router results in a 404. 
However, to deploy it in a Production scenario you will typically need to do some configuration to make it work.
We will need to include a web.config file to allow for things such as the following.
1. Getting routing to work.
2. Serving static content.

We’ll now added a web.config file in which we’ll have the URL rewrite rule. All requests to this web application that are not for files or folders should be redirected to the root of the application. For an web application or virtual directory under the default web site, the URL should be set to the alias, (e.g. /MyApp/). For a web site at the root of the server, the URL should be set to /.

We’ll create this web.config in src folder and to ensure that this file gets copied to dist folder each time a build is generated we’ll also make an entry in the assets section in angular-cli.json.

We can now build the angular project and verify that the web.config file is indeed published in the dist folder. Once confirmed, there is one more step pending. We need to ensure that the base href value in index.html has the value / if we host the application directly in the website or /MyApp/ if it is hosted in the web application under the web site.

We can update the above manually, or during creation of the build using the parameter --base-href

ng build --base-href "/HelloWorld/"
