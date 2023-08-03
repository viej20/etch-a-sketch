const container = document.querySelector('#grid');
let squares;
let grid = 600;

//creates grid
function gridSize(squares = 16*16){
    const removeCells = document.getElementsByClassName("cell");
    const removeCellsArray = Array.from(removeCells);
    removeCellsArray.forEach( (div) => {
        div.remove();
    });

    for(let i=0; i < squares; i++){

        const div = document.createElement('div');
        div.classList.add('cell');
        div.style.cssText = `border: black solid 1px; width: ${(grid/(Math.sqrt(squares))) -2}px; height: ${(grid/(Math.sqrt(squares))) -2}px`;
        container.appendChild(div);
    }
    
//creates sketch when hovering
    const allCells = document.getElementsByClassName("cell");
    let allCellsArray = Array.from(allCells);
    let color = 'black';

    allCellsArray.forEach( (div) => {

        div.addEventListener('mouseover', () =>{
            div.style.setProperty('background-color', color); //a better way to set css properties, sets specific css property
        })
    });

//creates clear button function
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', () =>{

        allCellsArray.forEach( (div) => {
            div.style.cssText += 'background-color: #fffa33'; //needs to use += to append the style and not overwrite it with the assignment (=) operator
        })
    });
}
gridSize();

//retrives grid size
const resize = document.querySelector('#size');
resize.addEventListener('click', () => {
   squares = prompt('Please enter grid size', "16");

   //if cancel is pressed or squares is an invalid value
   while( (squares == null) || (squares > 100) || (squares <= 0) || (!isNaN(squares)== false)){
        if (squares == null){
                return gridSize();
            }
        else if( (squares > 100) || (squares <= 0) ){
                squares = prompt('Please enter a non-negative value less than 100', "16");
        }
        else if( (!isNaN(squares)== false) ){
                squares = prompt('Please enter a number', "16");
        }
   }
   gridSize(squares*squares);
});




