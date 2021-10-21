import React from 'react'
import './App.css';
import Form from './components/Form/Form'

function App() {
  return (
    <div className="App">
      <nav id="nav-bar">
        Registration Form
      </nav>
      <section className="header">
        <Form></Form>
      </section>
    </div>
  );
}

export default App;
