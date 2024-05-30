import Link from 'next/link'
import Img from 'nyan/components/img.js'
import styles from 'nyan/styles/sauce.module.scss'

export default function component({color, sagiri, sauce}) {

  return (
    <div className={styles.sauce}>
      <Img className={styles.img} color={color} img={sagiri.img} />
      <div className={styles.about}>
        <Link className={styles.name} href={`/${sauce}/${sagiri.name}`}
          style={{color: color}}>
            {sagiri.name}
        </Link>
        <div className={styles.eros}>
          {sagiri.eros} eros
        </div>
      </div>
    </div>
  )

}