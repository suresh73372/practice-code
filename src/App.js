import React,{useState} from "react"

const App = () =>{
  const [data, setData] = useState(false);

  const changeHandler = () =>{
    setData(!data)
  }
  return(
    <>
    <button onClick={changeHandler}>{data ? "show" : "hide"}</button>
{data && <h3>conditional rendering here</h3>}
    </>
  )
}
export default App