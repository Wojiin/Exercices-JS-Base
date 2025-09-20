//Sélecteur
const carre = document.getElementById("carre");
//Index Propriétés
const chCarre = window.getComputedStyle(carre, null);
//Propriétés
const carreBgColor = chCarre.getPropertyValue("background-color");
const carreColor = chCarre.getPropertyValue("color");
const carreHeight = chCarre.getPropertyValue("height");
const carreWidth = chCarre.getPropertyValue("width");
const carreFSize = chCarre.getPropertyValue("font-size");
const carreFFamily = chCarre.getPropertyValue("font-family");
const carreName = carre.id;
//Alerte
carre.addEventListener("click", () => {
  alert(
    `Styles de l'élément ${carreName} :\n` +
      `Background-color: ${carreBgColor}
                                    \n` +
      `Color: ${carreColor}
                                    \n` +
      `Height: ${carreHeight}
                                    \n` +
      `Width: ${carreWidth}
                                    \n` +
      `Font-size: ${carreFSize}
                                    \n` +
      `Font-family: ${carreFFamily}`
  );
});

/* Correction
AU LIEU DE DECLARER LES PROPRIETES ET DE LES REMETTR
// Sélectionne l'élément avec la classe "carre" dans le document HTML
const box = document.querySelector(".carre");

// Récupère les styles CSS appliqués à l'élément sélectionné
const boxCSS = window.getComputedStyle(box);

// Ajoute un écouteur d'événements qui se déclenche lorsque l'utilisateur clique sur l'élément "box"
box.addEventListener('click', function() {
    // Affiche une boîte de dialogue avec les informations sur les styles de l'élément "box"
    alert(
        "Class : " +
        box.className + // Affiche la classe de l'élément "box"
        "\n - Background color : " +
        boxCSS.getPropertyValue("background-color") + // Affiche la couleur de fond de l'élément "box"
        "\n - Color : " +
        boxCSS.getPropertyValue("color") + // Affiche la couleur du texte de l'élément "box"
        "\n - Height : " +
        boxCSS.getPropertyValue("height") + // Affiche la hauteur de l'élément "box"
        "\n - Width : " +
        boxCSS.getPropertyValue("width") + // Affiche la largeur de l'élément "box"
        "\n - Display : " +
        boxCSS.getPropertyValue("display") + // Affiche le style d'affichage de l'élément "box"
        "\n - Font Family : " +
        boxCSS.getPropertyValue("font-family") + // Affiche la police de caractères de l'élément "box"
        "\n - Font Size : " +
        boxCSS.getPropertyValue("font-size") // Affiche la taille de la police de caractères de l'élément "box"
    );
});
*/
