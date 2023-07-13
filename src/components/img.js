'use client'

import {useState, useEffect} from 'react'
import styles from 'nyan/styles/img.module.scss'

export default function component({className, color, height, id, img}) {

  const [lazy, $lazy] = useState(true) // lazy ;-;

  // complete stuff owO (if onload don't happen)
  useEffect(() => {
    const {complete} = app.querySelector(`#💦${img}`)
    if (!complete) return
    $lazy(false)
  }, [])

  return (
    <div className={className} id={id}>
      <div className={styles.imgWrap}>
        <img alt={'img'} className={styles.img} id={`💦${img}`} loading={'lazy'} onLoad={() => $lazy(false)} src={`/imgs/${img}`} />
        {lazy ? <div className={styles.lazy} style={{minHeight: height}}>
          <div className={styles.barWrap}>
            <div className={styles.bar} style={{background: color}} />
          </div>
        </div>:<></>}
      </div>
    </div>
  )

}