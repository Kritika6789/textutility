import React ,{useState} from 'react'

export default function TextForm(props) {
 const [text, setText]= useState('Enter your text here');
 const handleclick=()=>{
    console.log("hello");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","success");
 }
 
 const handleloclick=()=>{
    console.log("hello");
    let newText=text.toLowerCase();
    setText(newText);
     props.showAlert("Converted to Lower Case","success");

 }
 const handlecoclick=()=>{
 var text=document.getElementById("mytext");
   text.select();
   navigator.clipboard.writeText(text.value);
  // setText(newText);
   props.showAlert("Text is copied","danger");
}
 
 const handleclclick=()=>{
    console.log("hello");
    let newText=" "
    setText(newText);
    props.showAlert("Text is cleared","success");
    
 }
 const handleonchange=(event)=>{
console.log("onchange");
 setText(event.target.value);
 }
  return (
    <>
    <div className='container'>
    <h1 >{props.heading}</h1>
    <h4>Maximum Character 10000 is allowed! </h4>
  <div className="mb-3">
    
    <textarea className="form-control" style={{backgroundColor:props.mode==='dark' ? 'white' : '#212529', color:props.mode==='dark' ? 'black' : 'white'}} value={text} onChange={handleonchange} id="mytext" rows="12" maxLength={10000} ></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleclick}>Covert Into Capital Letters</button>
  <button className="btn btn-primary mx-1" onClick={handleloclick}>Covert Into Lower Letters</button>
  <button className="btn btn-primary mx-1" onClick={handleclclick}>Clear Text</button>
  <button className="btn btn-primary mx-1" onClick={handlecoclick}>Copy Text</button>
  
  </div>
  <div className="container my-3" >
    <h1>Your Text Summary</h1>
     <p> {text.split(" ").length} words and {text.length} characters </p>
     <p>{0.008 * text.split(" ").length}Minutes Read</p>
     <h2>Preview</h2>
     <p >{text.length>0?text:"Enter something in textbox to preview"}</p>
  </div>
  </>
  )
}
