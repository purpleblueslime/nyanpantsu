import {notFound} from 'next/navigation'
import Link from 'next/link'
import sagiriFetch from '../sagiriFetch.js'
import Component from './component.js'
import Pagify from 'nyan/components/pagify.js'
import Stripify from 'nyan/components/stripify.js'
import styles from 'nyan/styles/read.module.scss'

export default async function page({params, searchParams}) {

  if (!searchParams.page) searchParams.page = 0 // def page numba
  const {data} = await sagiriFetch(params.aId) // fetch sagiri data Uwu
  if (!data) notFound() // not found >o<

  // data(.color) on hover uwO
  const hover = `
    .${styles.navPop}:hover {
      background: ${data.color}
    }
  `

  return (
    <div id={'sagiri'}>
      <div className={'sagiriWrap'}>
        <Link className={'sagiri'} href={'/'} style={{color: data.color}}>
          ~
        </Link>
        / eros / 
        <Link className={'sagiri'} href={`/eros/${data.aId}`} style={{color: data.color}}>
          {data.en}
        </Link>
        /
        <Link className={'sagiri'} href={`/eros/${data.aId}/read`} style={{color: data.color}}>
          read
        </Link>
      </div>
      <div className={styles.def}>
        <div className={styles.readNav}>
          <Link className={styles.navPop} href={`/eros/${data.aId}/read/~`}>
            long strip
          </Link>
          <Link className={styles.navBlue} href={`/eros/${data.aId}/read`} 
            style={{background: data.color}}>
              pages
          </Link>
        </div>
        <style>
          {hover}
        </style>
      </div>
      <Component p={`/eros/${data.aId}/read?`} page={searchParams.page} img={data.imgs[searchParams.page]} imgs={data.imgs} color={data.color} />
      <Pagify p={`/eros/${data.aId}/read?`} page={searchParams.page} data={data} />
      <Stripify use={false} />
    </div>
  )
  
}