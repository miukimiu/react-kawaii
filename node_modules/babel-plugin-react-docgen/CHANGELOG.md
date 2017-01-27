# ChangeLog

### v1.4.2
03-January-2017

Add support for hypen propTypes.

### v1.4.1
03-November-2016

Fixes [#19](https://github.com/kadirahq/babel-plugin-react-docgen/pull/20)

### v1.4.0
01-November-2016

Handle multiple components in the same file by checking with exported classes. [PR17](https://github.com/kadirahq/babel-plugin-react-docgen/pull/17)

### v1.3.1
23-October-2016

* Restrict JSX lookup only for direct JSX returns. [PR15](https://github.com/kadirahq/babel-plugin-react-docgen/pull/15)

### v1.3.1
21-October-2016

Update the `react-docgen` NPM module to the latest as they [fixed](https://github.com/reactjs/react-docgen/issues/131) the bug related to default values.

### v1.3.0
20-October-2016

* Use docgen version 2.11.0. [PR11](https://github.com/kadirahq/babel-plugin-react-docgen/pull/11)
* Rename DOC_GEN_GLOBAL to DOC_GEN_COLLECTION_NAME. [PR12](https://github.com/kadirahq/babel-plugin-react-docgen/pull/12)
* Update the README. [PR13](https://github.com/kadirahq/babel-plugin-react-docgen/pull/13)

### v1.1.0
20-October-2016

Initial public release.

### v1.2.0
20-October-2016

* Stateless component support
* Global object with all the component docs
* `__docgenInfo` is now an actual object insted of a JSON string
