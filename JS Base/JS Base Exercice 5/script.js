//********************  SÉLECTEURS  *************************************************
const container = document.querySelector("#quotescontainer");
const quoteCell = document.querySelector(".quotecellmodele");

//**********  CONVERSION DE L'OBJET QUOTES EN ÉLÉMENTS DU DOM  ***********************

Object.entries(quotes).forEach(([auteur, citation]) => {
  const newCell = quoteCell.cloneNode(true);
  newCell.classList.add("quotecell");

  // Élément "Ajouter aux favoris"
  const favorisEl = document.createElement("p");
  favorisEl.classList.add("favoris");
  favorisEl.textContent = "☆ Ajouter aux favoris";

  // Élément auteur
  const auteurEl = document.createElement("p");
  auteurEl.classList.add("auteur");
  auteurEl.textContent = auteur;

  // Élément citation
  const citationEl = document.createElement("p");
  citationEl.classList.add("citation");
  citationEl.textContent = citation;

  // Ajout des éléments dans la cellule
  newCell.appendChild(favorisEl);
  newCell.appendChild(auteurEl);
  newCell.appendChild(citationEl);
  container.appendChild(newCell);

  // Supprime la classe modèle
  newCell.classList.remove("quotecellmodele");
});

//************************ GESTION DES FAVORIS  **************************************
// Sélectionne tous les boutons "favoris" et leur attribut un ID
document.querySelectorAll(".favoris").forEach((pf, index) => {
  const favId = "fav" + index;

  //**********  RESTAURATION DE L'ÉTAT AU RECHARGEMENT  ******************************
  if (localStorage.getItem(favId)) {
    pf.classList.add("active"); // Active l'état visuel
    pf.id = favId; // Conserve l’identifiant pour la persistance
  }

  //**********  GESTION DU CLIC SUR LE BOUTON FAVORI  *******************************
  pf.addEventListener("click", (ef) => {
    const target = ef.currentTarget;

    // Désactivation d’un favori actif
    if (target.classList.contains("active")) {
      target.classList.remove("active");
      target.removeAttribute("id");
      localStorage.removeItem(favId);
    }
    // Activation d’un favori inactif
    else {
      target.classList.add("active");
      target.id = favId;
      localStorage.setItem(favId, "true");
    }
  });
});

