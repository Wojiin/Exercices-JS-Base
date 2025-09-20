//Sélecteurs
const carresul = document.getElementById("carresul");
const carre = document.getElementsByClassName("carreli");
//Délégation d'évènements
carresul.addEventListener("click", (e) => {
  if (e.target.classList.contains("carreli")) {
    //ajout de la class=clicked
    if (!e.target.classList.contains("clicked"))
      e.target.classList.add("clicked");
    //Suppression de la class=clicked
    else e.target.classList.remove("clicked");
  }
});
