Unit tests sure are useful. Having a good set of tests around your application helps catch errors more quickly and makes refactoring code without regression easier. Does it mean your application won't have bugs? Nope. But I love having the confidence that I'm on the right track and not making silly mistakes when I refactor or add a new feature. And I'm so glad Angular (and Angular CLI) had testing in mind from day one.

There's so much we can do with unit testing in Angular. So much that this is the first article in a series of 3.

In this post, we'll learn some techniques to level up your testing game using what Angular CLI provides out of the box and get pumped up to unit test!



Follow Along
We're using Angular CLI to test the application and using code from a previous post I wrote.

 alisaduncan image 
Intercepting Http Requests-- Using And Testing Angular's HttpClient
Alisa ・ Aug 28 '17 ・ 4 min read
#angular #testing #javascript #programming
You can clone the tutorial-angular-httpclient and run tests too. All the level ups discussed in the posts are found in "test-configuration" branch.

Assumptions

I'm also making the assumption you know why unit tests are helpful, how to write unit tests, and when to write unit tests (versus end-to-end tests).
Angular CLI
When you create an Angular app using the CLI, it scaffolds everything you need for testing. Angular's CLI automatically stubs out tests for you when you use it to generate code. And it makes running your test a breeze. Under the covers it uses Karma and Jasmine for unit tests. If Jasmine and Karma is not your favorite, you can change it. But we'll use the default tools in this series of post.

Whatever testing frameworks you like, use it. Just don't be this guy.



Running Tests

Ready to test? Let's go!



Using the command ng test automatically starts running your test in Chrome in watch mode. That means you can make changes in your code and it will automatically re-run tests for you.



Awesome! That's super helpful while writing feature code!

Now you can happily code away to knock that feature out.... Oops! The feature code caused an existing unit test to fail! How can we figure out why a test is failing? Can we debug unit tests? Why yes, we can.



Debugging Tests In Chrome
Depending on whether you are using Angular v6 or Angular v7, the instructions are different. In Angular v7, after starting ng test, you can debug an individual test by following the steps below:

Press DEBUG in Karma runner
Open Chrome DevTools and navigate to Sources
Expand src and find the test you want to step in to and set breakpoints
Press the link on the test you want to run in the Karma runner in Chrome


In Angular v6, after starting ng test, you can debug an individual test by following the steps below:

Press DEBUG in Karma runner
Open Chrome DevTools and navigate to Sources
Expand webpack:// → <repo file path> → src → app
Find the test you want to step in to and set breakpoints
Press the link on the test you want to run in the Karma runner in Chrome
You can set breakpoints and step into in the code the unit tests calls, not just in the unit test itself. So do you want to step through your Angular service code via a the unit test? No problem! Treat unit test debugging just like you would debugging your application normally.



Running tests in watch mode is great when actively writing code, but sometimes you want to run the test just once. Or you want to run the tests in headless mode. Angular CLI has just the mechanism to support this using a variety of flags you can use.

Pass In Flags
Want to run tests only once instead of continuously? This is useful if you want to run tests one last time when you're finished with your story or as part of the CI process. Since it's time to check in your new code, kick off running your tests with the watch flag set to false.

ng test --watch false
Yes! But build processes usually also needs to run headless. You can stack flags together to run your tests both headless and once.

ng test --watch false --browsers ChromeHeadless


Don't forget you can create a npm script to run this test configuration to save you seconds of typing!



Now that we've covered the basics of using Angular CLI to run unit tests, we'll dive deeper into Karma configuration and customizing the test runner in the next post in this series.

Ref: https://dev.to/alisaduncan/how-to-level-up-your-angular-unit-testing-game-13-7a1

karma.config.json
    singleRun: false,
