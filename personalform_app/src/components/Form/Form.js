import React,{useState} from 'react'
import { Input } from '../Input/Input'
import "./Form.css"

export const Form = () => {
const [name,setName] = useState("");
console.log(name)
function nameHandler(e){
    setName(e.target.value)
}

  return (
    <form>
        <h1>FORM</h1>
        <Input 
        type="text"
        value={name}
        placeholder = "enter your input"
        onChange={nameHandler}
        />
        
        <button>Submit</button>
    </form>
  )
}
