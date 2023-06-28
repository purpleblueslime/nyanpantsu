import Link from 'next/link'
import styles from 'nyan/styles/feets.module.scss'

export default function component({v}) {
  
  return (
    <div id={styles.feets}>
      <div className={styles.imgWrap}>
        <img alt={'pantsu >w< img'} className={styles.img} src={'https://files.catbox.moe/aok43e.png'} />
        <div className={styles.links}>
          <span className={styles.nolink}>
            (c) nyan pantsu~ {v}
          </span>
        </div>
      </div>
      <div className={styles.links}>
        <Link className={styles.link} 
          href={'/dmca'}>
            dmca
        </Link>
        /
        <Link className={styles.link} 
          href={'/tos'}>
            tos
        </Link>
        /
        <Link className={styles.link} 
          href={'https://discord.com/invite/uytxJWFqBR'} target={'_'}>
            discord
        </Link>
        /
        <Link className={styles.link} 
          href={'https://github.com/purpleblueslime/nyanpantsu'} target={'_'}>
            github
        </Link>
      </div>
    </div>
  )

}