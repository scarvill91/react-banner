# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.0.0-rc.1"></a>
## 1.0.0-rc.1 (2018-08-25)

* chore(deps): update outdated packages and lock file ([96661de](https://github.com/skipjack/react-banner/commit/96661de))
* fix: fix bug with some links rendering as basic `span` elements ([6c8d069](https://github.com/skipjack/react-banner/commit/6c8d069))
* docs(changelog): add missing breaking changes ([01a56e6](https://github.com/skipjack/react-banner/commit/01a56e6))



<a name="1.0.0-rc.0"></a>
# [1.0.0-rc.0](https://github.com/skipjack/react-banner/compare/v0.5.0...v1.0.0-rc.0) (2018-04-11)


### Code Refactoring

* rename `links` prop to `items` and change object structure ([d415872](https://github.com/skipjack/react-banner/commit/d415872))


### Features

* support `overlay` prop to easily overlay the banner on top of other content ([7f16565](https://github.com/skipjack/react-banner/commit/7f16565))


### BREAKING CHANGES

* The `links` prop is now `items`. A `content` field is now used for
each object in `items` to determine what's displayed rather than the previous 
`title` property. The `title` field now only determines the normal HTML
tooltip-like `title` attribute.



<a name="0.5.0"></a>
# [0.5.0](https://github.com/skipjack/react-banner/compare/v0.4.0...v0.5.0) (2018-01-25)


### Bug Fixes

* ignore unnecessary configs from `publish` ([ca8b6fa](https://github.com/skipjack/react-banner/commit/ca8b6fa))


### Features

* allow link objects to use a custom `isActive` function ([b025d88](https://github.com/skipjack/react-banner/commit/b025d88))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/skipjack/react-banner/compare/v0.3.1...v0.4.0) (2017-10-19)


### Features

* **search:** implement `onSearchTyping` and add `searchResults` props ([636ae07](https://github.com/skipjack/react-banner/commit/636ae07))



<a name="0.3.1"></a>
## [0.3.1](https://github.com/skipjack/react-banner/compare/v0.3.0...v0.3.1) (2017-05-11)


### Bug Fixes

* simplify `_isActive` test and fix a bug in the test ([84834ba](https://github.com/skipjack/react-banner/commit/84834ba))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/skipjack/react-banner/compare/v0.2.0...v0.3.0) (2017-05-01)


### Bug Fixes

* fix issue with duplicate/incorrect link ids ([73b08af](https://github.com/skipjack/react-banner/commit/73b08af))
* force link objects with no `url` to always fail `_isActive` test ([59dc0fd](https://github.com/skipjack/react-banner/commit/59dc0fd))
* ignore all non library related files ([4e6545a](https://github.com/skipjack/react-banner/commit/4e6545a))
* remove unnecessary `activeClassName` in `spa-link.jsx` ([0bef146](https://github.com/skipjack/react-banner/commit/0bef146))


### Features

* add support for custom `className` in link objects ([edfcfa1](https://github.com/skipjack/react-banner/commit/edfcfa1))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/skipjack/react-banner/compare/v0.1.7...v0.2.0) (2017-04-27)


### Bug Fixes

* remove react-dom peer dep ([364b3e9](https://github.com/skipjack/react-banner/commit/364b3e9))


### Features

* expose `icons` prop for icon modification ([69ece75](https://github.com/skipjack/react-banner/commit/69ece75))
