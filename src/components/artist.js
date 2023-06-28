import Link from 'next/link'
import styles from 'nyan/styles/artist.module.scss'

export default function component({sagiri, color}) {

  return (
    <div className={styles.artist}>
      <img alt={'artist img'} className={styles.img} src={`/imgs/${sagiri.img}`} />
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