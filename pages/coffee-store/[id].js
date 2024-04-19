import Link from "next/link";
import { useRouter } from "next/router"
import coffeeStoreData from '../../data/coffee-stores.json'
import Head from "next/head";
import {fetchStores} from '../../lib/stores'
import styles from '../../styles/coffee-store.module.css'

export async function getStaticProps(staticProps){
  const params = staticProps.params
  const stores = coffeeStoreData //await fetchStores();

  return {
    props: {
      coffeeStore : stores.find(el=> {
        return el.id.toString() === params.id //dynamic id
      }),
    },
  };
}

export async function getStaticPaths(){
  const stores = coffeeStoreData//await fetchStores();
  const paths = stores.map(store=>{
    return{
      params:{
        id: store.id.toString()
      }
    }
  })
  return {
    paths: paths,
    fallback: true, // can also be true or 'blocking'
  }
}
const CoffeeStore = (props) => {

  const router = useRouter();

  if(router.isFallback){
    return(<div>Loading...</div>)
  }

  const handleUpVote=()=>{
    
  }
  const {name} = props.coffeeStore
  console.log("props", props);
  return (
    <div>
      <Head><title>{name}</title></Head>
      <p>{name}</p>
    <button onClick={handleUpVote}>UpVote</button>
    </div>
  )

}

export default CoffeeStore