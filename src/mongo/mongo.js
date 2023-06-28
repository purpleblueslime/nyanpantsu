import {MongoClient} from 'mongodb'

const {mongo} = process.env

const mong = new MongoClient(mongo)
mong.connect(error => 
  console.error(error))

export default mong.db('sagiri')