import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IssueList from "./components/IssueList";
import Loading from "./components/Loading";
import NewIssueForm from "./components/NewIssueForm";
import Signup from "./components/authentication/Signup";

import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" render={() => <h1>Hello World</h1>} />
            <Route path="/signup" component={Signup} />
            <Route path="/open-issues" component={IssueList} />
            <Route path="/closed-issues" component={Loading} />
            <Route path="/create-new-issue" component={NewIssueForm} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
