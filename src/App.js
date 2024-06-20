import React, { useState } from 'react'

const App = () => {
  const [input,setInput] = useState("");
  const [value,setValue] = useState(0);
  const handler = e => {
    setInput(e.target.value)
  }
  return (
    <div>
      <center>
        <h1 style={{color:'black'}}>Reactulator</h1>
        <input style={{color:'black',background:'lightgray', padding:'15px', margin:'50px'}} type='text' value={input} name='input' onChange={handler}/>
        <br></br>
        <button style={{color:'black',background:'lightgray',padding:'10px', margin:'5px'}} onClick={() => setInput(input+'1')}>1</button>
        <button style={{color:'black',background:'lightgray',padding:'10px', margin:'5px'}} onClick={() => setInput(input+'2')}>2</button>
        <button style={{color:'black',background:'lightgray',padding:'10px', margin:'5px'}} onClick={() => setInput(input+'3')}>3</button><br/>
        <button style={{color:'black',background:'lightgray',padding:'10px', margin:'5px'}} onClick={() => setInput(input+'4')}>4</button>
        <button style={{color:'black',background:'lightgray',padding:'10px', margin:'5px'}} onClick={() => setInput(input+'5')}>5</button>
        <button style={{color:'black',background:'lightgray',padding:'10px', margin:'5px'}} onClick={() => setInput(input+'6')}>6</button><br/>
        <button style={{color:'black',background:'lightgray',padding:'10px', margin:'5px'}} onClick={() => setInput(input+'7')}>7</button>
        <button style={{color:'black',background:'lightgray',padding:'10px', margin:'5px'}} onClick={() => setInput(input+'8')}>8</button>
        <button style={{color:'black',background:'lightgray',padding:'10px', margin:'5px'}} onClick={() => setInput(input+'9')}>9</button><br/>
        <button style={{color:'black',background:'lightgray',padding:'10px', margin:'5px'}} onClick={() => setInput(input+'0')}>0</button>
        <button style={{color:'black',background:'lightgray',padding:'10px', margin:'5px'}} onClick={() => setInput(input+'+')}>+</button>
        <button style={{color:'black',background:'lightgray',padding:'10px', margin:'5px'}} onClick={() => setInput(input+'-')}>-</button><br/>
        <button style={{color:'black',background:'lightgray',padding:'10px', margin:'5px'}} onClick={() => setInput(input+'*')}>*</button>
        <button style={{color:'black',background:'lightgray',padding:'10px', margin:'5px'}} onClick={() => setInput(input+'/')}>/</button>
        <button style={{color:'black',background:'lightgray',padding:'10px', margin:'5px'}} onClick={() => setInput(input+'%')}>%</button><br/>
        <button style={{color:'black',background:'lightgray',padding:'10px', margin:'5px'}} onClick={() => setInput('')}>clear</button>
        <button style={{color:'black',background:'lightgray',padding:'10px', margin:'5px'}} onClick={() => setValue(eval(input))}>Submit</button>
        <h3>Result is : {value}</h3>
        
      </center>
    </div>
  )
}

export default App
