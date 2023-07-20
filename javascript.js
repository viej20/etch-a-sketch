const container = document.querySelector('#grid');
let squares = 16*16;
let grid = 600;

for(let i=0; i < squares; i++){

    const div = document.createElement('div');
    div.style.cssText = `width: ${(grid/(Math.sqrt(squares))) -2}px; height: ${(grid/(Math.sqrt(squares))) -2}px`;
    container.appendChild(div);
}


