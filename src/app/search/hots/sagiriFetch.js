import mongo from 'nyan/mongo/mongo.js'

export default async function sagiriFetch(query, page) {

  const pp = 18 // hard numba of eros pp (per page) uwO
  const data = await mongo.collection('eros').find({$text: {$search: query}}).skip(pp*query.page).limit(pp).toArray()
  if (!data || !data.length) {
    return {error: 'pffff~ theres nothing here >o<'}
  }

  const aIds = []
  data.forEach(({aId}) => aIds.push(aId))

  const hawts = await mongo.collection('hots').find({'sagiri.aId': {$in: aIds}}).sort({'sagiri.hawt': -1}).toArray()
  if (!hawts || !hawts.length) {
    return {error: 'pffff~ theres nothing here >o<'}
  }
  
  return {data: hawts}
  
}

