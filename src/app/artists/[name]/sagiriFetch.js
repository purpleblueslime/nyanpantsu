import mongo from 'nyan/mongo/mongo.js'

export default async function sagiriFetch(name, page) {

  const pp = 18 // hard numba of eros pp (per page) uwO
  const data = await mongo.collection('eros').find({artists: name}).sort({'uploadedAt.gf': -1}).skip(pp*page).limit(pp).toArray()
  if (!data || !data.length) {
    return {error: 'pffff~ theres nothing here >o<'}
  }
  return {data: data}
  
}