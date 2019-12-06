# Traitement d'un formulaire avec JavaScript

Le but de cet exercice est de compléter les fichiers HTML, CSS et JavaScript pour réaliser une page web contenant un formulaire dont le traitement sera exécuter par un script JavaScript.

- La page HTML contient un formulaire pour :
  - Saisir le prénom
  - Saisir le noms
  - Sélectionner une classe :
    - 1G2
    - 1G3
    - 1G5
  - Sélectionner les deux spécialités  que vous garderez en terminale :
    - ARTS PLASTIQUES
    - LITT. ANGLAIS
    - LITT. ESPAGNOL
    - MATHEMATIQUES
    - NUMERIQUE SC.INFORM
    - PHYSIQUE-CHIMIE
    - SC. ECONO.& SOCIALES
- Un bouton pour soumettre le formulaire
- Un élément `<h1 id="resultat">` qui contiendra le résultat du Traitement

- Le fichier CSS contient les éléments de styles pour la mise en forme du HTML
- Le fichier JavaScript traite le formulaire lors de sa soumission. Il contient :
    - une fonction `init()`, exécutée au chargement de la page. Cette fonction :
    - exécute la fonction `resultat()` lors de la soumission du formulaire
      - modifie l'élément `id="resultat"` comme suit lors du chargement de la page :
      - Si au moins un des deux choix = "NUMERIQUE SC.INFORM" alors afficher "Bon choix !"
      - Sinon afficher "Mauvais choix !"
    - une fonction `resultat()` qui :
      - Vérifie le remplissage correct du formulaire (Nom et Prénom et Classe et 2 spécialités)
      - Affiche une alerte en conséquence
      - Affiche une alerte correspondant au résultat

![](page_web.png)

# Evaluation

Ce travail sera noté :

Tâches complétées | 100% | 90%  | 80%  | 70%  | 60%  | 50%  | 40%  | 30%  | 20%  | 10% | 0 
----------------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |-----|----
`formulaire.html` |      |      |      |      |      |      |      |      |      |     | 
`style.css`       |      |      |      |      |      |      |      |      |      |     |  
`script.js`       |      |      |      |      |      |      |      |      |      |     |  
