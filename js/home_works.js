// GMAIL BLOCK

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^[a-z0-9.]+@gmail.com$/

gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'Error'
        gmailResult.style.color = 'red'
    }
}



// MOVE BLOCK

const childBlock = document.querySelector(".child_block");
const parentBlock = document.querySelector(".parent_block");
const maxWight = parentBlock.offsetWidth - childBlock.offsetWidth
const maxHeight = parentBlock.offsetHeight - childBlock.offsetHeight;


let positionX = 0;
let positionY = 0;
let direction = 1;

const moveBlock = () => {
    if(direction === 1) {
        if(positionX < maxWight) {
            childBlock.style.left = `${positionX}px`
            positionX++
        }else {
            direction = 2
        }
    }else if(direction === 2) {
        if(positionY < maxHeight) {
            childBlock.style.top = `${positionY}px`
            positionY++
        }else {
            direction = 3
        }
    }else if(direction === 3) {
        if(positionX > 0) {
            childBlock.style.left = `${positionX}px`
            positionX--
        }else {
            direction = 4
        }
    }else if(direction === 4) {
        if(positionY > 0) {
            childBlock.style.top = `${positionY}px`
            positionY--
        }else {
            direction = 1
        }
    }

    requestAnimationFrame(moveBlock)

}
moveBlock()

const seconds = document.querySelector("#seconds")
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")


let value = 0
let interval;
let isRunning = false;

const startTimer = () => {
    if(!isRunning) {
        interval = setInterval(() => {
            value++
            seconds.innerHTML = value
        },1000)

    }
    isRunning = true
}
const stopTimer = () => {
    clearInterval(interval)
    isRunning = false
}
const resetTimer = () => {
    clearInterval(interval)
    isRunning = false
    seconds.innerHTML = 0;
}

start.onclick = () => startTimer()
stop.onclick = () => stopTimer()
reset.onclick = () => resetTimer()






