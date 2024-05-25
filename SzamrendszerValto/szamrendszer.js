function barmibolTizesbe(szam, szamRendszer) {
    var szamTomb = szam.split("");
    if (szamTomb.length == 0) {
        return -1;
    }
    ;
    var szumma = 0;
    for (var i = 0; i < szamTomb.length; i++) {
        if (isNaN(Number(szamTomb[i]))) {
            szamTomb[i] = betuSzamok[szamTomb[i].toLowerCase()];
        }
        if (Number(szamTomb[i]) > szamRendszer - 1 || szamTomb[i] == undefined) {
            return -1;
        }
        szumma += Number(szamTomb[i]) * (Math.pow(szamRendszer, (szamTomb.length - 1 - i)));
    }
    return szumma;
}
function tizbolBarmibe(bemenetiSzam, szamRendszerbe) {
    if (bemenetiSzam == -1) {
        return "-1";
    }
    var eredmenySzam = "";
    while (bemenetiSzam > 0) {
        if (bemenetiSzam % szamRendszerbe < 10) {
            eredmenySzam += (bemenetiSzam % szamRendszerbe).toString();
        }
        else {
            eredmenySzam += szamBetuk[bemenetiSzam % szamRendszerbe];
        }
        bemenetiSzam = Math.floor(bemenetiSzam / szamRendszerbe);
    }
    return eredmenySzam.split("").reverse().join("");
}
function BarmibolBarmibeValto(adottErtek, bemenetiSzamRendszer, kimenetiSzamRendszer) {
    return tizbolBarmibe(barmibolTizesbe(adottErtek, bemenetiSzamRendszer), kimenetiSzamRendszer);
}
function futtato() {
    var bemenetiMezo = document.querySelector("#bemenetiSzam");
    var bemenetiErtek = bemenetiMezo.value;
    var bemenetiSzamR = document.querySelector("#bemenetiSzamrendszer");
    var bemenetiSzamRErtek = parseInt(bemenetiSzamR.value);
    var kimenetiSzamR = document.querySelector("#kimenetiSzamrendszer");
    var kimenetiSzamRErtek = parseInt(kimenetiSzamR.value);
    var eredmeny = document.querySelector("#eredmeny");
    (BarmibolBarmibeValto(bemenetiErtek, bemenetiSzamRErtek, kimenetiSzamRErtek) == "-1") ? eredmeny.innerHTML = "Rossz bemenet!" : eredmeny.innerHTML = "".concat(bemenetiErtek.toUpperCase(), "<sub>").concat(bemenetiSzamRErtek, "</sub> = ").concat(BarmibolBarmibeValto(bemenetiErtek, bemenetiSzamRErtek, kimenetiSzamRErtek).toUpperCase(), "<sub>").concat(kimenetiSzamRErtek, "</sub>");
    eredmeny.style.border = "4px solid black";
}
var betuSzamok = {
    a: "10",
    b: "11",
    c: "12",
    d: "13",
    e: "14",
    f: "15"
};
var szamBetuk = {
    10: "a",
    11: "b",
    12: "c",
    13: "d",
    14: "e",
    15: "f"
};
var gomb = document.querySelector("#valtoGomb");
gomb.addEventListener("click", futtato);
