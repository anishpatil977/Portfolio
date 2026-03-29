const pages = Array.from(document.querySelectorAll('.page'));
const pageIndicator = document.getElementById('pageIndicator');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let currentPage = 0;

function updatePage(index) {
    currentPage = (index + pages.length) % pages.length;
    pages.forEach((page, i) => {
        page.classList.toggle('active', i === currentPage);
    });
    pageIndicator.textContent = `${currentPage + 1} / ${pages.length}`;
}

prev.addEventListener('click', () => updatePage(currentPage - 1));
next.addEventListener('click', () => updatePage(currentPage + 1));

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') updatePage(currentPage - 1);
    if (event.key === 'ArrowRight') updatePage(currentPage + 1);
});

// Optional auto-advance every 10s
// setInterval(() => updatePage(currentPage + 1), 10000);
