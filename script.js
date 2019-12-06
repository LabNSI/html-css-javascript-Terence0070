function init () {
  // La fonction résultat() est exécutée lors de la soumission du formulaire
  // Indiquer le nom du formilaire et l'évenement correspondant à sa soumission
  document.getElementById("nom_du_formulaire")._evenement_soumission = resultat;

  //Récupération des variables et de leurs valeurs dans l'URL :
  // ex : //formulaire.html?prenom=Albert&nom=Dupond&classe=1G2&LITT_ANGLAIS=LITT.+ANGLAIS&NUMERIQUE_SC_INFORM=NUMERIQUE+SC.INFORM
  // sReq =
  var sReq = window.location.search.substring(1);
  // Observer dans la console
  console.log("sRec = "+ sReq);


  // Compléter le test
  // si sReq n'est pas une chaine vide
  if(sReq ______)
  {
      const good = "NUMERIQUE_SC_INFORM";
      // La fonction split découpe une chaine de caractères (string) et retourne un tableau (array)
      // Quel caractère sépare les ensemble variable=valeur ?
      // Utiliser ce caractère pour découper la chaine sReq
      var aReq = sReq.split("__");
      var mess = "";
      // Boucle sur les variables
      var aVar = [];
      for (var i=0;i<aReq.length;i++) {
        // Quel caractère sépare une variable de sa valeur ?
        // Utiliser ce caractère pour découper la chaine aReq[i]
        aVar[i] = aReq[i].split("__");
        // Observer dans la console
        console.log("aVar["+i+"][0] = "+aVar[i][0]+"   "+"aVar["+i+"][1] = "+aVar[i][1]);
      }
      //Construire la chaine suivante en utilisant les valeurs récupérées
      // mess = valeur_du prenom + " " + valeur_du_nom + " " + valeur_de_classe + " : "
      mess = _______ + " " + ______ + " de " + ______ + " : ";

      //Si au moins une des spécialités est = "NUMERIQUE_SC_INFORM"
      // Ajouter à mess "Bon choix !"
      // Sinon ajouter à mess "Mauvais choix !"
      if(aVar[3][0] == good || aVar[4][0] == good)
      {
        mess += ______________;
      }
      else {
        mess += ______________;
      }

      // Ajouter le code HTML mess à l'élément d'ID='resultat'
      document.getElementById('______')._________ = _______;
  }
}

// Analyser le fonctionnement de la fonction resultat()
// et ajouter les commentaires utiles
function resultat() {
  // f est un raccourci qui évite de réécrire document.forms["terminale"]
  var f = document.forms["terminale"];

  // initialisation de la variable message
  var message = "Compléter les champs :";

  // Vérifier si le prénom a été saisie. Si non (chaine vide), ajouter "\n - Prénom" à message
  if(f.elements["prenom"].value == "")  {
    message += "\n- Prénom";
  }

  // ?
  if(f.elements["nom"].value == "")  {
    message += "\n- Nom";
  }

  // ?
  if(!f.elements[2].checked && !f.elements[3].checked && !f.elements[4].checked){
    message += "\n- Classe";
  }

  var cpt = 0;
  // Les éléments du formulaire 5 à 11 sont les cases à cocher du choix de spécialités
  // ?
  for (var i=5; i < 12; i++)  {
    if(f.elements[i].checked){
      cpt++;
    }
  }

  // ?
  if(cpt!=2){
    message += "\n- Deux spécialités";
  }

  // ?
  if(message != "Compléter les champs :"){
    alert(message);
    // Mettre fin à lexécution de la fonction
    return 0;
  }

  // Préparer le message à afficher
  message = f.elements["prenom"].value + " " +
            f.elements["nom"].value + " de " +
            f.elements["classe"].value;

  // ?
  if(f.elements["NUMERIQUE_SC_INFORM"].checked){
    message += "\nTu fais le bon choix !";
  }
  else {
    message += "\nEs-tu sur de ton choix ? !";
  }

  alert(message);
}

// Exécuert init() au chargement de la page
window.onload = init;
