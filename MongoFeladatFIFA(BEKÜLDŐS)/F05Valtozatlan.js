var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://T13Sebi:Luffy10k@cluster0.yvqeyts.mongodb.net/";

async function valtozatlanok() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");

        const collection = db.collection("Fifa");
        const osszesAdat = await collection.find({ valtozas: 0 }, { projection: { _id: 0, csapat: 1 } }).toArray();

        console.log("Szűrt adat: ", osszesAdat);




        client.close();
    }

    catch (err) {
        console.error("Hiba történt csatlakozás vagy rendezés közben:", err);
    }
}




valtozatlanok();