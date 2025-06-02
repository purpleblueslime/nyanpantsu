'use client';

import { useState, useEffect } from 'react';
import styles from 'nyan/styles/img.module.scss';

export default function component({ className, color, height, id, img }) {
  var key;
  if (img.match(/moe\/(.*)\./i)) key = img.match(/moe\/(.*)\./i)[1];
  else key = img;

  const [lazy, $lazy] = useState(true); // lazy ;-;

  // complete stuff owO (if onload don't happen)
  useEffect(() => {
    if (!lazy) $lazy(true);
    const { complete } = app.querySelector(`#💦${key}`);
    if (!complete) return;
    $lazy(false);
  }, [img]);

  return (
    <div className={className} id={id}>
      <div className={styles.imgWrap}>
        <img
          alt="img"
          className={styles.img}
          id={`💦${key}`}
          loading="lazy"
          onLoad={() => $lazy(false)}
          src={img}
        />
        {lazy ? (
          <div className={styles.lazy} style={{ minHeight: height }}>
            <div className={styles.barWrap}>
              <div className={styles.bar} style={{ background: color }} />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
