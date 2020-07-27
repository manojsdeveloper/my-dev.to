
Angular 10.0.0 is finally here. While upgrading to Angular 10 version remember few things before running `ng update` command.

1. Its always advisable to update your app to its next major version.
2. That is if you are using Angular 7 or Angular 8 or Angular 6,5, 4 etc versions, Do not try to update to Angular 10 Directly.
3. First Update your Angular app to Angular 9.
4. Then use `ng update` command.

On June 25, 2020 Angular version 10.0.0 is released.

Just `update @angular/core and @angular/cli` by using ng update command.

`ng update @angular/core @angular/cli`

## Angular CLI version check
To check the Angular CLI version use to below command

`ng -version`

## Update Angular CLI version Globally
First you need to uninstall the existing angular cli packages followed by npm cache verify command to clear the cache related problems.

And the install the Angular CLI version again by using npm install -g @angular/cli@latest

To update Angular CLI version globally in your system use the below commands

```
npm uninstall -g angular-cli
npm cache clean or npm cache verify (if npm &gt; 5)
npm install -g @angular/cli@latest`

```

## Update Angular CLI version Locally
To update Angular CLI version in your local projects use the following commands.

Navigate to your local Angular project folder and execute the below commands.

```
rm -rf node_modules
npm uninstall --save-dev angular-cli
npm install --save-dev @angular/cli@latest
npm install

```
