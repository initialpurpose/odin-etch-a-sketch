const container = document.querySelector('.canvas-container');

function createGrid(size) {
    container.innerHTML = '';
    container.style.setProperty('--grid-size', size);

    const total = size * size;

    for (let i = 0; i < total; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        container.appendChild(div);
    }
}

// Create default grid layout
createGrid(16);

// Hover effect
container.addEventListener('mouseover', (event) => {
    const box = event.target;

    // Check that it is actually the box and not gaps between
    if (!box.classList.contains('grid')) return;

    // Check that it hasn't already been added
    if (!box.classList.contains('active-box')) {
        box.classList.add('active-box');
    }
});