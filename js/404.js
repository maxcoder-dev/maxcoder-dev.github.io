const phrases = [
  "Кажется, тут баг",
  "Эта страница ушла в прод и не вернулась",
  "Этой страницы нет.",
  "Ой, страница не найдена"
];

const phraseEl = document.getElementById("phrase");
const text = phrases[Math.floor(Math.random() * phrases.length)];

phraseEl.innerHTML = `<span class="phrase">${text}</span>`;