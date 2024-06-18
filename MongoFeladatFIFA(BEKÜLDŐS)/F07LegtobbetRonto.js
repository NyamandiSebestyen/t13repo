var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://T13Sebi:Luffy10k@cluster0.yvqeyts.mongodb.net/";

async function LegtobbetRonto() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");

        const collection = db.collection("Fifa");
        const valtozasok = await collection.find({}, { projection: { _id: 0, valtozas: 1 } }).toArray();

        let minValtozas = minimum(valtozasok);

        const legrosszabbCsapat = await collection.find({ valtozas: minValtozas }, { projection: { _id: 0, csapat: 1, valtozas: 1 } }).toArray();
        console.log("Szűrt adat: ", legrosszabbCsapat);

        /*
        ezt is megtaláltam de még nem tanultuk uh nem csak kommentbe ide rakom :)
      
       const minValtozas = await collection.aggregate([
           {
               $group: {
                   _id: null,
                   minValtozas: { $min: "$valtozas" }
               }
           }
       ]).toArray();
       */


        client.close();
    }

    catch (err) {
        console.error("Hiba történt csatlakozás vagy rendezés közben:", err);
    }
}

function minimum(valtozasTomb) {
    let min = valtozasTomb[0].valtozas;
    for (let i = 0; i < valtozasTomb.length; i++) {
        if (min > valtozasTomb[i].valtozas) {
            min = valtozasTomb[i].valtozas;
        }
    }
    return min;
}


LegtobbetRonto();