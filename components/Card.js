import Image from "next/image"
import Link from "next/link"
import styles from './../styles/Card.module.css'

const Card = (props) => {
  return (
    <Link href={props.href}>
        <div className={styles.cardBody}>
          <h2 className={styles.cardHeader}>{props.cardName}</h2>
          <Image className={styles.cardImage} src={props.imgUrl} width={260} height={160} alt=""/>
        </div>
    </Link>
  )
}

export default Card