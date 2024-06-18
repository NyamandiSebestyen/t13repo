const fifa = require('./Fifa_JS_tomb');
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://T13Sebi:Luffy10k@cluster0.yvqeyts.mongodb.net/";

async function ObjektumTombBeillesztes() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");

        const collection = db.collection("Fifa");

        const muveletek = await collection.insertMany(FifaObjektumTomb);
        console.log("Dokumentumok feltöltése sikeres", muveletek.insertedCount, "adat feltöltésre került!");
        client.close();
    }

    catch (err) {
        console.error("Hiba történt csatlakozás vagy beszúrás közben:", err);
    }
}

function ObjektumTombGenerator(tomb) {
    let objektumTomb = [];
    for (let i = 0; i < tomb.length; i++) {
        let ujtomb = tomb[i].split(";");

        let ujObjektum = {
            csapat: ujtomb[0],
            helyezes: Number(ujtomb[1]),
            valtozas: Number(ujtomb[2]),
            pontszam: Number(ujtomb[3])
        }
        objektumTomb.push(ujObjektum)
    }
    return objektumTomb;
}

const FifaObjektumTomb = ObjektumTombGenerator(fifa);


ObjektumTombBeillesztes();