import React,{useState} from "react";


const App = () =>{
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitter = (e) =>{
   e.preventDefault();
  }

  return(
    <>
    <center>
    <form onSubmit={handleSubmitter}>
      <div>
        <input type="text" placeholder="ENTER YOUR NAME" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
      <div>
        <input type="email" placeholder="ENTER YOUR EMAIL" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </div>
      <div>
        <input type="password" placeholder="ENTER YOUR PASSWORD" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <button>submit</button>
    </form>
    </center>
    </>

  )
}
export default App











.apply..........................................................

import React,{useState} from "react";


const App = () =>{
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ChangeName = (e) =>{
    setName(e.target.value);
  };

  const ChangeEmail = (e) =>{
    setEmail(e.target.value);
  };

  const ChangePassword = (e) =>{
    setPassword(e.target.value);
  };

  const handleSubmitter = (e) =>{
   e.preventDefault();
  }

  return(
    <>
    <center>
    <form onSubmit={handleSubmitter}>
      <div>
        <input type="text" placeholder="ENTER YOUR NAME" name="name" value={name} onChange={ChangeName} />
      </div>
      <div>
        <input type="email" placeholder="ENTER YOUR EMAIL" name="email" value={email}  onChange={ChangeEmail}/>
      </div>
      <div>
        <input type="password" placeholder="ENTER YOUR PASSWORD" name="password" value={password}  onChange={ChangePassword}/>
      </div>
      <button>submit</button>
    </form>
    </center>
    </>

  )
}
export default App