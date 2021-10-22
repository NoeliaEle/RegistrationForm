import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Form from './components/Form/Form'
import React from 'react'
import SuccessPage from './components/SuccessPage/SuccessPage'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav id="nav-bar">
          Registration Form
      </nav>
        <section className="header">
          <Switch>
            <Route exact path="/">
              <Form />
            </Route>
            <Route path="/success">
              <SuccessPage />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
