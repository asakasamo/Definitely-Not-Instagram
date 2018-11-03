import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

// import the root reducer
import rootReducer from "./reducers/index";

// import the dummy data
import comments from "./data/comments";
import posts from "./data/posts";

// create an object for the default data
const defaultState = {
   posts,
   comments
};

// enable detection by Redux devtools
const enhancers = compose(
   window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

// create the store
const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// enable hot reloading in Webpack
if (module.hot) {
   module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers/index").default;
      store.replaceReducer(nextRootReducer);
   });
}

export default store;
