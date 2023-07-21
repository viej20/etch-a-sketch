const container = document.querySelector('#grid');
let squares = 15*15;
let grid = 600;



for(let i=0; i < squares; i++){

    const div = document.createElement('div');
    div.classList.add('cell');
    div.style.cssText = `border: black solid 1px; width: ${(grid/(Math.sqrt(squares))) -2}px; height: ${(grid/(Math.sqrt(squares))) -2}px`;
    container.appendChild(div);
}

const allCells = document.getElementsByClassName("cell");
let allCellsArray = Array.from(allCells);

allCellsArray.forEach( (div) => {

    div.addEventListener('mouseover', () =>{
        div.style.setProperty('background-color', 'black'); //a better way to set css properties
    })
});

const clear = document.querySelector('button');
clear.addEventListener('click', () =>{

    allCellsArray.forEach( (div) => {
        div.style.cssText += 'background-color: white'; //needs to use += to append the style and not overwrite it with the assignment (=) operator
    })
});
