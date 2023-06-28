import {notFound} from 'next/navigation'
import Link from 'next/link'
import sagiriFetch from './sagiriFetch.js'
import Component from './component.js'
import Artist from 'nyan/components/artist.js'
import styles from 'nyan/styles/eros.module.scss'

export default async function page({params}) {

  const {data} = await sagiriFetch(params.aId) // fetch sagiri data Uwu
  if (!data) notFound() // not found >o<

  return (
    <div id={'sagiri'}>
      <div className={styles.bannerWrap}>
        <img alt={'banner img'} className={styles.bannerImg} src={`/imgs/${data.bannerImg || data.img}`} />
        <div className={styles.bannerBlur} />
      </div>
      <div className={styles.eroWrap}>
        <div className={styles.ero}>
          <div className={styles.aboutWrap}>
            <div className={styles.imgWrap}>
              <img alt={'img'} className={styles.img} src={`/imgs/${data.img}`} />
            </div>
            <div className={styles.about}>
              <div className={styles.en}>
                {data.en}
              </div>
              <div className={styles.jp}>
                {data.jp}
              </div>
              <div className={styles.tags}>
                {data.tags.map((tag) => 
                  <Link className={styles.tag} href={`/tags/${tag}`} key={tag} 
                    style={{background: data.color}}>
                      {tag}
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className={styles.gfWrap}>
            <div className={styles.gf}>
              {data.uploadedAt.date}
            </div>
            <div className={styles.hawt}>
              {data.hawt} 💦
            </div>
          </div>
        </div>
      </div>
      <div className={'sagiriWrap'}>
        <Link className={'sagiri'} href={'/'} style={{color: data.color}}>
          ~
        </Link>
        / eros / 
        <Link className={'sagiri'} href={`/eros/${data.aId}`} style={{color: data.color}}>
          {data.en}
        </Link>
      </div>
      <div className={styles.def}>
        artists ({data.artists.length})
      </div>
      <div className={styles.artists}>
        {data.artists.map((sagiri, key) => <Artist sagiri={sagiri} color={data.color} key={key} />)}
      </div>
      <div className={styles.def}>
        imgs ({data.imgs.length})
      </div>
      <Component sagiri={data} />
    </div>
  )
  
}