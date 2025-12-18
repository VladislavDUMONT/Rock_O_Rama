// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {
  // Sélection de tous les boutons "like"
  const likeButtons = document.querySelectorAll('.like');

  // Parcours de chaque bouton like
  likeButtons.forEach(button => {
    // Conteneur du bouton (parent)
    const container = button.parentElement;
    // Compteur associé au bouton
    const counter = container.querySelector('.compteur');
    // Identifiant unique du bouton (pour le localStorage)
    const id = button.dataset.id;

    // Récupérer l'état depuis localStorage
    let data = JSON.parse(localStorage.getItem(id)) || { liked: false, count: 0 };

    // Appliquer l'état initial
    if (data.liked) button.classList.add('checked');
    counter.textContent = data.count;

    // Gestion du clic sur le bouton like
    button.addEventListener('click', () => {
      // Si déjà liké, on retire le like
      if (data.liked) {
        data.liked = false;
        data.count--;
        button.classList.remove('checked');
      // Sinon, on ajoute le like
      } else {
        data.liked = true;
        data.count++;
        button.classList.add('checked');
      }

      // Mise à jour de l'affichage du compteur
      counter.textContent = data.count;
      // Sauvegarde des données dans le localStorage
      localStorage.setItem(id, JSON.stringify(data));
    });
  });
});