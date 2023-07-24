import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar.js';
import TextForm from './component/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

 const[mode, setMode]=useState('light');
//  const[alert, setAlert]=useState(null);
const[alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
   setAlert({
    message:message,
    type:type
   })
   setTimeout(()=>{
    setAlert(null);
   },1500);
}

 const toMode=()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor="#212529";
    document.body.style.color="white";
    showAlert("Dark mode is enabled","success");
    document.title="TextUtil-Dark Mode";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
    showAlert("Light mode is enabled","success");
    document.title="TextUtil-Light Mode";
    
    
  }

 }
 
  return (
 <>
  <Router>
 <Navbar title="TextUtility" AboutText="About Text" mode={mode} toggle={toMode}  /> 
 <Alert alert={alert} /> 
 <div className="container my-3">
 
 <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
  {/* <TextForm  showAlert={showAlert} heading="Enter the text to analyze"  mode={mode}/>   
 <About /> */}

 </div>
</Router>
 </>

  );
}

export default App;
