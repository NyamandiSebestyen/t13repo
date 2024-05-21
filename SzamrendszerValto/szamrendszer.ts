function barmibolTizesbe(szam:string,szamRendszer:number):number{
    let szamTomb:string[]=szam.split("");
    let szumma:number = 0;
    for(let i:number=0;i<szamTomb.length;i++){
        if(Number(szamTomb[i])>szamRendszer-1){return -1;}
       szumma+=Number(szamTomb[i])*(szamRendszer**(szamTomb.length-1-i));
    }
    return szumma;
}

function tizbolBarmibe(bemenetiSzam:number,szamRendszerbe:number):string{
    if(bemenetiSzam==-1){return "-1";}
    let eredmenySzam:string="";
   while(bemenetiSzam>0){
    eredmenySzam+=(bemenetiSzam%szamRendszerbe).toString();
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
    (BarmibolBarmibeValto(bemenetiErtek,bemenetiSzamRErtek,kimenetiSzamRErtek)=="-1")?eredmeny.innerHTML="Rossz bemenet!":eredmeny.innerHTML=`${bemenetiErtek}<sub>${bemenetiSzamRErtek}</sub> = ${BarmibolBarmibeValto(bemenetiErtek,bemenetiSzamRErtek,kimenetiSzamRErtek)}<sub>${kimenetiSzamRErtek}</sub>`;
    eredmeny.style.border = "4px solid black";
}

let gomb: HTMLButtonElement = document.querySelector("#valtoGomb");
gomb.addEventListener("click",futtato);

