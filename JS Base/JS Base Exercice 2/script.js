//Sélecteurs
const carresul = document.getElementById("carresul");
const carre = document.getElementById("carre");
const code = document.getElementById("code");

//Délégation d'évènements
carresul.addEventListener("click", (e) => {
  if (e.target.classList.contains("couleur")) {
    //Récupération de la couleur
    const couleur = window.getComputedStyle(e.target).backgroundColor;
    //Application de la couleur
    carre.style.backgroundColor = couleur;
    //Affichage rgb
    code.textContent = couleur;
  }
});
