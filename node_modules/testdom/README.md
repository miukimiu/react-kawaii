# Testdom

Testdom is a [jsdom](https://github.com/tmpvar/jsdom) wrapper to help developers write test code that works both in the browser and in node.

It works by checking if a global document exists in it's current environment. If it does it bails out and expects the browser to provide all available browser globals. If a global document does not exists, it will create one using jsdom. 

**WANTED!** *PRs with more tested additional globals.*

## Install

    npm install testdom

## Usage

    require('testdom')('<html><body></body></html>')
    console.log(document)

## Additional globals

Testdom supports an argument of *additional globals* that will be loaded (using require) only if no DOM exists. This way users can experiment with different modules as browser global replacements and polyfills.

    require('testdom')('<html><body></body></html>', {
        localStorage : 'localStorage',
    })
    console.log(localStorage)

In the *additional globals* object the **key** is the **name of the global** the the **value** is the **module** name to be require'd.

Since v1.1.0 we also support **arbitrary globals**, so anything passed to *additional globals* that is not a string, we be added globally as is.

### Confirmed modules

A list of modules confirmed to work well as a global/polyfill for jsdom.

| Global        | Module        | Notes |
|:------------- |:------------- |:----- | 
| localStorage  | [localStorage](https://www.npmjs.com/package/localStorage) | 404 link but npm install works |
| Promise  | [es6-promises](https://www.npmjs.com/package/es6-promises) | Different than `es6-promise` (singular). |


## Testling

Testling uses [browserify](http://browserify.org/) to create a browser compatible bundle of your javascripts. Unfortunately jsdom is not compatible with browserify, so we have to tell testling to ignore it.

In your <code>package.json</code> add a *browser* field and add tell browserify to ignore *jsdom*.

    $ vi package.json
    
    ...
    "browser" : {
        "jsdom" : false
    },
    ...

Since testdom only tries to require jsdom if no document exists; the browser will never reach that code and we are good. The tests will use the browser's DOM.

## Changelog

### 2.0.0

* Upgraded `jsdom` to 6.5.1 -- requires node 4+

### 1.1.0

* Support for arbitrary globals

### 1.0.1

* Upgraded jsdom dependency from 2.x.x to 3.x.x

### 1.0.0

* Removed non-jsdom dependencies (& globals)
* Added ability to require non-jsdom modules only if DOM does not exists
* Started list of working globals & polyfills

### 0.1.0

* Pre changelog era. Who knows what went on.

enjoy.
