import mongo from 'nyan/mongo/mongo.js'

export default async function sagiriFetch(tag, page) {

  const pp = 18 // hard numba of eros pp (per page) uwO
  const data = await mongo.collection('hots').find({'sagiri.tags': tag}).sort({'sagiri.hawt': -1}).skip(pp*page).limit(pp).toArray()
  if (!data || !data.length) {
    return {error: 'pffff~ theres nothing here >o<'}
  }
  return {data: data}
  
}