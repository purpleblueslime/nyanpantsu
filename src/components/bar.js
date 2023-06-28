'use client'

import {useRouter} from 'next/navigation'
import Link from 'next/link'
import styles from 'nyan/styles/bar.module.scss'

export default function component() {

  const {push} = useRouter()

  return (
    <div id={styles.barWrap}>
      <Link className={styles.barImgWrap}
        href={'/'}>
          <img alt={'pantsu >w< img'} className={styles.barImg} src='https://files.catbox.moe/aok43e.png' />
      </Link>
      <div className={styles.boxWrap}>
        <input className={styles.box} defaultValue={'metamorphosis'}
          onKeyUp={o => o.keyCode == 13 ? push(`/search?query=${o.target.value}`):(o)} 
        />
        <img alt={'pantsu img'} className={styles.boxImg} src='https://files.catbox.moe/pl27tc.png' />
      </div>
    </div>
  )

}