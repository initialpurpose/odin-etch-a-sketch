const container = document.querySelector('.canvas-container');

// Create a column of square boxes
for (let i = 0; i < 16; i++) {
    const column = document.createElement('div');
    container.appendChild(column);

    // Add boxes to columns
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.classList.add('grid');

        // Add to column
        column.appendChild(div);
    }
}

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