import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamsList from "./streams/StreamsList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

// We don't want to use anchor tags with react router.
//Anchor tags cause a new server request and a dumping of the HTML index file
//all scripts will be re downloaded, executed, and state will be lost.

const App = () => {
  //Switch component prevent router from greedily matching urls. Now it will only select 1 route.
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamsList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
