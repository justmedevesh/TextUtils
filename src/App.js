
import React, {useState} from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

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
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light has been Enabled", "sucsess");
    }
  }

  return (
    <>
    <Navbar title= "TextUtils" aboutus= "About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert = {showAlert} heading= "Enter The Text To Analyze" mode={mode} />
    {/* <About/> */}
    </div>

    </>
  );
}

export default App;
