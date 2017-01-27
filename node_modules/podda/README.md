# Podda

Simple Reactive DataStore for JavaScript.

This is a pure JavaScript in-memory key value store for your Single Page App.(SPA)
You can think this as a simple key value store with an event emitter.

This works [pretty well with React](#using-with-react) (as an simple substitute for Redux/MobX), but works with anything in JavaScript.

## TOC
<!-- TOC depthFrom:2 depthTo:2 withLinks:1 updateOnSave:0 orderedList:0 -->

- [Installation](#installation)
- [Sample Usage](#sample-usage)
- [API](#api)
- [Using with React](#using-with-react)

<!-- /TOC -->

## Installation

```js
npm install --save podda
```

## Sample Usage

Let's subscribe to the data store and set an item.

```js
import Podda from 'podda';

const defaults = { 'race': 'Human' };
const store = new Podda(defaults);

// Subscribe for changes
const stopSubscription = store.subscribe((data) => {
  console.log('Data:', data);
});

// Set some items.
store.set('name', 'Arunoda'); // logs => Data: { name: 'Arunoda' }
store.set('age', 99); // logs => Data: { name: 'Arunoda', age: 99 }

// stop the subscription
stopSubscription();
store.set('city', 'Colombo'); // logs nothing.
```

**[Play with this example](#podda)**

## API

Assume we've an instance of Podda called store as defined follows:

```js
const store = new Podda();
```

### set

Set a value. Value could be anything which can be serialize to JSON.

```js
store.set('key', 'value');
```

### get

Get a value by the give key.

```js
store.get('key');
```

### update

Update multiple entries of the store at once. While updating, you could accept the current state of the store as well.

```js
store.update(function(state) {
  return {
    newField: 10,
    existingField: !Boolean(existingField)
  };
});
```

### getAll

Get all the key values pairs in the store as a map.

```js
store.getAll();
```

### subscribe

Subscribe for the store and get an snapshot of the data of the whole store.
Registered callback will be fired for everything you set something to the store.

```js
const stop = store.subscribe((data) => {
  console.log('Data:', data);
});

// Stop the subscription when needed
stop();
```

Call to this method return a function where you can use that to stop the subscription.

### watch

Very similar to subscribe but watch a given key instead of the all keys.

```js
const stop = store.watch('name', (name) => {
  console.log('Name is:', name);
});

store.set('name', 'Arunoda'); // logs => Name is: Arunoda
store.set('age', 99); // logs nothing.
```

### watchFor

Very similar to watch but watch for the value of the key as well.

```js
const stop = store.watchFor('name', 'Arunoda', (name) => {
  console.log('Name is:', name);
});

store.set('name', 'Arunoda'); // logs => Name is: Arunoda
store.set('name', 'Matt'); // logs nothing
```

### fire

This will be pretty useful with the `watch` and `watchFor` APIs. You could simply fire those callback, without setting an item to the store. Hence, this has no effect on the `subscribe`.

```js
const stop = store.watch('name', (name) => {
  console.log('Name is:', name);
});

store.set('name', 'Arunoda'); // logs => Name is: Arunoda
store.fire('name', 'Matt'); // logs => Name is: Matt
console.log(store.get('name')) // logs => Arunoda
```

### registerAPI

With this, you'll be able to add new features to the store.
For an example, let's say we are using toggle functionality in our store a lot. So, we can add an API for that like this:

```js
store.registerAPI('toggle', (store, key) => {
  store.set(key, !store.get(key));
  return store.get(key);
});

// Then we can use it like this:
console.log('Toggled value for lights is:', store.toggle('lights'));
```

## Using with React

In order to use this with React, you need to get help from a data container. [React Komposer](https://github.com/arunoda/react-komposer) is an ideal tool for that.

Have a look at [this example app](http://www.webpackbin.com/EJgu0ne-z).
