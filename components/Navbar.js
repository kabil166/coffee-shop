import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Navbar = () => { 

  const [userData, setUserdata] = useState();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [username, setUserName]= useState();

  const router = useRouter();
  useEffect(()=>{
    let user = sessionStorage.getItem('user-data')
    if(!user ||user ==='undefined'){
      console.log("Please Login");
      router.push({url:"/login"})
    }else{
      user = JSON.parse(user);
      setUserdata(user);
      setUserLoggedIn(true);
    }
    const username = sessionStorage.getItem('username');
    if(username){
      setUserName(username);
    }
  },[])

  return (
    <nav className={styles.nav_container}>
        <div className={styles.nev_items}>
            {userLoggedIn && 
            <> <Link href={`/`}>
            <p className={styles.nav_item}>HOME</p>
            </Link>
            <Link href='/notes'><p className={styles.nav_item}>Notes</p></Link>
            </>}
            {userData ?
            <Link href={`/profile`} ><p className={styles.nav_item}>{userData.name}</p></Link>
            :<Link href={`/login`}><p className={styles.nav_item}>Login</p></Link>
            }
        </div>
    </nav>
  )
}

export default Navbar