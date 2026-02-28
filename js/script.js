const container = document.querySelector('.canvas-container');

// Create a column of square boxes
for (let i = 0; i < 16; i++) {
    const column = document.createElement('div');
    container.appendChild(column)

    // Add boxes to columns
    for (let i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.classList.add("grid")

        // Add to column
        column.appendChild(div);
    }
}