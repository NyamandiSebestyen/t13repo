var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://T13Sebi:Luffy10k@cluster0.yvqeyts.mongodb.net/";

async function ujKollekcio() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");

        await db.createCollection("Fifa");
        console.log("A Fifa kollekció(tábla) a T13 adatbázisban létrejött!");

        client.close();
    }

    catch (err) {
        console.error("Hiba történt csatlakozás vagy beszúrás közben:", err);
    }
}

ujKollekcio();