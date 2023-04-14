import { useState } from "react"

const App = () =>{

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeUsername = (e) =>{
    setUsername(e.target.value)
  }
  const changeEmail = (e) =>{
    setEmail(e.target.value)
  }
  const changePassword = (e) =>{
    setPassword(e.target.value)
  }

  const handler = (e) =>{
    e.preventDefault();
  }
  
 return(
  <>
  <h3>login form </h3>
  <div className="container-form">
    <form onSubmit={handler}>
      <input type="text" placeholder="ENTER NAME HERE" name="username" value={username} onChange={changeUsername} />
      <input type="email" placeholder="ENTER EMAIL HERE" name="email" value={email} onChange={changeEmail} />
      <input type="password" placeholder="ENTER PASSWORD HERE" name="passwoed" value={password} onChange={changePassword} />
      <input type="submit">submit</input>
    </form>
  </div>
  </>
 )
}
export default App;