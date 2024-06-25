var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://T13Sebi:Luffy10k@cluster0.yvqeyts.mongodb.net/";

async function kollekcioLetrehozas() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        await db.createCollection("Helsinki");
        console.log("A Helsinki kollekció(tábla) a T13 adatbázisban létrejött!");
        client.close();
    }

    catch (err) {
        console.error("Hiba történt a kollekció létrehozásánál:", err);
    }
}

kollekcioLetrehozas();