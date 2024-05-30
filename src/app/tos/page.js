import Link from 'next/link'
import styles from 'nyan/styles/about.module.scss'

export default function page() {

  return (
    <div id={'sagiri'}>
      <div className={'sagiriWrap'}>
        <Link className={'sagiri'} href={'/'}>
          ~
        </Link>
        / 
        <Link className={'sagiri'} href={'/tos'}>
          tos
        </Link>
      </div>
      <div className={styles.def}>
        tos
      </div>
      <div className={styles.sagiri}>
        {`by using nyanpantsu~ you are agreeing to these tos(es).
          any attempt at breaking or tryna bypass these will result in perma ip ban, 
          also (any/all) tos(es) might update in future.
            
          nyanpantsu~ is completely open source and can back these claim(s) up!`}
      </div>
      <div className={styles.def}>
        use
      </div>
      <div className={styles.sagiri}>
        {`you are allowed to (download/view) (any/all) content on nyanpantsu~ but you are to destroy (any/all) content downloaded from nyanpantsu~ on request from nyanpantsu~\n
          (any/all) nyanpantsu~ api route(s) /api/* are also (included/limmited) (in/to) these tos(es).
          there aren't any hard cap(s) but (any/all) uses that're confirmed to be a violation will result in perma ip ban.`}
      </div>
      <div className={styles.def}>
        copyright
      </div>
      <div className={styles.sagiri}>
        {`any attempt at impersonating nyanpantsu~ will result in a perma ip ban. there are no exceptions!`}
      </div>
      <div className={styles.def}>
        cookie(s)
      </div>
      <div className={styles.sagiri}>
        {`nyanpantsu~ use(s) 0 cookies.`}
      </div>
      <div className={styles.def}>
        ip logging
      </div>
      <div className={styles.sagiri}>
        {`nyanpantsu~ never (shares/saves/logs) your ip or literally anything about you, not even behavioural data (and/or) time spent on nyanpantsu~ (with/in) its (mods/servers/databases).
           only exception to these tos(es) are if you've been perma banned from nyanpantsu~ in those cases nyanpantsu~ (shares/saves/logs) your ip (with/in) its (mods/servers/databases).`}
      </div>
      <div className={styles.def}>
        ad(s)
      </div>
      <div className={styles.sagiri}>
        {`nyanpantsu~ is completely ad free and there're no popup(s) at all.`}
      </div>
    </div>
  )
  
}