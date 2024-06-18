var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://T13Sebi:Luffy10k@cluster0.yvqeyts.mongodb.net/";

async function rendezes() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");

        const collection = db.collection("Fifa");
        const rendezesBeallitasai = { pontszam: -1 };
        const osszesAdat = await collection.find({}, { projection: { _id: 0, csapat: 1, helyezes: 1 } }).sort(rendezesBeallitasai).toArray();

        console.log("Szűrt adat: ", osszesAdat);




        client.close();
    }

    catch (err) {
        console.error("Hiba történt csatlakozás vagy rendezés közben:", err);
    }
}




rendezes();