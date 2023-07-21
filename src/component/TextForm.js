import React ,{useState} from 'react'

export default function TextForm(props) {
 const [text, setText]= useState('Enter your text here');
 const handleclick=()=>{
    console.log("hello");
    let newText=text.toUpperCase();
    setText(newText);
 }
 const handleonchange=(event)=>{
console.log("onchange");
 setText(event.target.value);

 }
  return (
    <div>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleonchange} id="mytext" rows="12"></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleclick}>Covert Into Capital Letters</button>

  </div>
  )
}
