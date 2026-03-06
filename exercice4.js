const PAIRES = [[0 , ""] , [0 , "0"] , [0 , false] , ["" , false] , [null , undefined] , [null , false] , [NaN , NaN] , [1 , "1"] , ["\t\n" , 0]];
let count = 0;
for (let i = 0; i < PAIRES.length; i++) {
    let valeur1 = PAIRES[i][0];
    let valeur2 = PAIRES[i][1];

    let a = String(JSON.stringify(valeur1));
    let b = String(JSON.stringify(valeur2));

    console.log(a, "==", b.padEnd(15), "->", valeur1 == valeur2 ? "true" : "false", "|", a, "===", b.padEnd(15), "->", valeur1 === valeur2 ? "true" : "false");
    if (valeur1 == valeur2 && valeur1 !== valeur2) {
        count++;
    }
}

console.log("-------------------------------------");
console.log(count , "paire(s) où == et === donnent des résultats différents");
 
