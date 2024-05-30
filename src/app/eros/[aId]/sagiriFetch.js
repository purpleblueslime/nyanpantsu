import mongo from 'nyan/mongo/mongo.js'

export default async function sagiriFetch(aId) {

  const data = await mongo.collection('eros').findOne({aId: aId})
  if (!data) {
    return {error: 'pffff~ theres nothing here >o<'}
  }

  const hot = await mongo.collection('hots').findOne({'sagiri.aId': data.aId})
  if (!hot) {
    const sagiri = {aId: data.aId, en: data.en, img: data.img, tags: data.tags, artists: data.artists, characs: data.characs, hawt: 0}
    await mongo.collection('hots').insertOne({gf: new Date(), sagiri: sagiri})
  }
  // inc hots by 1 (also using `data.aId` not `aId` cus why not)
  await mongo.collection('hots').updateMany({'sagiri.aId': data.aId}, {$inc: {'sagiri.hawt': 1}}) 
  data.hawt = hot?.sagiri.hawt || 0 // give hawts with data
  
  data.artists = await mongo.collection('artists').find({name: {$in: data.artists}}).toArray()

  // only if (data.characs)
  if (data.characs) data.characs = await mongo.collection('characs').find({name: {$in: data.characs}}).toArray() 

  return {data: data}
  
}