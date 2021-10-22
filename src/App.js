import React from 'react'
import './App.css';
import Form from './components/Form/Form'
import SuccessPage from './components/SuccessPage/SuccessPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
