// Sélecteurs
const container = document.getElementById("socialscontainer");
const socialsli = document.querySelectorAll("li");

// Délégation d'évènements
socialsli.forEach((li) => {
  li.addEventListener("click", (e) => {
    const target = e.currentTarget;
    const active = document.querySelector("li.active");

    if (active) {
      active.classList.remove("active");
    }

    if (target !== active) {
      target.classList.add("active");
      const couleur = window.getComputedStyle(target).backgroundColor;
      container.style.backgroundColor = couleur;
    } else {
      container.style.backgroundColor = "rgb(204, 204, 204)";
    }
  });
});
