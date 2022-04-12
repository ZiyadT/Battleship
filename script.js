const draggables = document.querySelectorAll('.draggable')
const shipBoard = document.querySelectorAll('.tile1')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
})

shipBoard.forEach(tile => {
    tile.addEventListener('dragover', () => {
        draggable = document.querySelector('.dragging')
        tile.appendChild(draggable)
    })
})