'use client'

import {useEffect} from 'react'

export default function component({page}) {

  useEffect(() => {
    const p = app.querySelector(`#💦${page}`)
    if (!p) return
    p.scrollIntoView({
      behavior: 'smooth', // smoothify scroll
    })
  }, [])

}