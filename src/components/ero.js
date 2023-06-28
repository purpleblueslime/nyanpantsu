import Link from 'next/link'
import styles from 'nyan/styles/ero.module.scss'

export default function component({sagiri}) {

  return (
    <Link className={styles.eroWrap} href={`/eros/${sagiri.aId}`}>
      <img alt={'img'} className={styles.img} loading={'lazy'} src={`/imgs/${sagiri.img}`} />
      <div className={styles.en}>
        {sagiri.en}
      </div>
    </Link>
  )

}