function barmibolTizesbe(szam, szamRendszer) {
    var szamTomb = szam.split("");
    var szumma = 0;
    for (var i = 0; i < szamTomb.length; i++) {
        if (Number(szamTomb[i]) > szamRendszer - 1) {
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
        eredmenySzam += (bemenetiSzam % szamRendszerbe).toString();
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
    (BarmibolBarmibeValto(bemenetiErtek, bemenetiSzamRErtek, kimenetiSzamRErtek) == "-1") ? eredmeny.innerHTML = "Rossz bemenet!" : eredmeny.innerHTML = "".concat(bemenetiErtek, "<sub>").concat(bemenetiSzamRErtek, "</sub> = ").concat(BarmibolBarmibeValto(bemenetiErtek, bemenetiSzamRErtek, kimenetiSzamRErtek), "<sub>").concat(kimenetiSzamRErtek, "</sub>");
    eredmeny.style.border = "4px solid black";
}
var gomb = document.querySelector("#valtoGomb");
gomb.addEventListener("click", futtato);
