import {notFound} from 'next/navigation'
import Link from 'next/link'
import sagiriFetch from './sagiriFetch.js'
import Ero from 'nyan/components/ero.js'
import Pagify from 'nyan/components/pagify.js'
import styles from 'nyan/styles/eros.module.scss'

export default async function page({params, searchParams}) {

  if (!searchParams.page) searchParams.page = 0 // def page numba
  const {data} = await sagiriFetch(params.name, searchParams.page) // fetch sagiri data Uwu
  if (!data) notFound() // not found >o<

  return (
    <div id={'sagiri'}>
      <div className={'sagiriWrap'}>
        <Link className={'sagiri'} href={'/'}>
          ~
        </Link>
        / characs /
        <Link className={'sagiri'} href={`/characs/${params.name}`}>
          {params.name}
        </Link>
      </div>
      <div className={styles.def}>
        eros
      </div>
      <div className={styles.erosNav}>
        <Link className={styles.navBlue} href={`/characs/${params.name}`}>
          new
        </Link>
        <Link className={styles.navPop} href={`/characs/${params.name}/hots`}>
          hots
        </Link>
        <Link className={styles.navPop} href={`/characs/${params.name}/a_z`}>
          a_z
        </Link>
      </div> 
      <div className={styles.eros}>
        {data.map((sagiri) => <Ero key={sagiri.aId} sagiri={sagiri} />)}
      </div>
      {searchParams.page <= 0 && data.length != 18 ? <></>:
        <Pagify p={`/characs/${params.name}?`} sagiri={data} page={searchParams.page} />}
    </div>
  )
  
}