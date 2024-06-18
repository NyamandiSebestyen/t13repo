const fifa = require('./Fifa_JS_tomb');
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://T13Sebi:Luffy10k@cluster0.yvqeyts.mongodb.net/";

async function legjobbHarom() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");

        const collection = db.collection("Fifa");
        const rendezesBeallitasai = { helyezes: 1 };
        const osszesAdat = await collection.find().sort(rendezesBeallitasai).limit(3).toArray();

        console.log("Szűrt adat: ", osszesAdat);




        client.close();
    }

    catch (err) {
        console.error("Hiba történt csatlakozás vagy rendezés közben:", err);
    }
}




legjobbHarom();