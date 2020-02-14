import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IssueList from "./components/IssueList";

import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" render={() => <h1>Hello World</h1>} />
            <Route
              exact
              path="/open-issues"
              render={props => <IssueList {...props} />}
            />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
