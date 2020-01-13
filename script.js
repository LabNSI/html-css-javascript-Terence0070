function init () {
  document.getElementById("terminale").onsubmit = resultat;

  var sReq = window.location.search.substring(1);
  console.log("sRec = 1"+ sReq);

  if(sReq != "")
  {
      const good = "NUMERIQUE_SC_INFORM";
      var aReq = sReq.split("&");
      var mess = "sReq";
      var aVar = [];
      for (var i=0;i<aReq.length;i++) {
        aVar[i] = aReq[i].split(":");
        console.log("aVar["+i+"][0] = "+aVar[i][0]+"   "+"aVar["+i+"][1] = "+aVar[i][1]);
      }
      mess = valeur_du_prenom + " de " + valeur_du_nom + " de " + valeur_de_classe + " : ";

      if(aVar[3][0] == good || aVar[4][0] == good)
      {
        mess += "Bon choix !";
      }
      else {
        mess += "Mauvais choix !";
      }
	  console.log (mess);
      document.getElementById('resultat').innerHTML = mess;
  }
}
/**Cette fonction permet de montrer si le résultat est correct "Tu fais le bon choix !" si on choisit NUMERIQUE SC.INFORM ou incorrect dans le cas contraire "Es-tu sur de ton choix ?!" Dans cette même fonction, elle affiche avant de dire si c'est incorrect ou non le nom, le prénom et la classe.  */
function resultat() {
  var f = document.forms["terminale"];
  var message = "Compléter les champs :";

  if(f.elements["prenom"].value == "")  {
    message += "\n- Prénom";
  }

  if(f.elements["nom"].value == "")  {
    message += "\n- Nom";
  }

 if(!f.elements[2].checked && !f.elements[3].checked && !f.elements[4].checked){
    message += "\n- Classe";
  }

  var cpt = 0;
  for (var i=5; i < 12; i++)  {
    if(f.elements[i].checked){
      cpt++;
    }
  }

  if(cpt!=2){
    message += "\n- Deux spécialités";
  }

  if(message != "Compléter les champs :"){
    alert(message);
    return 0;
  }

  message = f.elements["nom"].value + " " + f.elements["prenom"].value + " de " + f.elements["classe"].value
            

  if(f.elements["NUMERIQUE_SC_INFORM"].checked){
    message += "\nTu fais le bon choix !";
  }
  else {
    message += "\nEs-tu sur de ton choix ?!";
  }

  alert(message);
}

window.onload = init;

