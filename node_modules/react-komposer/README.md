# React Komposer

Feed data into React components by composing containers. <br/>
(Works with any kind of data store whether it's Redux, Promises, RxJX, MobX or anything else)

## TOC
<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:0 orderedList:0 -->

- [Why?](#why)
- [Installation](#installation)
- [Simple Example](#simple-example)
- [Other Core Functionalities](#other-core-functionalities)
	- [Subscribing to data](#subscribing-to-data)
	- [Show Loading screen](#show-loading-screen)
	- [Handling errors](#handling-errors)
- [Performance](#performance)
- [Set Defaults](#set-defaults)
- [Passing an Environment (Like Dependency Injection)](#passing-an-environment-like-dependency-injection)
- [Server Side Rendering (SSR)](#server-side-rendering-ssr)
- [Accessing the UI Component (via refs)](#accessing-the-ui-component-via-refs)
- [Merging Multiple Containers](#merging-multiple-containers)
- [Stubbing](#stubbing)
- [Migrating from 1.x](#migrating-from-1x)

<!-- /TOC -->

## Why?

In React, usually we build UI components and feed data into them via containers. Let's call them data containers.
Inside that data containers, we may need to:

* access different data sources
* show loading screens
* handle errors
* subscribe to data and clean-up subscripts as needed
* re-fetch data when props changed

Among a lot of other things.
React Komposer helps you create such data containers and you only need to worry about writing the data fetching(or integration) logic.

## Installation

```sh
npm install --save react-komposer@2.0.0-beta-4
```

## Simple Example

Let's assume we've got a UI component called Blog Post like this:

```js
const BlogPost = ({ post }) => (
    <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
    </div>
);
```

Now we need to fetch data from the server. So, we'll create a dataLoader like this:

```js
function postDataLoader(props, onData) {
    // load data from the server. (using props.id to identify the post)
    // (Here'll we'll use setTimeout for demonstration purpose)
    setTimeout(function() {
        const post = {
            id: props.id,
            title: 'Hello React Komposer',
            content: 'This will help you to load data into your components.',
        };
        const data = { post };

        // send the data as props to the BlogPost component.
        // So, BlogPost will see the post object as a prop.
        onData(null, data)
    }, 1000);
}
```

Then let's create the container:

```js
import { compose } from 'react-komposer';
const BlogPostContainer = compose(postDataLoader)(BlogPost);
```

Now we could render the BlogPostContainer like this:

```js
import ReactDOM from 'react-dom';
ReactDOM.render(<BlogPostContainer id='post-one' />, document.body);
```

[**Play with this example.**](http://www.webpackbin.com/4J6Z-fDlf)

## Other Core Functionalities

Now we know how to load data to a component using React Komposer. Let's have a look at our other core functionalities.

### Subscribing to data

Usually, we need to subscribe to a data source and update the UI as we get new changes. This is a part of the realtime UI's. With React Komposer, you could easily connect those subscriptions with UI components.

For the above BlogPost component, we can write a data loader like this:

```js
function postDataLoader(props, onData) {
    // Create a subscription to the data server.
    // Use props.id to identify the post.
    // (Here'll we'll use setInterval for demonstration purpose)

    const handler = setInterval(function() {
        const post = {
            id: props.id,
            title: 'Hello React Komposer',
            content: `
              This will help you to load data into your components.
              - Updated at: ${new Date().toLocaleString()}
            `
        };
        const data = { post };

        // send the data as BlogPost component.
        // So, BlogPost will see the post object as a prop.
        onData(null, data)
    }, 1000);

    // return a function which cleanup the handler
    return () => { clearInterval(handler) }
}
```

Here we are calling the **onData** callback for every one second.  We've also returned a function from where it'll be used to clear the resources allocated by the subscription when the container unmounted.

[**Play with this example.**](http://www.webpackbin.com/Vk2AEfPez)

### Show Loading screen

It'll take a bit of time to load data from the server. So, we usually show a loading screen.
React storybook will take care of that automatically.

For any data loader, we could get this by providing a loadingHandler like this:

```js
const options = {
  loadingHandler: () => (<p>Loading...</p>)
};
const BlogPostContainer = compose(postDataLoader, options)(BlogPost);
```

**[Play with this example.](http://www.webpackbin.com/Vk_5lQ_xG)**

We show the loading screen until you provide a data object to the onData function. Have a look at the following data loader:

```js
function postDataLoader(props, onData) {

}
```

Since we've not invoked the onData callback, there'll be the loading screen forever.

### Handling errors

Usually when we are dealing with remote data, we need to handle errors as well. React Komposer has its own way of handling errors. Check this example:

```js
function postDataLoader(props, onData) {
   setTimeout(function() {
     // Assume we got an error object
     const error = new Error('Oops. Something is not right.');
     // pass the error
     onData(error);
   }, 1000);
}
```

By default, we'll throw the error to the console. But you can provide a UI for error like this when creating the container:

```js
const options = {
  errorHandler: (err) => (
    <p style={{color: 'red'}}>
       {err.message}
    </p>
  )
};
const BlogPostContainer = compose(postDataLoader, options)(BlogPost);
```

**[Play with this example.](http://www.webpackbin.com/Nk-4vmOgf)**

## Performance

Performance is really important when building a real world apps. React Komposer comes with few ways to tune the performance. Let's discuss.

### Props Watching

> By default, we watch and re-run data loader for every prop change.

In the data loader, you can access props passed to your container like this:

```js
function postDataLoader(props, onData) {
   console.log(props);
}
```

We re-run the dataLoader for every prop change in the container. If we are using a prop inside the data loader, it's required to re-run the dataLoader when the prop changes.

But reruns for any other prop change is not necessary.

So, we can ask React Komposer to only re-run when given props have changed. Have a look at the following code:

```js
const options = {
    propsToWatch: ['id']
};
const BlogPostContainer = compose(postDataLoader, options)(BlogPost);
```

Here we only re-run the data loader only when the prop named `id` gets changed.

### Should Resubscribe

> By default, this is null.

This gives the same functionality as props watching, but with more control. With the **propsToWatch** option, we do a shallow comparison. If that doesn't work for you, you can use the **shouldSubscribe** option as shown below:

```js
const options = {
    shouldSubscribe(currentProps, nextProps) {
        // return true if you need to re-run the data loader again.
    }
};
```

### Pure

> By default, this is false.


This will take care of the component re-rendering for every prop change. You can make the container pure by applying the following option:

```js
const options = {
    pure: true,
};
const BlogPostContainer = compose(postDataLoader, options)(BlogPost);
```

Then, this will add a [pure render mixin](https://facebook.github.io/react/docs/pure-render-mixin.html) to the React component. (This will compare props in shallow manner).

### Should Update

> By default, this is null

This will provide the same functionality as pure, but with more control. With pure, we compare props shallowly. But, you can use shouldUpdate option to compare it as you want.

Check the following example:

```js
const options = {
    shouldUpdate(currentProps, nextProps) {
        // return true if you need to render the compare with nextProps.
    },
};
const BlogPostContainer = compose(postDataLoader, options)(BlogPost);
```

## Set Defaults

Usually, you may want to use the same set of options for every container you create. So, you could set defaults like this:

```js
import { setDefaults } from 'react-komposer';

const myCompose = setDefaults({
    pure: true,
    propsToWatch: [],
    loadingHandler: () => (<p>Loading...</p>),
});
```

Then you can use `myCompose` instead `compose` when creating containers.

> It's pretty useful to setDefaults like this create a customized composer for your app.


You can override any of these options by providing options when creating the container.

## Passing an Environment (Like Dependency Injection)

This is a pretty neat feature where you can use to inject dependencies.

Usually, your UI component doesn't know about app specific information. But containers do know that. Using env option of React Komposer you could pass a env where your data loaders could utilize.


> This is useful to use with a custom composer created with setDefaults


Have a look at the following example:

```js
import { setDefaults } from 'react-komposer';

// This is the reduxStore of your app.
const reduxStore = {};

const myCompose = setDefaults({
    //...otherOptions
    env: {
        reduxStore
    }
});
```

Then you can access the environment from any dataLoader when the container is created **myCompose**.

```js
function postDataLoader(props, onData, env) {
   // access the redux container and subscribe to that
   return env.reduxStore.subscribe((state) => {
       onData(null, state);
   });
}
```

## Server Side Rendering (SSR)

Usually data loaders run in the constructor of the React component. So, it'll run with SSR as well.
But it won't stop subscriptions for you.

So, you need to identify the SSR environment from your dataLoader, and do not subscribe for data inside that.
Have a look at the following code base:

```js
function postDataLoader(props, onData, env) {
   if (isSSR) {
      const data = fetchData();
      onData(null, data);
      return;
   }

   const stopSubscription = watchData((data) => {
      onData(null, data);
   });
   return stopSubscription;
}
```
## Accessing the UI Component (via refs)

Sometimes ( although not recommended) you may want to access the underlining UI component instead of the container. Then you can call it the **child** property of container instance.

## Merging Multiple Containers

Sometimes, you may want to use multiple data loaders for a single UI component. Then you will have to do something like this:

```js
const Container1 = compose(dataLoader1)(UIComponent);
const Container2 = compose(dataLoader2)(Container1);
const Container3 = compose(dataLoader3)(Container2);

export default Container3;
```

With our merge utility, you could do it like this:

```js
import { merge } from 'react-komposer';

export default merge(
    compose(dataLoader1),
    compose(dataLoader2),
    compose(dataLoader3),
)(UIComponent);
```

## Stubbing

Sometimes, you may wanna use containers created with React Komposer in environments where it couldn't work. <br/>
(For an example, React Storybook. It might not have your dataStores)

For those environments, you could stub your containers.

For that, simply put following lines before import any of your components.
(In React Storybook, it should be the config.js file)

```js
import { setStubbingMode } from 'react-stubber';
setStubbingMode(true);
```

Then you could stub your containers as you want. Follow the [react-stubber](https://github.com/kadirahq/react-stubber) documentation for more information.

> Internally, React Komposer uses [react-stubber](https://github.com/kadirahq/react-stubber) to add stubbing support.

## Migrating from 1.x

React Komposer 2.x is almost compatible with 1.x but with few minor changes. Here are they:

### No default error and loading components

1.x comes with default components for error and loading components. But, now you need to specify them manually with **errorHandler** and **loadingHandler** options.

We do this because, we want to use React Komposer on both React and React Native environment. Shipping defaults components make it harder to.

### ComposeAll is now merge

1.x has a function called composeAll which does exactly the same functionality as merge. Now we have renamed it as merge. But still, composeAll is available.

### By Default pure=false

Earlier, all of the containers we created were pure. But now you need to pass the pure option to make it pure.

### No utility composers for promises, redux and etc.

Earlier, we shipped a set of composers for different kinds of data stores. But now they are not shipped with this project. We recommend you create a data loader generator instead. Then use it.

> You may also publish it into NPM and share it with others.

Have a look at some example data loader generators:

**For Promises**

```js
function genPromiseLoader(promise) {
    return (props, onData) {
      promise
        .then((data) => onData(null, data))
        .catch((err) => onData(err))
    };
}

// usage
const Container = compose(genPromiseLoader(somePromiseObject))(UIComponent);
```

**For Redux**

```js
function getReduxLoader(mapper) {
    return (props, onData, env) {
        // Accessing the reduxStore via the env.
        return env.reduxStore.subscribe((state) => {
            onData(null, mapper(state));
        });
    };
}

// usage (expect you to pass the reduxStore via the env)
const myMapper = ({user}) => ({user});
const Container = compose(getReduxLoader(myMapper))(UIComponent)
```
