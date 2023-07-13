import Link from 'next/link'
import Img from 'nyan/components/img.js'
import styles from 'nyan/styles/ero.module.scss'

export default function component({sagiri}) {

  return (
    <Link className={styles.eroWrap} href={`/eros/${sagiri.aId}`}>
      <Img className={styles.img} img={sagiri.img} />
      <div className={styles.en}>
        {sagiri.en}
      </div>
    </Link>
  )

}