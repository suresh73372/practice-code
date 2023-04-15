import { useState } from "react"

const App = () =>{
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  });
  const {name,email,password} = data;

  const handler = (e) =>{
    setData({...data, [e.target.name]:[e.target.value]})
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(e.target.value);

  }
 return(
  <>
 <h2>login form</h2>
 <div style={{ backgroundColor:"lightgrey", textAlign:"center", width:"500px", height:"200px", borderRadius:"25px"}}>
 <form>
  
   <input type="text"  placeholder="ENTER NAME" name="name" value={name} onChange={handler} /><br/><br/>

   <input type="email" placeholder="ENTER EMAIL" name="email" value={email} onChange={handler} /><br/><br/>
  
   <input type="password" placeholder=" ENTER PASSWORD" name="password" value={password} onChange={handler} /><br/><br/>

    {/* <input type="submit" value="submit" name="add"/> */}
 </form>
 </div>
  </>
 )
}
export default App;