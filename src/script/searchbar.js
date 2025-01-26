const searchBar = document.getElementById('input-searchbar');
const gameContainers = document.querySelectorAll('.div-container-game');

searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();

    gameContainers.forEach(container => {
        const gameName = container.querySelector('p').textContent.toLowerCase();

        if (gameName.includes(query)) {
            container.classList.remove('hidden');
        } else {
            container.classList.add('hidden');
        }
    });
});