# Test002-ReduxWebPack





## How to install redux library

```
npm install --save redux
```


## How to install [react-redux](https://github.com/reactjs/react-redux/tree/master/docs)
```
npm i react-redux --save-dev
```

## Fetch to access web services
To fetch the items, we’re going to use the aptly named Fetch API. Fetch makes making requests much easier than the classic XMLHttpRequest and returns a promise of the resolved response (which is important to Thunk). Fetch isn’t available in all browsers, so you’ll need to add it as a dependency to your project with:

```
npm install whatwg-fetch --save
```

## [redux-thunl](https://github.com/gaearon/redux-thunk)
Thunk middleware for Redux
```
npm install redux-thunk --save
```
By default, Redux action creators don’t support asynchronous actions like fetching data, so here’s where we utilise Redux Thunk. Thunk allows you to write action creators that return a function instead of an action.


#Building
```
npm run build creates a production build by default.
```
To create a development build, set the NODE_ENV environment variable to development while running this command.
```
npm run clean will delete built resources.
```

## Inspired by

* [Valentinog](https://www.valentinog.com/blog/react-redux-tutorial-beginners/) - React Redux Tutorial


