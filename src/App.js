import React from 'react';
import "./styles/styles.scss"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MainMenu from "./MainMenu"

const App = () => (
  <Router>

      <MainMenu />
      <Switch>
      <Route path="/" exact component={ MainMenu } />
      <Route component={() => (
      <div className="ed-grid">
      <h1>ERROR 404</h1>
      </div>)} />
      </Switch>

  </Router>
)

export default App;
