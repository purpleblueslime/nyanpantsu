import mongo from 'nyan/mongo/mongo.js'

export default async function sagiriFetch(query, page) {

  const pp = 18 // hard numba of eros pp (per page) uwO
  const data = await mongo.collection('eros').find({$text: {$search: query}}).sort({en: 1}).skip(pp*page).limit(pp).toArray()
  if (!data || !data.length) {
    return {error: 'pffff~ theres nothing here >o<'}
  }
  return {data: data}
  
}