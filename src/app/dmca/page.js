import Link from 'next/link'
import styles from 'nyan/styles/about.module.scss'

export default function O() {

  return (
    <div id={'sagiri'}>
      <div className={'sagiriWrap'}>
        <Link className={'sagiri'} href={'/'}>
          ~
        </Link>
        / 
        <Link className={'sagiri'} href={'/tos'}>
          dmca
        </Link>
      </div>
      <div className={styles.def}>
        dmca
      </div>
      <div className={styles.sagiri}>
        {`anything/everything on nyan pantsu~ is taken freely from web.
          nyan pantsu~ does not hold any rights to anything at all (imgs) this excludes purplebleslime/nyanpantsu,
          everything is made available under fair use act.
          if you still confidently believe that nyan pantsu~ is using an ip that you hold a copyright to, you can request removal at purpleblueslime@gmail.com!
          and SLIME will take care of it and remove (any/all) content mentioned.
          
          note tho that removal might take a few days (and/or) might not happen at all depending on legitimacy of your request.
          legitimacy literally meaning (a legal copyright doc. that can be verified)!
          
          removal does not mean that (any/all) content removed is never gonna be added again to nyan pantsu~ mod(s) might add it again under fair use. if found freely on web (and/or) on a request from a user. nyan pantsu~ (might or might not) choose to disclose re-addition of removed content. you'll just have to check again and create a new removal request!`}
      </div>
      <div className={styles.def}>
        github/vercel
      </div>
      <div className={styles.sagiri}>
        {`nyanpantsu~ never uploads anything that's dmca(able) to its github repo purpleblueslime/nyanpantsu.
          same thing on vercel!
          dmca(ing) on github (and/or) vercel will just be as useless as aqua.`}
      </div>
    </div>
  )
  
}