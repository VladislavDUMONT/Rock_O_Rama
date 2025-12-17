document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("icoSite"); // bouton du thème
  const favicon = document.getElementById("favicon"); // si tu as un favicon

  // Liste des images à basculer
  const themeImages = [
    document.getElementById("icoSite"),
    ...document.querySelectorAll(".lien"),
    ...document.querySelectorAll(".like"),
    document.getElementById("ancreImg"),
    document.getElementById("logoUni")
  ].filter(Boolean); // supprime les null si certains IDs n'existent pas

  // Fonction pour appliquer le bon src selon le thème
  const applyThemeImages = (theme) => {
    themeImages.forEach(img => {
      const baseSrc = img.dataset.baseSrc || img.src;
      img.dataset.baseSrc = baseSrc; // mémorise l'image de base
      img.src = theme === "dark"
        ? baseSrc.replace(/(\.\w+)$/, "-dark$1")
        : baseSrc;
    });

    // favicon (optionnel)
    if(favicon){
      const baseFavicon = favicon.dataset.baseSrc || favicon.href;
      favicon.dataset.baseSrc = baseFavicon;
      favicon.href = theme === "dark"
        ? baseFavicon.replace(/(\.\w+)$/, "-dark$1")
        : baseFavicon;
    }
  };

  // Charger le thème sauvegardé
  const savedTheme = localStorage.getItem("theme") || "light";
  root.setAttribute("data-theme", savedTheme);
  applyThemeImages(savedTheme);

  // Switch thème au clic
  themeToggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    applyThemeImages(next);
  });
});
