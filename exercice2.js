const VALEURS = [0 , 1 , "" , "0" , null , undefined , NaN , false , [] , {}];

for (let i = 0; i < VALEURS.length; i++) {
    if(VALEURS[i] === ""){
        console.log("(chaine vide)" + " -> " + (VALEURS[i] ? "truthy" : "falsy"));
    }else{
        console.log(String(VALEURS[i]) + " -> " + (VALEURS[i] ? "truthy" : "falsy"));

    }

}