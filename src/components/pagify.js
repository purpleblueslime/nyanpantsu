import Link from 'next/link'
import styles from 'nyan/styles/pagify.module.scss'

export default function component({p, sagiri, page, data}) {

  // numabify that string
  page = Number(page) 

  return (
    <div className={styles.btnsWrap}>
      <div className={styles.btns}>
        {page <= 0 ? <></>:
          <Link className={styles.btn} href={`${p}page=${page - 1}`}
            style={{background: data?.color}}>
              {'<-'}
          </Link>
        }
        <div className={styles.numba}>
          {page}
        </div>
        {!sagiri || sagiri.length != 18 ? <></>:
          <Link className={styles.btn} href={`${p}page=${page + 1}`}>
            {'->'}
          </Link>
        }
        {!data || data.imgs.length <= page + 1 ? <></>:
          <Link className={styles.btn} href={`${p}page=${page + 1}`}
            style={{background: data.color}}>
              {'->'}
          </Link>
        }
      </div>
    </div>
  )

}