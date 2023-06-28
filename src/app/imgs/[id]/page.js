import {redirect} from 'next/navigation'

export default async function page({params}) {
  const {url} = process.env
  const img = url.replace('sagiri', params.id)
  redirect(img)
}