import Link from 'next/link'
import Img from 'nyan/components/img.js'
import styles from 'nyan/styles/artist.module.scss'

export default function component({color, sagiri}) {

  return (
    <div className={styles.artist}>
      <Img className={styles.img} color={color} img={sagiri.img} />
      <div className={styles.about}>
        <Link className={styles.name} href={`/artists/${sagiri.name}`}
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