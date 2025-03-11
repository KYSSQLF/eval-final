let clickCounts = [0, 0];

document.querySelectorAll('.toggle-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const details = btn.previousElementSibling;
        const isVisible = details.style.display === 'block';
        details.style.display = isVisible ? 'none' : 'block';
        btn.textContent = isVisible ? 'Plus d\'informations' : 'Réduire';
    });
});

document.querySelectorAll('.click-count-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        clickCounts[index]++;
        document.getElementById(`clicks-${index + 1}`).textContent = clickCounts[index];
    });
});
