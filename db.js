const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Conectado ao MongoDB!");
    const db = client.db("sistema_reserva_salas");
    return db;
  } catch (err) {
    console.error(err);
  }
}

module.exports = connectDB;
