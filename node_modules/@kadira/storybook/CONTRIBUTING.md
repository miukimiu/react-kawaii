# Contributing to React Storybook

We welcome you help to make React Storybook better. This document will help to streamline the contributing process and save everyone's precious time.

## Issues

No software is bug free. So, if you got an issue, follow these steps:

* Search the [issue list](https://github.com/kadirahq/react-storybook/issues?utf8=%E2%9C%93&q=) for current and old issues.
* If non of that is helping, create an issue with with following information:
  * Clear title (make is shorter if possible).
  * Describe the issue in clear language.
  * Share error logs, screenshots and etc.
  * To speed up the issue fixing process, send us a sample repo with the issue you faced.

## Pull Requests (PRs)

We welcome your contributions. There are many ways you can help us. This is few of those ways:

* Fix typos and add more documentation.
* Try to fix some [bugs](https://github.com/kadirahq/react-storybook/labels/bug).
* Work on [enhancements](https://github.com/kadirahq/react-storybook/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement) and new [features](https://github.com/kadirahq/react-storybook/issues?q=is%3Aissue+is%3Aopen+label%3Afeature).
* Add more tests (specially for the UI).

Before you submit a new PR, make you to run `npm test`. Do not submit a PR if tests are failing. If you need any help, create an issue and ask.

## Development Guide

> If you want to work on a UI feature, refer to the [Storybook UI](https://github.com/kadirahq/storybook-ui) project.

This project written in ES2016+ syntax so, we need to transpile it before use.
So run the following command:

```
npm run dev
```

This will watch files and transpile.

### Linking

First of all link this repo with:

```sh
npm link
```

In order to test features you add, you may need to link the local copy of this repo.
For that we need a sample project. Let's create it.

```sh
npm i -g create-react-app getstorybook
create-react-app my-demo-app
cd my-demo-app
getstorybook
```

> It's pretty important to create a very simple sample project like above.
> Otherwise some of the functionality won't work because of likning.

Then link storybook inside the sample project with:

```sh
npm link @kadira/storybook
```

### Getting Changes

After you've done any change, you need to run the `npm run storybook` command everytime to see those changes.
