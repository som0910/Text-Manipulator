import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Darkmode from './components/About';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState({
    message: null,
    type: null
  })

  function showAlert(msg, tp) {
    setAlert({
      message: msg,
      type: tp
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  function toggleMode() {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled", "success")
      document.title = "TextUtils - Light Mode"
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#011222'
      showAlert("Dark Mode Enabled", "success")
      document.title = "TextUtils - Dark Mode"
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <Textform heading="Enter text to analyze : " mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>

      {/* <About /> */}
    </>
  );
}

export default App;
