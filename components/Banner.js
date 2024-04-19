import styles from './../styles/Banner.module.css'

const Banner = (props) => {
  return (
    <div className={styles.container}>
       
         <h1 className={styles.title}><span className={styles.title1}>Coffee Shop</span> <span className={styles.title2 }>Finder</span></h1>
        
        <p className={styles.subTitle}>Find a coffe shop nearby you</p>
        
        <div className={styles.buttonWrapper}>
          <button className={styles.button} onClick={props.handleOnClick}>{props.buttonTitle}</button>
        </div>
    </div>
  )
}

export default Banner