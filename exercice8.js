let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

console.log("===== RAPPORT UTILISATEUR =====");

//1)nom
nom = nom.trim();
if (nom === "") 
    nom = "Inconnu";
console.log('nom              : "' + nom + '" (corrigé : espaces supprimés)');

//2)age
age = parseInt(age);
if(isNaN(age)|| age <= 0){
    console.log("age              : valeur invalide");
} else {
    console.log("age              : " + age + " (valide)");
}

//3)email
 
let positionArrobase = email.indexOf("@"); 
let positionPoint = email.indexOf(".");

if(positionArrobase !== -1 && email.indexOf(".",positionArrobase ) !== -1){
    console.log('email            : "' + email + '" (valide)');
}else{
    console.log('email            : "' + email + '" (invalide : pas de point après @)');
}

//4)
let score = parseInt(scoreJeu);
if (isNaN(score)) {
   score = 0;
}
console.log("scoreJeu         : " + score + ' (extrait depuis "' + scoreJeu + '")');

//5)estAdmin
estAdmin = (estAdmin === "true");
console.log("estAdmin         : " + estAdmin + ' (attention : Boolean("false") = true, conversion manuelle requise)');

//6)derniereConnexion
derniereConnexion = derniereConnexion ?? "Jamais connecté";
console.log('derniereConnexion: "' + derniereConnexion + '" (valeur par défaut via ??)')

//7)nombreConnexions
nombreConnexions = parseInt(nombreConnexions);
if(nombreConnexions === 0){
    console.log('nombreConnexions : "Aucune connexion" (0 après conversion)');
} else {
  console.log("nombreConnexions : " + nombreConnexions);
}

console.log("===============================");



