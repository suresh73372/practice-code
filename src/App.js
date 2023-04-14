import React,{useState} from "react";

const App = () =>{
 const [count,setCount] = useState(0);

 const Increment = () =>{
  setCount((value)=>{
    return value + 1
  })
  setCount((value)=> value + 1)
 }

 const Decrement = () =>{
  setCount((value)=> value - 1)
  setCount((value)=> value - 1)
 }





return(
  <>
  <div style={{textAlign:"center"}}>
<button onClick={Decrement}>-</button>
<span>ORDER:{count}</span>
<button onClick={Increment}>+</button>
</div>
  </>
)


}
export default App




{/* <div style={{textAlign:"center"}}>
<button onClick={()=>{setCount(count - 1)}}>-</button>
<span>ORDER:{count}</span>
<button onClick={()=>{setCount(count + 1)}}>+</button>
</div> */}