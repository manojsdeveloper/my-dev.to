Its very convenient to keep data as an entity.
Since its very fast to access an item in just single attempt.

However, you often get an array of data from your backend service, therefore you need to convert it upon successful fetch into an entity.

If you use NgRx Store, you can add another package called @ngrx/entity and simply rely on its API.
However, there are situations when you either don’t have NgRx Store in your application or you simply fetch data for readonly purpose. Therefore, there’s a need to write a helper function to accomplish the goal.

Ref: Need more detail about entity here
https://medium.com/javascript-everyday/bulletproof-entity-with-the-aid-of-typescript-2a79dbf4575f

