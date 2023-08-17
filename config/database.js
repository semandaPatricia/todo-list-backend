const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const conn =await mongoose.connect(process.env.DB_STRING);
    console.log (`Database connect ${conn.connection.host} `);
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB