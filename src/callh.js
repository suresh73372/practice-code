import React from "react";
import { useState } from "react";


const App = () =>{
    const [number,setNumber] = useState(0);

    const logic = (number) =>{
        return number*3
       }
        
   const doubleNumber = logic(number); 

   

    return(
        <div style={{textAlign:"center"}}>
            <input type="number" name="number" value={number}  onChange={(e)=>{setNumber(Number(e.target.value))}}/>
        <h2>change number:{ doubleNumber }</h2>
        <button onClick={()=>{setNumber(number + 1)}}>change here</button>
       </div>
    )
}
export default App;



