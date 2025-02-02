import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtil - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'warning');
      document.title = 'TextUtil - Light Mode';
    }

  }
  return (
    <>
      <Router>
        <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>

            <Route exact path="/about" element={<About mode={mode} />} ></Route>

            <Route exact path="/" element={<Form showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} ></Route>

          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;