import {notFound} from 'next/navigation'
import Link from 'next/link'
import sagiriFetch from './sagiriFetch.js'
import Ero from 'nyan/components/ero.js'
import Pagify from 'nyan/components/pagify.js'
import styles from 'nyan/styles/eros.module.scss'

export default async function page({searchParams}) {

  if (!searchParams.page) searchParams.page = 0 // def page numba
  const {data} = await sagiriFetch(searchParams.page) // fetch sagiri data Uwu
  if (!data) notFound() // not found >o<

  return (
    <div id={'sagiri'}>
      <div className={'sagiriWrap'}>
        <Link className={'sagiri'} href={'/'}>
          ~
        </Link>
        / eros /
        <Link className={'sagiri'} href={'/eros/hots'}>
          hots
        </Link>
      </div>
      <div className={styles.def}>
        eros
      </div>
      <div className={styles.erosNav}>
        <Link className={styles.navPop} href={'/'}>
          new
        </Link>
        <Link className={styles.navBlue} href={'/eros/hots'}>
          hots
        </Link>
        <Link className={styles.navPop} href={'/eros/a_z'}>
          a_z
        </Link>
      </div> 
      <div className={styles.eros}>
        {data.map(({sagiri}) => <Ero key={sagiri.aId} sagiri={sagiri} />)}
      </div>
      {searchParams.page <= 0 && data.length != 18 ? <></>:
        <Pagify p={'/eros/hots?'} sagiri={data} page={searchParams.page} />}
    </div>
  )
  
}