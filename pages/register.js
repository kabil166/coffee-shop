import Link from "next/link";
import { useState } from "react"
import styles from '../styles/Login.module.css'
const Register = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let user={
    name,
    email,
    password
  }
  const registerUser = async () =>{

    const response = await fetch('/api/register',{
      method:"POST",
      body: JSON.stringify(user),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await response.json();

    console.log(data);

  }

    return (
      <div className={styles.login_container}>
          <h1>Registration</h1>
          <form className={styles.login_details}>
            
            <label>Name</label>
              <input type="name" placeholder="Name" name="name" onChange={(e)=>setName(e.target.value)}/>
              
              <label>Email</label>
              <input type="email" placeholder="Email Address" name="email" onChange={(e)=>setEmail(e.target.value)} />
              
              <label>Password</label>
              <input type="password" placeholder="Password" name="password" onChange={(e)=>setPassword(e.target.value)} />
              
              <button type="submit" onClick={registerUser}>Register</button>

              <Link href={`/login`}>Login</Link>
          </form>
      </div>
    )
  }
  
  export default Register