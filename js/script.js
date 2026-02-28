const container = document.querySelector('.container');

// Create a column of square boxes
for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.border = '2px solid black';
    container.appendChild(div);
}