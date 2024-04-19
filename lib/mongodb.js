// import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI;

// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// let client;
// let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// if (!process.env.MONGODB_DB) {
//   throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
// }

// if (process.env.NODE_ENV === 'development') {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default async function connectToDatabase() {
//   if (process.env.NODE_ENV === 'development') {
//     await clientPromise;
//     return client.db(process.env.MONGODB_DB);
//   } else {
//     const client = new MongoClient(uri, options);
//     await client.connect();
//     return client.db(process.env.MONGODB_DB);
//   }
// }


import mongoose from "mongoose";

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

global.mongoose = {
  conn: null,
  promise: null,
};

const connectToDatabase = async () => {
  if (global?.mongoose?.conn) {
    console.log("**************** Existing Connection ****************");
    return global.mongoose.conn;
  } else {
    console.log("**************** Creating New Connection ****************");

    // const {  MONGODB_URI } =
    //   process.env;

    // const connString = mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_URI}/${MONGO_DBNAME}?retryWrites=true&w=majority;
 
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    };

    const promise = mongoose
      .connect(`mongodb+srv://admin:root@cluster0.rwgus21.mongodb.net/userdb?retryWrites=true&w=majority`, options)
      .then((mongoose) => mongoose);

    global.mongoose = {
      conn: await promise,
      promise,
    };

    console.log("Connected to db");
    return await promise;
  }
};

export default connectToDatabase;