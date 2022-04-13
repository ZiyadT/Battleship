const draggables = document.querySelectorAll('.draggable')
const boardTiles = document.querySelectorAll('.tile1')
const startBtn = document.querySelector('.start-game')

let playerBoard = [
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
]
let computerBoard = [
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
]

startBtn.addEventListener('click', startGame)

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
})

boardTiles.forEach(function(tile, index){
    tile.addEventListener('dragover', e => {
        e.preventDefault();
        if (document.querySelector('.dragging').classList.contains('carrier') && index < 60){
            for (let i = 0; i < 5; i++){
                boardTiles[index + 10*i].classList.add('hovering')
            }
        }
        else if (document.querySelector('.dragging').classList.contains('battleship') && index < 70){
            for (let i = 0; i < 4; i++){
                boardTiles[index + 10*i].classList.add('hovering')
            }
        }
        else if (document.querySelector('.dragging').classList.contains('submarine') && index < 80){
            for (let i = 0; i < 3; i++){
                boardTiles[index + 10*i].classList.add('hovering')
            }
        }
        else if (document.querySelector('.dragging').classList.contains('cruiser') && index < 80){
            for (let i = 0; i < 3; i++){
                boardTiles[index + 10*i].classList.add('hovering')
            }
        }
        else if (document.querySelector('.dragging').classList.contains('destroyer') && index < 90){
            for (let i = 0; i < 2; i++){
                boardTiles[index + 10*i].classList.add('hovering')
            }
        }
    })
    tile.addEventListener('dragleave', () => {
        if (document.querySelector('.dragging').classList.contains('carrier')){
            for (let i = 0; i < 5; i++){
                boardTiles[index + 10*i].classList.remove('hovering')
            }
        }
        else if (document.querySelector('.dragging').classList.contains('battleship')){
            for (let i = 0; i < 4; i++){
                boardTiles[index + 10*i].classList.remove('hovering')
            }
        }
        else if (document.querySelector('.dragging').classList.contains('submarine')){
            for (let i = 0; i < 3; i++){
                boardTiles[index + 10*i].classList.remove('hovering')
            }
        }
        else if (document.querySelector('.dragging').classList.contains('cruiser')){
            for (let i = 0; i < 3; i++){
                boardTiles[index + 10*i].classList.remove('hovering')
            }
        }
        else if (document.querySelector('.dragging').classList.contains('destroyer')){
            for (let i = 0; i < 2; i++){
                boardTiles[index + 10*i].classList.remove('hovering')
            }
        }
    })
    tile.addEventListener('drop', () =>{
        dragElement = document.querySelector('.dragging')
        if (document.querySelector('.dragging').classList.contains('carrier') && index < 60){
            for (let i = 0; i < 5; i++){
                boardTiles[index + 10*i].classList.add('populated')
                playerBoard[index + 10*i] = 's'
            }
            dragElement.classList.add('placed')
            dragElement.draggable = false
        }
        else if (document.querySelector('.dragging').classList.contains('battleship') && index < 70){
            for (let i = 0; i < 4; i++){
                boardTiles[index + 10*i].classList.add('populated')
                playerBoard[index + 10*i] = 's'
            }
            dragElement.classList.add('placed')
            dragElement.draggable = false
        }
        else if (document.querySelector('.dragging').classList.contains('submarine') && index < 80){
            for (let i = 0; i < 3; i++){
                boardTiles[index + 10*i].classList.add('populated')
                playerBoard[index + 10*i] = 's'
            }
            dragElement.classList.add('placed')
            dragElement.draggable = false
        }
        else if (document.querySelector('.dragging').classList.contains('cruiser') && index < 80){
            for (let i = 0; i < 3; i++){
                boardTiles[index + 10*i].classList.add('populated')
                playerBoard[index + 10*i] = 's'
            }
            dragElement.classList.add('placed')
            dragElement.draggable = false
        }
        else if (document.querySelector('.dragging').classList.contains('destroyer') && index < 90){
            for (let i = 0; i < 2; i++){
                boardTiles[index + 10*i].classList.add('populated')
                playerBoard[index + 10*i] = 's'
            }
            dragElement.classList.add('placed')
            dragElement.draggable = false
        }
    })
})

function checkPlayerBoard(){
    return playerBoard.filter((x) => (x === 's')).length;
}

function startGame(){
    if (checkPlayerBoard() != 17)
        return
    else
        setupOpponentBoard()
}

function setupOpponentBoard(){
    let shipLengths = [5, 4, 3, 3, 2]
    shipLengths.forEach(function(length){
        let randomDirection = Math.round(Math.random())
        let randomStartLoc
        do{
            randomStartLoc = Math.round(Math.random() * 100)
        }while(!checkComputerBoard(randomStartLoc, randomDirection, length))
        
        if (randomDirection == 0){
            for (let i = 0; i < length; i++)
                computerBoard[randomStartLoc + 10*i] = 's'
        }
        else{
            for (let i = 0; i < length; i++)
                computerBoard[randomStartLoc + i] = 's'
        }
    })
}

function checkComputerBoard(start, direction, len){
    if (direction == 0){
        for (let i = 0; i < len; i++){
            if (computerBoard[start + 10*i] == 's')
                return false
        }
        return start < 110-10*len
    }
    else{
        for (let i = 0; i < len; i++){
            if (computerBoard[start + i] == 's')
                return false
        }
        return true
    }

}