Install dotNet CLI from dotnet.microsoft.com
Install VSCode
Install Docker Engine
Add docker plugin in VSCode
Install Postman to test web APIs

Create dotNet Web API using CLI
>dotnet new webapi -o HelloAspNetCore --no-https

Once project created through CLI, open the project in VSCode and start run the app
Go to Run icon and launch the webAPI
Configure Docker with webAPI in VSCode IDE
-ctrl+shift+p = Add docker workspace to files

Going to build docker
>docker build -t hello-aspnetcore:v1 .

Once build done check docker images
>docker images
Run the images
>docker run -it —rm -p 8080:80 hello-aspnetcore:v1