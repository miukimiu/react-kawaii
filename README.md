# React Kawaii

Cute react ui components.

## Getting Started

So you want to help developing some cute UI components?

1. npm i (in order to install the boileiplate)
2. npm i -g getstorybook (if you don't have already installed globally)
3. cd react-kawaii (or the folder name that you gave)
4. getstorybook

### Prerequisities

```
NodeJS + NPM
```

### Installing

```
npm install
```

```
gulp build
```

### Development

```
gulp dev
```

### Test runner

```
gulp test
```

### Tests

The tests are split in two different categories, Unit and End-to-end (integration) tests. These are run separately, there are two different tasks for that matter: `gulp unit_test` & `gulp end2end_test`.

### Preview the app for distribution

Run the command below to create a small web server to serve the app that exists for distribution ( run the build command to create and see the `dist` directory ).

```
gulp preview
```

### Build architecture

Find the source code under the `src` directory for javascript and `sass` for the stylesheets. Before modifying ensure that the development watcher is running by running the development watch command (see development notes). The `dist` directory holds the files ready for distribution.

## Built With

* Reaclux Boilerplate
* ReactJS
* Webpack
* SASS
* ES2015
* GULP
* MOCHA
* CHAI
* ENZYME
* ZOMBIEJS
