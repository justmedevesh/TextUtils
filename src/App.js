
import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');  //wheather the dark mode or light mode is enable

  const [alert, setAlert] = useState(null); //it show the alrart message to the user

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000
    );
  }

  const toggleMode = () => {
    if(mode ==='light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#08121c';
      showAlert("Dark has been enabled", "success");
      // document.title = 'Textutils - Dark Mode'  it show the mode in search bar
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light has been Enabled", "sucsess");
      // document.title = 'Textutils - Light Mode'
    }
  }

  return (
    <>
    <BrowserRouter>
        <Navbar title= "TextUtils" aboutus= "About TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element = {<About/>}>
          </Route>
          <Route extra path="/" element = { <TextForm showAlert = {showAlert} heading= "Enter The Text To Analyze" mode={mode} />}> 
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
