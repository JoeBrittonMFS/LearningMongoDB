// const {MongoClient} = require('mongodb');
const mongoose = require("mongoose");
require('dotenv').config();


const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.log(error)
    }
}

connection();

// THe code you would need if you don't use mongoose.
// const client = new MongoClient(URI);
// const connection = async () => {
//     try {
//         const client = new MongoClient(URI, { useUnifiedTopology: true }) // The object we passed in as the 2nd argument gets rid of the error (node:5988)
//         await client.connect()
//         console.log('successfully connected to MongoDB')
//         const db = client.db('people')
//         const collection = db.collection('emails')
//         await collection.insertOne({email: "ben@email.com"});
//         const response = await collection.find({}).toArray();
//         console.log(response);

//         client.close();
//     } catch (error) {
//         console.log(error)
//     }
// }