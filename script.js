document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.querySelectorAll('.like');

  likeButtons.forEach(button => {
    const container = button.parentElement;
    const counter = container.querySelector('.compteur');
    const id = button.dataset.id;

    // Récupérer l'état depuis localStorage
    let data = JSON.parse(localStorage.getItem(id)) || { liked: false, count: 0 };

    // Appliquer l'état initial
    if (data.liked) button.classList.add('checked');
    counter.textContent = data.count;

    button.addEventListener('click', () => {
      if (data.liked) {
        data.liked = false;
        data.count--;
        button.classList.remove('checked');
      } else {
        data.liked = true;
        data.count++;
        button.classList.add('checked');
      }

      counter.textContent = data.count;
      localStorage.setItem(id, JSON.stringify(data));
    });
  });
});