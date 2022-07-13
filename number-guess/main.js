//숫자키패드 추가

let answer = 0
let playButton = document.getElementsByClassName("playButton")
let inputAnswer = document.getElementsByClassName("inputAnswer")
let resultArea = document.getElementsByClassName("resultArea")

function randomAnswer() {
    answer = Math.floor(Math.random()*100)+1;
    console.log("정답 "+answer)
}

randomAnswer()

playButton.addEventListener("click", play);

function play(){
    let inputValue = inputAnswer.value

    if(inputValue < answer) {
        resultArea.textContent = "UP!"
    }
}