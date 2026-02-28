const container = document.querySelector('.canvas-container');
const gridBtn = document.querySelector('.gridBtn');

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

    box.classList.add('active-box');
});

// Grid size button
gridBtn.addEventListener('click', (event) => {
    const input = prompt('What size grid would you like? (default: 16)');
    const size = Number.parseInt(input, 10);

    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert('Size must be less than 100x100');
    }
});