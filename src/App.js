import './App.css';
import Navbar from './component/Navbar.js';
import TextForm from './component/TextForm';

function App() {
  return (
 <>
 <Navbar title="TextUtility" AboutText="About Text"/> 
 <div className="container my-3">
 <TextForm  heading="Enter the text to analyze"/>
 </div>

 </>

  );
}

export default App;
