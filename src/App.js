
import React, {useState} from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');  //wheather the dark mode or light mode is enable

  const toggleMode = () => {
    if(mode ==='light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#08121c';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
    <Navbar title= "TextUtils" aboutus= "About TextUtils" mode={mode} toggleMode={toggleMode}/>

    <div className="container my-3">
    <TextForm heading= "Enter The Text To Analyze" mode={mode} />
    {/* <About/> */}
    </div>

    </>
  );
}

export default App;
