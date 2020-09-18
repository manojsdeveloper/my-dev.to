##Barrel

A way to roll up exports from several ES2015 modules into a single convenient ES2015 module. The barrel itself is an ES2015 module file that re-exports selected exports of other ES2015 modules.

For example, imagine three ES2015 modules in a heroes folder:
```
// heroes/hero.component.ts
export class HeroComponent {}

// heroes/hero.model.ts
export class Hero {}

// heroes/hero.service.ts
export class HeroService {}
```
Without a barrel, a consumer needs three import statements:
```
import { HeroComponent } from '../heroes/hero.component.ts';
import { Hero }          from '../heroes/hero.model.ts';
import { HeroService }   from '../heroes/hero.service.ts';
```
You can add a barrel to the heroes folder (called index(index.ts/index.js), by convention) that exports all of these items:
```
export * from './hero.model.ts';   // re-export all of its exports
export * from './hero.service.ts'; // re-export all of its exports
export { HeroComponent } from './hero.component.ts'; // re-export the named thing
```
Now a consumer can import what it needs from the barrel.
```
import { Hero, HeroService } from '../heroes'; // index is implied
```
The Angular scoped packages each have a barrel named index.
