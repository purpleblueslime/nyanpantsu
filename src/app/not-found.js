import Link from 'next/link'
import styles from 'nyan/styles/error.module.scss'

export default function page() {

  return (<>
    <div className={'sagiriWrap'}>
      <Link className={'sagiri'} href={'/'}>
        ~
      </Link>
      / 
      <Link className={'sagiri'} href={'/404'}>
        404
      </Link>
    </div>
    <div className={styles.errWrap}>
      <div className={styles.errBox}>
        <img alt={'img'} className={styles.img} src={'https://files.catbox.moe/43y1m0.png'} />
        <div id={styles.err}>404</div>
      </div>
    </div>
  </>)
  
}