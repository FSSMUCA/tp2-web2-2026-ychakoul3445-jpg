let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

//1)
let sousTotal = prix * quantite ;
console.log("Sous-total : " , sousTotal.toFixed(2) );

//2)
let reduction = (!codePromo && estMembre)?sousTotal * ( reductionPourcentage/100):0;
console.log("Réduction : " , reduction.toFixed(3), "MAD");

//3)
let totalFinal = sousTotal - reduction;

//4)
let statut = (soldeCompte >= totalFinal)?"Paiement accepté":"Solde insuffisant";
console.log("Statut : " , statut);

//5)
let nouveauSolde = ("Paiement accepté")? soldeCompte - totalFinal :0
console.log("Solde : " , nouveauSolde.toFixed(3) , "MAD");

//6)
console.log("===== RÉCAPITULATIF =====");
console.log("Produit   :", nomProduit);
console.log("Quantité  :", quantite);
console.log("Prix unit.:", prix.toFixed(2), "MAD");
console.log("Sous-total:", sousTotal.toFixed(3), "MAD");
console.log("Réduction :", reduction.toFixed(3), "MAD");
console.log("Total     :", totalFinal.toFixed(3), "MAD");
console.log("Statut    :", statut);
console.log("Solde     :" , nouveauSolde.toFixed(3) ,"MAD");
console.log("==========================");
