document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.image').forEach(img => {
    const width = img.dataset.width;
    if (width) {
      img.style.width = width + '%'; // ou width + '%' pour les pourcentages
    }
  });
});