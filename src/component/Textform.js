import React,{useState} from 'react'

export default function Textform(props) {
    const handleClick= ()=>({
            console.log("hello");
    });
const [text, setText] = useState('Enter text here');

  return (
    
    <div>
        <div className="mb-3">
        <h1>{props.heading}</h1>
   
    <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="6"></textarea>
         
  </div>
  <button className="btn btn-primary" onClick={handleClick}>To Uppercase</button>
    </div>
  )
}

