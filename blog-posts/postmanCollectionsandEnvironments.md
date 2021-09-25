### Intro to Collections
* Collection in Postman means a group of API requests that are already saved in the Postman and can be arranged into folders. Any number of folders can be created inside a collection.
* Putting similar requests into folders and collections helps the client in better organization and documentation of their requests.
* All the APIs requests can be stored and saved within a collection, and these collections can be shared amongst the team in the Postman workspace.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tunoq7q6ng67i2wvabhs.png)

### Advantages of creating collections
* **Easy APIs import and export**
A collection can be imported or exported. Thus it can save time for transferring the requests.
* **Request categorization**
Requests can be grouped into folders and collections for easy access.
* **Passing data among requests**
Scripts can be used to pass data between API requests.
* **Running collections/folders**
You can run individual requests or folder or collection as a whole in the Postman.
* **API documentation**
Postman provides you an option to add a name and description to your request, folder, and collections.
* **Building Test suits**
Test scripts can be added to requests, and integration test suites can be built.
* **Time-saving**
Setting any variable for collections will automatically apply the same to the folders generated under the collection and requests; thus, it saves time.

### Environment in Postman
An environment in Postman is a set of key-value pairs. An environment helps us to differentiate between the requests. When we create an environment inside Postman, we can change the value of the key value pairs and the changes are reflected in our requests. An environment just provides boundaries to variables. When we create different environment we can make track of all the variables and how to use them inside our requests. There can be many variables inside one environment. At once, we can work only in one environment although we can create any number of environments in Postman.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/61jp2zih8fk1d7qpa392.png)

### Set Environment Variable in Postman
A variable in the Postman is same as in any programming language. A variable is an entity whose value can be changed. The key part in the key-value set in environment is called variable. This variable can have any value and in place of the key we can use the variable name in every request. This will be clear with an example shown below and steps shown thereafter. The below image shows three variables inside environment Test Environment 1

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jp6a1gqaknevuu9hxpkq.png)
