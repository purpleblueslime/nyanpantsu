'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import styles from 'nyan/styles/bar.module.scss';

export default function component() {
  const { push } = useRouter();
  const [q, $q] = useState('');

  return (
    <div id={styles.barWrap}>
      <div className={styles.boxWrap}>
        <input
          className={styles.box}
          placeholder="search"
          onKeyUp={(o) =>
            o.keyCode == 13 ? push(`/search?query=${q}`) : $q(o.target.value)
          }
        />
        {q ? (
          <a className={styles.btn} onClick={() => push(`/search?query=${q}`)}>
            {'>'}
          </a>
        ) : (
          <></>
        )}
      </div>
      <Link className={styles.barImgWrap} href="/">
        <img
          alt="pantsu >w< img"
          className={styles.barImg}
          src='/pantsu-ass.png'
        />
      </Link>
    </div>
  );
}
