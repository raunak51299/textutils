import "./App.css";
import About from "./components/About";
import NavBar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      handleAlert("Dark mode turned on", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      handleAlert("Light mode turned on", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  const [alert, setAlert] = useState(null);
  const handleAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  return (
    <>
      <BrowserRouter>
        <NavBar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm title="Enter text below" mode={mode} handleAlert={handleAlert} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
