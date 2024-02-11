import { useState } from 'react';

const Form = () => {
  const [fname, setfname] = useState("");
  const [emailid, setemailid] = useState("");
  const [phone, setphone]= useState("");
  const [msg, setmsg]= useState("");
  
  const handleSubmit = (e:any) => {
    e.preventDefault();
    setfname("")
    setemailid("")
    setphone("")
    setmsg("")

    alert("Submitted ✅")
  };
  
  const fnamechangehandle = (e:any) => {
    setfname(e.target.value);
  };
  
  const emailidchangehandle =(e:any)=>{
    setemailid(e.target.value);
  };
  
  const phonechangehandle =(e:any)=>{
    setphone(e.target.value);
  };
  
  const msgchangehandle =(e:any)=>{
    setmsg(e.target.value);
  };
  
  return (
    <div>
      <form className="messageForm" onSubmit={handleSubmit}>
        <div className="inputGroup halfWidth">
          <input type="text" name=" " required value={fname} onChange={fnamechangehandle}/>
          <label>Your Name</label>
        </div>
        <div className="inputGroup halfWidth">
          <input type="email" name=" "  value={emailid} onChange={emailidchangehandle}/>
          <label>Email</label>
        </div>
        <div className="inputGroup fullWidth">
          <input type="text" name=" "  required value={phone} onChange={phonechangehandle}/>
          <label>Phone No</label>
        </div>
        <div className="inputGroup fullWidth">
          <textarea defaultValue={""} value={msg} onChange={msgchangehandle}/>
          <label>Say Something</label>
        </div>
        <div className="inputGroup fullWidth">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default Form;


