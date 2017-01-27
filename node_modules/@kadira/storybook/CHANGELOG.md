## Changelog

### v2.35.3

Allow customConfig to override devtool. [PR668](https://github.com/storybooks/react-storybook/pull/668)

### v2.35.2
03-January-2017

Fixes issue [#601](https://github.com/storybooks/react-storybook/issues/601) where it throws error when introduce a propType with a hypen. Add a [fix](https://github.com/kadirahq/babel-plugin-react-docgen/pull/23) to [`babel-plugin-react-docgen`](https://github.com/kadirahq/babel-plugin-react-docgen) to fix this issue.

This release comes with the updated `babel-plugin-react-docgen`.

### v2.35.1

* Revert [PR653](https://github.com/storybooks/react-storybook/pull/653) where it's causing HMR to not working properly.

### v2.35.0
18-December-2016

* Using file-loader to load all the extensions [PR653](https://github.com/storybooks/react-storybook/pull/653)
* Update css-loader dependency [PR648](https://github.com/storybooks/react-storybook/pull/648)
* Check if stories are loaded from Jest [PR644](https://github.com/storybooks/react-storybook/pull/644)

### v2.34.0
05-December-2016

Open the express router for developers (middleware.js file). [PR435](https://github.com/storybooks/react-storybook/pull/435)

### v2.33.1
01-December-2016

Update Typescript definition file for global addDecorator. [PR634](https://github.com/storybooks/react-storybook/pull/634)

### v2.33.0
28-November-2016

Completely avoid re-rendering the preview iframe. [PR631](https://github.com/storybooks/react-storybook/pull/631)

### v2.32.2
28-November-2016

Update postmsg channel module version [PR627](https://github.com/storybooks/react-storybook/pull/627)

### v2.32.1
22-November-2016

Add support for react_perf comes with React 15.4.0. [PR623](https://github.com/storybooks/react-storybook/pull/623)

### v2.32.0

Incorrect publish (error when running `npm publish`)

### v2.31.0
20-November-2016

Add the react-storybook version to the build output. [PR621](https://github.com/storybooks/react-storybook/pull/621)

### v2.30.1
17-November-2016

Update the postmsg channel module to fix issue [#555](https://github.com/storybooks/react-storybook/issues/555) with [PR611](https://github.com/storybooks/react-storybook/pull/611)

### v2.30.0
16-November-2016

Update to the new Storybook UI which doesn't use Redux.

### v2.29.7
11-November-2016

Update @kadira/storybook-ui to the latest.

### v2.29.6
10-November-2016

Fix a typo in the story syntax error messages. [PR610](https://github.com/storybooks/react-storybook/pull/610)

### v2.29.5
09-November-2016

Check if regex and regex.test is available before calling it. [PR608](https://github.com/storybooks/react-storybook/pull/608)

### v2.29.3
08-November-2016

Update webpack-hot-middleware to version 2.13.2 to fix the issue [#543](https://github.com/storybooks/react-storybook/issues/543).

### v2.29.3
03-November-2016

Fix a regression caused by v2.29.2.
There was a text called undefined listed always on the top of the preview.

### v2.29.2
03-November-2016

Add various fixes.

* Use webpack chunkhash to enable long-term caching. [PR597](https://github.com/kadirahq/react-storybook/pull/597)
* Fixed json loader testing for when test is multiple. [PR598](https://github.com/kadirahq/react-storybook/pull/598)
* Fix usage of custom favicon [PR592](https://github.com/kadirahq/react-storybook/pull/592)
* Update postcss-loader to v1.1.0 [PR599](https://github.com/kadirahq/react-storybook/pull/599)
* fix for `module.hot` is not available in a static build [PR600](https://github.com/kadirahq/react-storybook/pull/600)

### v2.29.1
03-November-2016

Update babel-plugin-react-docgen to v1.4.1 to fix HOC [issue](https://github.com/kadirahq/babel-plugin-react-docgen/issues/19)

### v2.29.0
01-November-2016

Update babel-plugin-react-docgen to 1.4.0.
This will fix some of the compilation issues such as #580.

### v2.28.1
28-October-2016

Remove preview decorator support. [PR583](https://github.com/kadirahq/react-storybook/pull/583).

### v2.28.0
28-October-2016

Add preview decorator support. [PR582](https://github.com/kadirahq/react-storybook/pull/582).
This will help us bring storybook designer with some great power.

### v2.27.0
27-October-2016

Add a few usability improvements to Storybook.

* Display storybook version. [PR559](https://github.com/kadirahq/react-storybook/pull/559)
* Make the storybooks cacheable. [PR578](https://github.com/kadirahq/react-storybook/pull/578)
* Change the devtool to eval and remove the use of source maps. [PR577](https://github.com/kadirahq/react-storybook/pull/577)
* Update `babel-preset-react-app` to the latest. [PR576](https://github.com/kadirahq/react-storybook/pull/576)
* Ship `json-loader` by default. [PR575](https://github.com/kadirahq/react-storybook/pull/575)

### v2.26.0
24-October-2016

Get some new features from CRA.

* Add jsx as a resolve extension [PR563](https://github.com/kadirahq/react-storybook/pull/563)
* Allow to use postcss for CSS @imports [PR564](https://github.com/kadirahq/react-storybook/pull/564)
* Use process.env as a proper object [PR565](https://github.com/kadirahq/react-storybook/pull/565)

### v2.25.1
23-October-2016

Add a potential fix to [558](https://github.com/kadirahq/react-storybook/issues/558) by updating babel-plugin-react-docgen to the latest(v1.3.2).

### v2.25.0
21-October-2016

Add react docgen info into React classes with the react-docgen babel plugin. [PR557](https://github.com/kadirahq/react-storybook/pull/557).
With this:

  * We could get docgen info with any React component class using `ClassName.__docgenInfo`.
  * From the global collection: `STORYBOOK_REACT_CLASSES`

Additionally, added `yarn.lock`.

### v2.24.1
19-October-2016

Do not show git command output. [PR554](https://github.com/kadirahq/react-storybook/pull/554)

### v2.24.0
07-October-2016

* Export git repository info to support custom tool integrations [PR536](https://github.com/kadirahq/react-storybook/pull/536)

### v2.23.0
06-October-2016

* Remove the experimental database addon from react-storybook [PR535](https://github.com/kadirahq/react-storybook/pull/535)

### v2.22.0
05-October-2016

Add some nice development experiment based on suggestion from Dan Abramov.

* Set a color to the Storybook URL in the console. [PR533](https://github.com/kadirahq/react-storybook/pull/533)
* Add better error message when there's no React element in the story. [PR534](https://github.com/kadirahq/react-storybook/pull/534)

### v2.21.0
05-October-2016

* Get the latest features from CRA including NODE_PATH support, public folder support and some other minor changes. [#468](https://github.com/kadirahq/react-storybook/issues/468)
* Also bumped `@kadira/storybook-channel-postmsg` to `^1.0.3`

### v2.20.1
28-September-2016

* Fix story kind order bug [PR499](https://github.com/kadirahq/react-storybook/pull/499)
* Prefix config environment variables [PR503](https://github.com/kadirahq/react-storybook/pull/503)

### v2.20.0
26-September-2016

* Use postMessage channel [PR498](https://github.com/kadirahq/react-storybook/pull/498)
* Support dynamic panel titles [PR497](https://github.com/kadirahq/react-storybook/pull/497)

### v2.19.0
26-September-2016

* Support layout options [PR494](https://github.com/kadirahq/react-storybook/pull/494)
* Update Typescript definitions [PR491](https://github.com/kadirahq/react-storybook/pull/491) and [PR493](https://github.com/kadirahq/react-storybook/pull/493)

### v2.18.1
23-September-2016

* Stop uglifyjs from mangling names [PR483](https://github.com/kadirahq/react-storybook/pull/483)

### v2.18.0
23-September-2016

* Remove `STORYBOOK_` prefix from config env [PR481](https://github.com/kadirahq/react-storybook/pull/481)

### v2.17.0
22-September-2016

* Add support for StoryShots. [PR479](https://github.com/kadirahq/react-storybook/pull/479)
* Fix some typos: [PR477](https://github.com/kadirahq/react-storybook/pull/477) & [PR478](https://github.com/kadirahq/react-storybook/pull/478)

### v2.16.1
21-September-2016

* Fix the 404 error for `addon-db.json` file [PR472](https://github.com/kadirahq/react-storybook/pull/472)
* Serve/Bundle the storybook favicon [PR473](https://github.com/kadirahq/react-storybook/pull/473)

### v2.16.0
21-September-2016

* Move the babel config loading logic into a seperate file. [PR469](https://github.com/kadirahq/react-storybook/pull/469)
* Update airbnd eslint rules to the latest.

### v2.15.1
19-September-2016

Add a fix to webpack custom resolve.alias not working. [PR465](https://github.com/kadirahq/react-storybook/pull/465)

### v2.15.0
19-September-2016

* Use @kadira/storybook-addons as a resolve.alias. So, we can support addons for NPM2 too. [PR462](https://github.com/kadirahq/react-storybook/pull/462)

### v2.14.0
14-September-2016

* Watch missing NPM modules and force webpack rebuild. [PR446](https://github.com/kadirahq/react-storybook/pull/446)
* Fix issue on error message hanging after even it solved. [PR447](https://github.com/kadirahq/react-storybook/pull/447)
* Allow to reload if HMR goes crazy. [PR448](https://github.com/kadirahq/react-storybook/pull/448)
* Add support to get custom env variables. [PR450](https://github.com/kadirahq/react-storybook/pull/450)

### v2.13.1
14-September-2016

* Fix 404 error when db file does not exist [PR449](https://github.com/kadirahq/react-storybook/pull/449)

### v2.13.0
9-September-2016

* Fix [#443](https://github.com/kadirahq/react-storybook/issues/443) where the static version of Storybook doesn't like Safari.
* Update postcss-loader to 0.13.0.

### v2.12.1
8-September-2016

* Parse static directory provided by env as a list. [PR436](https://github.com/kadirahq/react-storybook/pull/436)

### v2.12.0
8-September-2016

* Do not include addon register file on preview. [PR426](https://github.com/kadirahq/react-storybook/pull/426)
* Update css-loader to version 0.25.0. [PR427](https://github.com/kadirahq/react-storybook/pull/427)
* Get the head.html values for every page request. [PR432](https://github.com/kadirahq/react-storybook/pull/432)

### v2.11.0
4-September-2016

* Remove babel-polyfill since we don't use it.
* Update versions with the help from greenkeeper. [PR421](https://github.com/kadirahq/react-storybook/pull/421)

### v2.10.0
3-September-2016

* Adding airbnb-js-shims again. [PR419](https://github.com/kadirahq/react-storybook/pull/419)

### v2.9.1
2-September-2016.

* Use the config directory to store the addon database file [PR418](https://github.com/kadirahq/react-storybook/pull/418).

### v2.9.0
2-September-2016.

* Copy the addon-db.json file when building static storybooks [PR417](https://github.com/kadirahq/react-storybook/pull/417).

### v2.8.0
2-September-2016.

* Update @kadira/storybook to get the clean query params feature. See [storybook-ui-PR37](https://github.com/kadirahq/storybook-ui/pull/37)

### v2.7.0
1-September-2016

* Add addon database feature [PR415](https://github.com/kadirahq/react-storybook/pull/415).

### v2.6.1
31-August-2016

* Bring back HMR dev logs. [PR412](https://github.com/kadirahq/react-storybook/pull/412).

### v2.6.0
30-August-2016

* Allow start/build params from env variables. [PR413](https://github.com/kadirahq/react-storybook/pull/413)

### v2.5.2
29-August-2016

* Remove the use of babel-runtime/core-js modules. [PR410](https://github.com/kadirahq/react-storybook/pull/410)

### v2.5.1
24-August-2016

* Update @kadira/storybook-ui to v3.3.2

### v2.5.0
24-August-2016

* We are no longer shipping extra polyfills anymore. [PR402](https://github.com/kadirahq/react-storybook/pull/402)

### v2.4.2
24-August-2016

* Allow file-loader URLs to work on subpaths. [PR401](https://github.com/kadirahq/react-storybook/pull/401)

### v2.4.1
24-August-2016

* Bump @kadira/storybook ui to v3.3.1 to fix some UI related issues.

### v2.4.0
23-August-2016

* Simplify the option to stop tracking. [PR399](https://github.com/kadirahq/react-storybook/pull/399)
* Use JSON5 instead of CJSON to parse .babelrc. [PR398](https://github.com/kadirahq/react-storybook/pull/398)
* Add webpack2 support by changing the use of OccurenceOrderPlugin. [PR397](https://github.com/kadirahq/react-storybook/pull/397)
* Use @kadira/storybook-ui 2.3.0, which has new APIs to set URL for addons.

### v2.3.0
16-August-2016

* Implement anonymous usage tracking. [PR384](https://github.com/kadirahq/react-storybook/pull/384)

### v2.2.3
15-August-2016

* Add a hash to media file's filename. Otherwise, it'll cause issues when there are multiple images with the same filename but in different directories. [PR380](https://github.com/kadirahq/react-storybook/pull/380)

### v2.2.2
10-August-2016

* Remove unused extract-text-webpack-plugin. This will add webpack2 support. [PR369](https://github.com/kadirahq/react-storybook/pull/369).

### v2.2.1
09-August-2016

* Use @kadira/storybook-channel modules. [#PR359](https://github.com/kadirahq/react-storybook/pull/359).
* Update @kadira/storybook-ui to the latest.

### v2.2.0
05-August-2016

This release bring some webpack config related optimizations and the NPM2 support. Here are the notable changes:

* Use es6-shim directly into webpack config. [PR355](https://github.com/kadirahq/react-storybook/pull/355)
* Use the default babel-config based on CRA's config. [PR354](https://github.com/kadirahq/react-storybook/pull/354)
* Add NPM2 support. [PR356](https://github.com/kadirahq/react-storybook/pull/356)
* Add autofixer defaults. [PR357](https://github.com/kadirahq/react-storybook/pull/357)

### v2.1.1
03-August-2016

Remove default webpack config for all config types. [PR348](https://github.com/kadirahq/react-storybook/pull/348)

Now we only use the Create React App based config if there's no custom webpack config.
This will fix issues like [#347](https://github.com/kadirahq/react-storybook/issues/347).

### v2.1.0
02-August-2016

Add support for the addon API. See [PR346](https://github.com/kadirahq/react-storybook/pull/346).

Here after we are using most of the features including actions,links as plugins.
So, this introduced a huge area to add customizations to React Storybook.

Unfortunately, as of this version, there are no docs for this feature. But, you can have a look at these addons:

* actions addon (powers the action logger): https://github.com/kadirahq/storybook-addon-actions
* links addon (powers the linkTo feature): https://github.com/kadirahq/storybook-addon-links

Have a look at [here](https://github.com/kadirahq/react-storybook/blob/master/src/server/config.js#L88) to how to configure addons.

### v2.0.0
01-August-2016

This is the starting of the next major version of React Storybook. This version is almost compatible with `v1.x.x` but defaults have been changes as discussed below. That's why we are starting out a new version.

* Update defaults to match create-react-app. [PR342](https://github.com/kadirahq/react-storybook/pull/342). Here are the notable changes:
  * Add postcss based CSS loader.
  * Add file-loader for images and common types.
  * Add url-loader for shorter media files.
  * Do not pre-build manager(storybook UI) bundle.
  * Continue support for babel's stage-0 preset and add es2016 preset.
* Update @kadira/storybook-ui to v2.6.1 to remove some React warnings.

### v1.41.0

* Fix nodejs require errors [#337](https://github.com/kadirahq/react-storybook/pull/337).
* Add getStorybook method to client API [#332](https://github.com/kadirahq/react-storybook/pull/332).

### v1.40.0

* Fix duplicate decorator bug [#335](https://github.com/kadirahq/react-storybook/pull/335).

### v1.39.1

* Update babel packages [#325](https://github.com/kadirahq/react-storybook/pull/325).
* Hide HMR info logs [#331](https://github.com/kadirahq/react-storybook/pull/331).

### v1.39.0

* Update @kadira/storybook-ui to get features from [v2.5.0](https://github.com/kadirahq/storybook-ui/blob/master/CHANGELOG.md#v250) and [v2.6.0](https://github.com/kadirahq/storybook-ui/blob/master/CHANGELOG.md#v260).

### v1.38.3

* Add names for action and linkTo functions [#321](https://github.com/kadirahq/react-storybook/pull/321).

### v1.38.2

* Fix error in prepublish script [#319](https://github.com/kadirahq/react-storybook/pull/319).

### v1.38.1

* Improve Windows support by writing prepublish script using shelljs [#308](https://github.com/kadirahq/react-storybook/pull/308).

### v1.38.0

* v1.37.0 was a nightmare since it contains the npm-shrinkwrap.json. Fixed by removing it. See: [#306](https://github.com/kadirahq/react-storybook/issues/306) and [#305](https://github.com/kadirahq/react-storybook/pull/305).

### v1.37.0

* Update @kadira/storybook-ui to 2.4.0

### v1.36.0

* Support watchOptions configuration. See: [PR287](https://github.com/kadirahq/react-storybook/pull/287)

### v1.35.2

* Add missing font-face to the ErrorDisplay's heading.

### v1.35.1

* Fix issue related to bad error handling. See issue [#275](https://github.com/kadirahq/react-storybook/issues/275):

### v1.35.0

* Add fuzzy search powered search box and Redux DevTools support via [@kadira/storybook-ui@2.3.0](https://github.com/kadirahq/storybook-ui/blob/master/CHANGELOG.md#v230).

### v1.34.1

* Don't always override NODE_ENV in build-storybook. [PR272](https://github.com/kadirahq/react-storybook/pull/272)

### v1.34.0

* Use storybook-ui v2.2.0 which puts shortcut state into the URL.

### v1.33.0

* Introduce an [extension API](https://github.com/kadirahq/react-storybook/blob/master/docs/extensions.md) for React Storybook. See: [PR258](https://github.com/kadirahq/react-storybook/pull/258)

### v1.32.1

* Extend @kadira/storybook-ui provider from it's base Provider.

### v1.32.0

* Use @kadira/storybook-ui as the manager UI with the implemented provider for React. See `client/manager` for more info.

### v1.31.0

* Pass a `context` argument to stories [PR250](https://github.com/kadirahq/react-storybook/pull/250)

### v1.30.0

* Fuzzy search kinds [PR247](https://github.com/kadirahq/react-storybook/pull/247)

### v1.29.5

* Update dependency version to fix filter crash [PR246](https://github.com/kadirahq/react-storybook/pull/246)

### v1.29.4

* Protect index.html/iframe.html from being overwritten [PR243](https://github.com/kadirahq/react-storybook/pull/243)

### v1.29.3

* Update @kadira/storybook-core version [PR241](https://github.com/kadirahq/react-storybook/pull/241)
* Add es6-shim by default [PR238](https://github.com/kadirahq/react-storybook/pull/238)

### v1.29.2

* Use url.resolve instead of path.join [PR240](https://github.com/kadirahq/react-storybook/pull/240)

### v1.29.1

* Copy missed manager.js.map file on static build [PR236](https://github.com/kadirahq/react-storybook/pull/236)

### v1.29.0

* Multiple static dirs (comma separated) [PR229](https://github.com/kadirahq/react-storybook/pull/229)

### v1.28.5

* Support ECMAScript stage-0 [PR228](https://github.com/kadirahq/react-storybook/pull/228) to fix [Issue #227](https://github.com/kadirahq/react-storybook/issues/227)

### v1.28.4

* Support custom webpack public path for dev-server and static build started by [PR226](https://github.com/kadirahq/react-storybook/pull/226)

### v1.28.3

* Revert [PR226](https://github.com/kadirahq/react-storybook/pull/226)

### v1.28.2

* Support custom webpack publicPath [PR226](https://github.com/kadirahq/react-storybook/pull/226)

### v1.28.1

* Add charset meta tags to HTML heads [PR216](https://github.com/kadirahq/react-storybook/pull/216)

### v1.28.0

* Moved storybook serving code into a middleware to support more advanced use cases.
* Refactored dev server to use storybook middleware [PR211](https://github.com/kadirahq/react-storybook/pull/211)

### v1.27.0

* Move modules to storybook-core repo. [PR196](https://github.com/kadirahq/react-storybook/pull/196)
* Add stack-source-map again only for Chrome to get better error stacks.
* Add ability to control the hostname. See [PR195](https://github.com/kadirahq/react-storybook/pull/195) and [PR198](https://github.com/kadirahq/react-storybook/pull/198)

### v1.26.0
12-May-2016

* Ensure asset directory exists in the static-builder.

### v1.25.0
11-May-2016

* Fix several publishing related issues. See: [#188](https://github.com/kadirahq/react-storybook/pull/188).
* Fix babel extends issue. See: [PR185](https://github.com/kadirahq/react-storybook/pull/185).
* Fix issue with removing a preset from users babelrc.
  * Fixes: [#183](https://github.com/kadirahq/react-storybook/issues/183).
  * [PR184](https://github.com/kadirahq/react-storybook/pull/184)
* Make left panel scrollable with keeping the filterbox always. See: [PR182](https://github.com/kadirahq/react-storybook/pull/182).
* Add `qs` as a direct dependency as it's used in preview.

### v1.24.0
10-May-2016

* Add a potential fix for the double scrollbar issue. See: [179](https://github.com/kadirahq/react-storybook/issues/179).
* Add scrolling support to the left panel. Fixes [#177](https://github.com/kadirahq/react-storybook/issues/177).
* Remove NODE_ENV=production flag. Fixes [#158](https://github.com/kadirahq/react-storybook/issues/158)

### v1.23.0
09-May-2016

* Add shortcuts to jump to previous and next stories. See [PR176](https://github.com/kadirahq/react-storybook/pull/176)
* Fix loader concatenation bug specially when custom config doesn't have a loaders section. [PR173](https://github.com/kadirahq/react-storybook/pull/173)

### v1.22.1
06-May-2016

* Add a potential fix for [#167](https://github.com/kadirahq/react-storybook/issues/167)
  * basically, this moved back babel-packages required by webpack.

### v1.22.0
06-May-2016

* Improve the static builder time.

### v1.21.0
06-May-2016

* Add configType argument to custom config function. See: [PR169](https://github.com/kadirahq/react-storybook/pull/169)
* Add the unicode version of the Keyboard Shortcut Icon. See: [PR170](https://github.com/kadirahq/react-storybook/pull/170)

### v1.20.0
05-May-2016

* Allow to configure webpack as the user wants. See [PR160](https://github.com/kadirahq/react-storybook/pull/160)
* Add typescript typings support for the core API. See [PR157](https://github.com/kadirahq/react-storybook/pull/157)
* Implement Mantra architecture and some new features including permalinks, full screen support. See: [PR165](https://github.com/kadirahq/react-storybook/pull/165)
* Remove some typo in docs. See: [PR154](https://github.com/kadirahq/react-storybook/pull/154)
* Move UI testing libraries to devDependencies. See: [PR153](https://github.com/kadirahq/react-storybook/pull/153)

### v1.19.0
27-April-2016

* Add airbnb-js-shims to client-side JS. See: [PR147](https://github.com/kadirahq/react-storybook/pull/147)
* Remove self-closing div tag, which is invalid HTML. See: [PR148](https://github.com/kadirahq/react-storybook/pull/148)
* Search for a .babelrc in the storybook config directory first, then the project root. See: [PR149](https://github.com/kadirahq/react-storybook/pull/149)

### v1.18.0
26-April-2016

* Link React Storybook menu to the repo. See: [PR137](https://github.com/kadirahq/react-storybook/pull/137)
* Implement keyboard shortcuts and fuzzy search. See: [PR141](https://github.com/kadirahq/react-storybook/pull/141)

### v1.17.2
25-April-2016

* Fix an error which only occurs on Firefox. See: [PR144](https://github.com/kadirahq/react-storybook/pull/144)

### v1.17.1
21-April-2016

* Fix a regression introduce by `v1.17.0`. See: [PR133](https://github.com/kadirahq/react-storybook/pull/133)

### v1.17.0
21-April-2016

* Check all the arguments passed to action for events. See: [PR132](https://github.com/kadirahq/react-storybook/pull/132)

### v1.16.1
21-April-2016

* Fix action logs highlighting issue, which comes as a regression of [PR126](https://github.com/kadirahq/react-storybook/pull/126).

### v1.16.0
20-April-2016

* Prevent re-rendering the preview iframe when there is an action.
  * Related issue: [#116](https://github.com/kadirahq/react-storybook/issues/116)
  * Related PR: [PR126](https://github.com/kadirahq/react-storybook/pull/126)

### v1.15.0
20-April-2016

* Improve action logger UI and increase max log count to 10. See [PR123](https://github.com/kadirahq/react-storybook/pull/123)

### v1.14.0
19-April-2016

* Add syntax highlights to the logger. See: [PR118](https://github.com/kadirahq/react-storybook/pull/118)

### v1.13.0

* Add some UI test cases. See [PR103](https://github.com/kadirahq/react-storybook/pull/103)
* Implement `.addDecorator()` API. See [PR115](https://github.com/kadirahq/react-storybook/pull/115)
* Add code folding support. See [PR111](https://github.com/kadirahq/react-storybook/pull/111)

### v1.12.0
14-April-2016

* Add support for webpack module preLoaders. See: [PR107](https://github.com/kadirahq/react-storybook/pull/107)

### v1.11.0
13-April-2016

* Add support for React DevTools. See: [PR104](https://github.com/kadirahq/react-storybook/pull/104)

### v1.10.2
12-April-2016

Fix various issues related to static bundling.

* Add custom head generation to static build as well.
* Use relative urls so, static sites can be host with paths (GH Pages)
* Identify SyntheticEvent using feature detection. UglifyJS mangal class names, so we can't use classnames to detect a SyntheticEvent in the static build.

### v1.10.1

* Don't serve index.html in static directory as a site index. See [PR100](https://github.com/kadirahq/react-storybook/pull/100)
* Use cjson for parsing .babelrc files (support comments). See [PR98](https://github.com/kadirahq/react-storybook/pull/98)
* Remove the dist directory before running babel to avoid older code. See [PR101](https://github.com/kadirahq/react-storybook/pull/101)

### v1.10.0

* Add custom head support inside the iframe. See [PR77](https://github.com/kadirahq/react-storybook/pull/77)
* Unmount components before rendering into DOM node. Fix: [#81](https://github.com/kadirahq/react-storybook/issues/81)
* Add a static file builder. See [PR88](https://github.com/kadirahq/react-storybook/pull/88)
* Fix search box's lineHeight to work with all the browsers. See: [PR94](https://github.com/kadirahq/react-storybook/pull/94)
* Add the search box. See: [PR91](https://github.com/kadirahq/react-storybook/pull/91).

### v1.9.0

Add some minor improvements.

* Avoid deprecated warning in Chrome Canary. See: [PR85](https://github.com/kadirahq/react-storybook/pull/85)
* Fix the React Warning about CSS property. See: [PR84](https://github.com/kadirahq/react-storybook/pull/84)
* Transition on latest logged action. See: [PR80](https://github.com/kadirahq/react-storybook/pull/80)

### v1.8.0

* Add story linking functionality.
  * [Documentation](https://github.com/kadirahq/react-storybook/blob/master/docs/api.md#linking-stories).
  * Original feature request: [#50](https://github.com/kadirahq/react-storybook/issues/50)
  * Implementation: [PR86](https://github.com/kadirahq/react-storybook/pull/86)

### v1.7.0

* Add support to React v15.0.0.

### v1.6.0

* Make scrollable layout. See: [PR](https://github.com/kadirahq/react-storybook/pull/70)
* Add npm3 requirement to the `package.json`.
* Add `react` and `react-dom` to devDependencies.

### v1.5.0

* Add support for most of the custom webpack configuration. See [PR64](https://github.com/kadirahq/react-storybook/pull/64)

### v1.4.0

* Add CLI option to specify the config dir. See [PR52](https://github.com/kadirahq/react-storybook/pull/52).

### v1.3.0

* Load the `.babelrc` manually. Fixed: [#41](https://github.com/kadirahq/react-storybook/issues/41)
* Add a better contributing guide. See [CONTRIBUTING.md](https://github.com/kadirahq/react-storybook/blob/master/CONTRIBUTING.md)
* Add a development utility `npm run dev` which watches "src" directory and run `npm run prepublish`.

### v1.2.0

* Add a button to clear logs in the ActionLogger. This is requested in [PR21](https://github.com/kadirahq/react-storybook/issues/21).
* Remove navigation list order hijacking. See [commit](https://github.com/kadirahq/react-storybook/commit/166365fd38f51f79e69e028a1c11e2620eddcb99).
* Fix a typo in .gitignore. See [PR31](https://github.com/kadirahq/react-storybook/pull/31).
* Add support for JSX. See [PR18](https://github.com/kadirahq/react-storybook/pull/18).

### v1.1.0

* v1.0.0 was a mistake and it contains very old code. That's why we had to do a 1.1.0 release.

### v1.0.0

* Yeah!
