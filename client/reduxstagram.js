import React from "react";
import { render } from "react-dom";

// import css
import css from "./styles/style.styl";

// import components
import Main from "./components/Main";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

// import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from "react-router";

// import Redux depenencies
import { Provider } from "react-redux";
import store, { history } from "./store";

const router = (
   <Provider store={store}>
      <Router history={history}>
         <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid} />
            <Route path="/view/:postId" component={Single} />
         </Route>
      </Router>
   </Provider>
);

// main render function
render(router, document.getElementById("root"));
