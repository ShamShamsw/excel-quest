/* Excel Quest — script.js
   Category filter functionality for the challenge grid */

(function () {
  'use strict';

  const filterButtons = document.querySelectorAll('.filter-btn');
  const challengeCards = document.querySelectorAll('.challenge-card');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filter = btn.getAttribute('data-filter');

      // Update active button state
      filterButtons.forEach(function (b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');

      // Show/hide cards based on category
      challengeCards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
})();
