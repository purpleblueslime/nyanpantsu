'use client'

import useLocalStorage from 'use-local-storage'

export default function component({use}) {

  // storagey
  const [strip, $strip] = useLocalStorage('~')
  if (strip != use) $strip(use) // if not strip (~)

}