## About

Blank React.js project setup with Webpack, Babel (ES6) and SCSS.

## Quick start

Install all requirements by running `npm install`. Before you run the command make sure you have Node.js > 4.5 installed.
After installation run `npm run watch` to start watching the project (run in in dev mode). To create a minified (uglify) version of the code run `npm run build`. It will minify the JavaScript bundle and reduce it's size substantionaly.

Webpack & webpack dev server are installed locally and are started when the commands above are run.

## Tests

React boiler is setup to run tests with [Mocha](https://mochajs.org/) and [Enzyme](http://airbnb.io/enzyme/). 
Useful read: [Testing React Components with Enzyme and Mocha](https://semaphoreci.com/community/tutorials/testing-react-components-with-enzyme-and-mocha)

## Styles

Add your styles in each component folder and include them in your component like so:

```javascript
import './Home.scss';
```

*Please note: Boilerplate is still work in progress.*