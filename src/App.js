import React,{useState} from "react"

const App = () =>{

  let obj = {
    name:"suresh",
    age:"26",
    status:"good",
    nature:"i cant say one word about ur mentality"
  }
  const [data, setData] = useState(obj);

  
  return(
    <>
    <h1>my age:{data.name}</h1>
     <h2>my age:{data.age}</h2>
     <button onClick={()=>{
setData({
  ...data,
  age:"25"
})
     }}>change my age here</button>
    </>
  )
}
export default App