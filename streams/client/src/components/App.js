import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamsList from "./streams/StreamsList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
//562518347229-ksjmcefo6asbscbq76k1lbu0ro18snk0.apps.googleusercontent.com

// We don't want to use anchor tags with react router.
//Anchor tags cause a new server request and a dumping of the HTML index file
//all scripts will be re downloaded, executed, and state will be lost.

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamsList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
