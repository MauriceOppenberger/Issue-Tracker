import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IssueList from "./components/IssueList";
import Loading from "./components/Loading";
import NewIssueForm from "./components/NewIssueForm";

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
            <Route
              path="/closed-issues"
              render={props => {
                return (
                  <div style={{ padding: "0 2rem" }}>
                    <Loading {...props} />
                  </div>
                );
              }}
            />
            <Route path="/create-new-issue" component={NewIssueForm} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
