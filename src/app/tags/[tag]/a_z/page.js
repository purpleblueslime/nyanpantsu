import {notFound} from 'next/navigation'
import Link from 'next/link'
import sagiriFetch from './sagiriFetch.js'
import Ero from 'nyan/components/ero.js'
import Pagify from 'nyan/components/pagify.js'
import styles from 'nyan/styles/eros.module.scss'

export default async function page({params, searchParams}) {

  if (!searchParams.page) searchParams.page = 0 // def page numba
  const {data} = await sagiriFetch(params.tag, searchParams.page) // fetch sagiri data Uwu
  if (!data) notFound() // not found >o<
  
  return (
    <div id={'sagiri'}>
      <div className={'sagiriWrap'}>
        <Link className={'sagiri'} href={'/'}>
          ~
        </Link>
        / tags /
        <Link className={'sagiri'} href={`/tags/${params.tag}`}>
          {params.tag}
        </Link> 
        /
        <Link className={'sagiri'} href={`/tags/${params.tag}/a_z`}>
          a_z
        </Link>
      </div>
      <div className={styles.def}>
        eros
      </div>
      <div className={styles.erosNav}>
        <Link className={styles.navPop} href={`/tags/${params.tag}`}>
          new
        </Link>
        <Link className={styles.navPop} href={`/tags/${params.tag}/hots`}>
          hots
        </Link>
        <Link className={styles.navBlue} href={`/tags/${params.tag}/a_z`}>
          a_z
        </Link>
      </div> 
      <div className={styles.eros}>
        {data.map((sagiri) => <Ero key={sagiri.aId} sagiri={sagiri} />)}
      </div>
      {searchParams.page <= 0 && data.length != 18 ? <></>:
        <Pagify p={`/tags/${params.tag}/a_z?`} sagiri={data} page={searchParams.page} />}
    </div>
  )
  
}