0.15.0 / 2016-10-18
===================

  * Breaking - Rework `merge.smart` so that it **appends** loaders instead of **prepending** them. This is the logical thing to do as it allows you to specify behavior better as you `merge`. #32

0.14.1 / 2016-07-25
===================

  * Docs: Improve package description. #23.
  * Bug fix - Let `merge.smart` merge loaders based on their full name instead of first letter. Thanks to @choffmeister. #26.

0.14.0 / 2016-06-05
===================

  * Feature: Allow `merge.smart` to merge `loaders` if `exclude` is the same. Thanks to @mshwery. #21.

0.13.0 / 2016-05-24
===================

  * Bug fix: Allow `merge.smart` to merge configuration if `include` is defined. Thanks to @blackrabbit99. #20.

0.12.0 / 2016-04-19
===================

  * Feature: Support `include/exclude` at `merge.smart` for `loader` definition too. Thanks to @Whoaa512. #16.

0.11.0 / 2016-04-18
===================

  * Feature: Support `include/exclude` at `merge.smart` when its set only in a parent. #15.

0.10.0 / 2016-04-10
===================

  * Feature: Support `include/exclude` at `merge.smart`. Thanks to @siready. #14.

0.9.0 / 2016-04-08
==================

  * Feature: Allow existing objects/arrays to be emptied with an empty object/array later in merge. This overriding behavior is useful for example emptying your `entry` configuration.

0.8.4 / 2016-03-17
==================

  * Bug fix: *webpack-merge* should not mutate inputs. #12

0.8.3 / 2016-03-02
==================

  * Bug fix: Drop `files` field from *package.json* as it wasn't including the dist correctly.

0.8.0 / 2016-03-02
==================

  * Breaking: Change merging behavior so that only loaders get prepended. The rest follow appending logic. This makes `entry` array merging behavior logical. Prepend makes sense only for loaders after all. #10

0.7.3 / 2016-01-11
==================

  * Bug fix: Do not error when there are no matching loaders. Thanks @GreenGremlin!

0.7.2 / 2016-01-08
==================

  * Regenerate tarball. The problem was that there were some old dependencies included. Closes #7.

0.7.1 / 2016-01-03
==================

  * Improve performance by defaulting to `concat` and by dropping a redundant check. Thanks @davegomez!

0.7.0 / 2015-12-31
==================

  * Bug fix: Arrays get merged within nested structures correctly now. Array items are prepended (reverse order compared to earlier). This is related to the change made in *0.6.0*. Incidentally this change affects normal merge as well.
  * Smart merge: If a loader contains either `include` or `exclude`, it will generate separate entries instead of merging. Without this the configuration might change in an unpredictable manner.

0.6.0 / 2015-12-30
==================

  * Support `preLoaders` and `postLoaders`. Previously only `loaders` were supported.
  * Breaking: Change smart merging behavior for `loaders` field so that it prepends loaders instead of appending them. The benefit of this is that now it's possible to specialize loader setup in a predictable manner. For example you can have a linter set up at the root and expect it to become evaluated first always.

0.5.1 / 2015-12-26
==================

  * Fix `merge` object/array case (missing `bind`). The behavior should be correct now.

0.5.0 / 2015-12-26
==================

  * Breaking: Push smart merging behind `merge.smart`. Now `merge` behaves exactly as in *0.3.0* series.

0.4.0 / 2015-12-23
==================

  * Dropped changelog generator. It's better to write these by hand.
  * Breaking: Added smart merging (@GreenGremlin)

0.3.2 / 2015-11-23
==================

  * Tweaked changelog generator process.

0.3.1 / 2015-11-23
==================

  * Added changelog generator.

0.3.0 / 2015-11-13
==================

  * Improved formatting
  * Allowed an arbitrary amount of objects to be merged

0.2.0 / 2015-08-30
==================

  * Only require lodash modules used by the package (@montogeek)
  * Removed lodash.isarray dependency, use Array.isArray standard object

0.1.3 / 2015-08-10
==================

  * Improved README example

0.1.2 / 2015-07-01
==================

  * Simplified example

0.1.1 / 2015-06-26
==================

  * Fixed travis link

0.1.0 / 2015-06-26
==================

  * Initial implementation
