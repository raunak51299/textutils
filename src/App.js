import "./App.css";
import About from "./components/About";
import NavBar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";

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
      <NavBar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm title="Enter text below" mode={mode}  handleAlert={handleAlert}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
