function barmibolTizesbe(szam:string,szamRendszer:number):number{
    let szamTomb:string[]=szam.split("");
    if(szamTomb.length == 0){return -1;};
    let szumma:number = 0;
    for(let i:number=0;i<szamTomb.length;i++){
        if(isNaN(Number(szamTomb[i]))){
            szamTomb[i]=betuSzamok[szamTomb[i].toLowerCase()];
        }
        
        if(Number(szamTomb[i])>szamRendszer-1 || szamTomb[i]== undefined ){return -1;}
       szumma+=Number(szamTomb[i])*(szamRendszer**(szamTomb.length-1-i));
        }
    
    return szumma;
}

function tizbolBarmibe(bemenetiSzam:number,szamRendszerbe:number):string{
    if(bemenetiSzam==-1){return "-1";}
    let eredmenySzam:string="";
   while(bemenetiSzam>0){
    if(bemenetiSzam%szamRendszerbe<10){
        eredmenySzam+=(bemenetiSzam%szamRendszerbe).toString();
    }
    else{
        eredmenySzam+=szamBetuk[bemenetiSzam%szamRendszerbe];
    }
    bemenetiSzam = Math.floor(bemenetiSzam / szamRendszerbe);
   }
   return eredmenySzam.split("").reverse().join("");
}

function BarmibolBarmibeValto (adottErtek:string,bemenetiSzamRendszer:number,kimenetiSzamRendszer:number):string{
   return tizbolBarmibe(barmibolTizesbe(adottErtek,bemenetiSzamRendszer),kimenetiSzamRendszer); 
}

function futtato():void{
    let bemenetiMezo:HTMLInputElement = document.querySelector("#bemenetiSzam");
    let bemenetiErtek:string = bemenetiMezo.value;
    let bemenetiSzamR:HTMLSelectElement = document.querySelector("#bemenetiSzamrendszer");
    let bemenetiSzamRErtek:number = parseInt(bemenetiSzamR.value);
    let kimenetiSzamR:HTMLSelectElement = document.querySelector("#kimenetiSzamrendszer");
    let kimenetiSzamRErtek:number = parseInt(kimenetiSzamR.value);
    let eredmeny:HTMLParagraphElement = document.querySelector("#eredmeny");
    (BarmibolBarmibeValto(bemenetiErtek,bemenetiSzamRErtek,kimenetiSzamRErtek)=="-1")?eredmeny.innerHTML="Rossz bemenet!":eredmeny.innerHTML=`${bemenetiErtek.toUpperCase()}<sub>${bemenetiSzamRErtek}</sub> = ${BarmibolBarmibeValto(bemenetiErtek,bemenetiSzamRErtek,kimenetiSzamRErtek).toUpperCase()}<sub>${kimenetiSzamRErtek}</sub>`;
    eredmeny.style.border = "4px solid black";
}


const betuSzamok: {[betuk:string]:string} = {
    a: "10",
    b: "11",
    c: "12",
    d: "13",
    e: "14",
    f: "15"
};

const szamBetuk: {[szamok:number]:string} = {
    10: "a",
    11: "b",
    12: "c",
    13: "d",
    14: "e",
    15: "f"
};

let gomb: HTMLButtonElement = document.querySelector("#valtoGomb");
gomb.addEventListener("click",futtato);

