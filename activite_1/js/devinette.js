/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
let solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
let choice = function(){
    let input = prompt("Introduisez un numéro compris entre 1 et 100, vous avez " + (6-i) + " essai");

    if (input == solution){
        console.log ("Bravo vous avez trouvez le numéro qui est " + solution + "!");
    }
    else if (input > solution){
        console.log ("Le numéro cherché est plus petit");
    }
    else if (input < solution){
        console.log ("Le numéro cherché est plus grand")
    }
}

for (var i = 0; i < 6; i++) {
    choice();
  }