var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://T13Sebi:Luffy10k@cluster0.yvqeyts.mongodb.net/";

async function tornaUszas() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Helsinki");


        const osszesAdat = await collection.find({
            sportAg: {
                $in: ["torna", "uszas"]
            }
        }, { projection: { _id: 0, sportAg: 1, versenySzam: 1 } }).toArray();
        // magyarul : find({where},{select})
        console.log(osszesAdat);
        client.close();
    }
    catch (err) {
        console.log("Hiba a művelet végrehajtása közben:", err);
    }
}

tornaUszas();