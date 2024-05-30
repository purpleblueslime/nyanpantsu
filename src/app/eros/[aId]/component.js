'use client'

import {useState} from 'react'
import Link from 'next/link'
import useLocalStorage from 'use-local-storage'
import Img from 'nyan/components/img.js'
import styles from 'nyan/styles/read.module.scss'

export default function component({sagiri}) {

  const pp = 12 // 12 == pp
  const [imgs, $imgs] = useState(sagiri.imgs.slice(0, pp)) 
  // storage-y
  const [strip, $strip] = useLocalStorage('~')

  function more() {
    $imgs(sagiri.imgs.slice(0, imgs.length + pp)) 
  }
  
  function all() {
    $imgs(sagiri.imgs) 
  }

  return (
    <div id={'sagiri'}>
      <div className={styles.imgs}>
        {imgs.map((img, i) => 
          <Link href={`/eros/${sagiri.aId}/read${strip ? '/~':''}?page=${i}`} key={i}>
            <Img className={styles.img} color={sagiri.color} img={img} />
          </Link>
        )}
      </div>
      {sagiri.imgs.length == imgs.length ? <></> : 
        <div className={styles.btnsWrap}>
          <div className={styles.btns}>
            <a className={styles.btn} onClick={() => more()} style={{background: sagiri.color}}>
              load more
            </a>
            <a className={styles.btn} onClick={() => all()} style={{background: sagiri.color}}>
              load all
            </a>
          </div>
        </div>
      }
    </div>
  )

}