# RatingEngine

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Installing Bootstrap

Next, we need to install Bootstrap. Change the directory to the project created and execute the command:

`npm install bootstrap`

Import  next line into src/style.css file:

`@import '~bootstrap/dist/css/bootstrap.min.css';`

## Installing ng-bootstrap

After installing the bootstrap install ng-bootstrap:

`npm install --save @ng-bootstrap/ng-bootstrap`

Import ng-bootstrap main module:

`import {NgbModule} from '@ng-bootstrap/ng-bootstrap';`

Add module into imports array: 

@NgModule({
  ...
  imports: [NgbModule, ...],
  ...
})

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
