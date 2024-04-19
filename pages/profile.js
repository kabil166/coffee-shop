import styles from '../styles/Profile.module.css'
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar'

const Profile = () => {

  const router = useRouter();
  const logoutUser = () =>{
    sessionStorage.clear();
    console.log("Routing to the login screen")
    router.push('/login')

  }
  return (
    <>
    <Navbar/>
    <div className={styles.profile_container}>
      <button onClick={logoutUser}>
        Logout
      </button>
    </div>
    </>

  )
}

export default Profile