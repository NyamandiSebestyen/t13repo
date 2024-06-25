var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://T13Sebi:Luffy10k@cluster0.yvqeyts.mongodb.net/";

async function dobogos() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Helsinki");


        const osszesAdat = await collection.find({
            helyezes: {
                $in: [1, 2, 3]
            }
        }, { projection: { _id: 0, versenySzam: 1 } }).toArray();
        console.log(osszesAdat);
        client.close();
    }
    catch (err) {
        console.log("Hiba a művelet végrehajtása közben:", err);
    }
}

dobogos();