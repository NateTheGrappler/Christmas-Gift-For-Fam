const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalSparkleLayer = document.querySelector('.modal-sparkle-layer');

// ------------------------------------
// Open modal
// ------------------------------------
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.add('flip');
    setTimeout(() => card.classList.remove('flip'), 600);

    modalTitle.textContent = card.dataset.title;
    modalText.innerHTML = card.dataset.text;  // ⭐ MULTIPLE IMAGES NOW WORK

    modal.classList.remove('hidden');
    startModalSparkles();
  });
});

// Close X button
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  stopModalSparkles();
});

// Click outside closes modal
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.add('hidden');
    stopModalSparkles();
  }
});

// ------------------------------------
// Falling sparkles inside modal
// ------------------------------------
let sparkleInterval;

function startModalSparkles() {
  sparkleInterval = setInterval(() => {
    const sp = document.createElement('div');
    sp.classList.add('sparkle');
    sp.textContent = '✦';

    sp.style.left = Math.random() * 100 + '%';
    sp.style.fontSize = (Math.random() * 10 + 8) + 'px';
    sp.style.animationDuration = (Math.random() * 2 + 2) + 's';

    modalSparkleLayer.appendChild(sp);
    setTimeout(() => sp.remove(), 4000);
  }, 150);
}

function stopModalSparkles() {
  clearInterval(sparkleInterval);
  modalSparkleLayer.innerHTML = "";
}

// ------------------------------------
// Snowfall outside
// ------------------------------------
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '✦';
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
  snowflake.style.animationDuration = Math.random() * 3 + 4 + 's';
  document.body.appendChild(snowflake);

  setTimeout(() => snowflake.remove(), 7000);
}

setInterval(createSnowflake, 200);
