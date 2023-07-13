import Link from 'next/link'
import Img from 'nyan/components/img.js'
import styles from 'nyan/styles/read.module.scss'

export default function component({p, page, img, imgs, color}) {

  page = Number(page)   // numabify that string 

  return (
    <div className={styles.bigImgWrap}>
      <Img className={styles.bigImg} color={color} height={'90vh'} img={img} />
      <div className={styles.lovespots}>
        <Link className={styles.lovespot} 
          href={page >> 0 ? `${p}page=${page - 1}` : `${p}page=0` /* to page == 0 */}>
        </Link>
        <Link className={styles.lovespot}
          href={page + 1 != imgs.length ? `${p}page=${page + 1}` : `${p}page=${page}` /* to page == page */}>
        </Link>
      </div>
    </div>
  )

}