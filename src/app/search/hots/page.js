import { redirect } from 'next/navigation';
import Link from 'next/link';
import sagiriFetch from './sagiriFetch.js';
import Ero from 'nyan/components/ero.js';
import Pagify from 'nyan/components/pagify.js';
import styles from 'nyan/styles/eros.module.scss';

export default async function page({ searchParams }) {
  if (!searchParams.page) searchParams.page = 0; // def page numba
  const { data } = await sagiriFetch(searchParams.query, searchParams.page); // fetch sagiri data Uwu
  if (!data) redirect('/404'); // not found >o<

  return (
    <div id='sagiri'>
      <div className='sagiriWrap'>
        <Link className='sagiri' href='/'>
          ~
        </Link>
        / search /
        <Link className='sagiri' href={`/search?query=${searchParams.query}`}>
          {searchParams.query}
        </Link>
        /
        <Link
          className='sagiri'
          href={`/search/hots?query=${searchParams.query}`}
        >
          hots
        </Link>
      </div>
      <div className={styles.def}>eros</div>
      <div className={styles.erosNav}>
        <Link
          className={styles.navPop}
          href={`/search?query=${searchParams.query}`}
        >
          match
        </Link>
        <Link
          className={styles.navPop}
          href={`/search/new?query=${searchParams.query}`}
        >
          new
        </Link>
        <Link
          className={styles.navBlue}
          href={`/search/hots?query=${searchParams.query}`}
        >
          hots
        </Link>
        <Link
          className={styles.navPop}
          href={`/search/a_z?query=${searchParams.query}`}
        >
          a_z
        </Link>
      </div>
      <div className={styles.eros}>
        {data.map(({ sagiri }) => (
          <Ero key={sagiri.aId} sagiri={sagiri} />
        ))}
      </div>
      {searchParams.page <= 0 && data.length != 18 ? (
        <></>
      ) : (
        <Pagify
          p={`/search/hots?query=${searchParams.query}&`}
          sagiri={data}
          page={searchParams.page}
        />
      )}
    </div>
  );
}
