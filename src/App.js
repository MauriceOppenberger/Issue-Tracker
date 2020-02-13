import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" render={() => <h1>Hello World</h1>} />
            <Route exact path="/list" render={() => <h1>Hello List</h1>} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
