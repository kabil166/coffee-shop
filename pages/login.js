import Link from "next/link"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from '../styles/Login.module.css'

const Login = () => {


  const [loggedInUser, setLoggedInUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const router = useRouter();
  let user={
    email,
    password
  }
  const loginUser = async () => {
    console.log("User trying to log in");
    const response = await fetch('/api/login',{
      method:"POST",
      body: JSON.stringify(user),
      headers:{
        'Content-Type':'application/json'
      }
    })

    const data = await response.json();
    const userDeatils = data.result;
    const user_data = userDeatils._doc;
    const token = userDeatils.token;

    sessionStorage.setItem("user-data", JSON.stringify(user_data));
    sessionStorage.setItem("token", JSON.stringify(token));
    sessionStorage.setItem("username",JSON.stringify(user_data.name) )
    router.push('/')

  }

  return (
    <div className={styles.login_container}>
        <h1>Login</h1>
        <div className={styles.login_details}>
            <label>Email</label>
            <input type="email" placeholder="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={()=>loginUser()}>Login</button>
        </div>
        <Link href='/register'><span>New User Account</span></Link>

    </div>
  )
}

export default Login