//숫자키패드 추가

let answer = 0
let playButton = document.getElementById("playButton")
let inputAnswer = document.getElementById("inputAnswer")
let resultArea = document.getElementById("resultArea")
let chance = 5
let chanceArea = document.getElementById("chanceArea")
let gameOver = false
let history = []
let resetButton = document.getElementById("resetButton")

function randomAnswer() {
    answer = Math.floor(Math.random()*100)+1;
    console.log("정답 "+answer)
}

randomAnswer()

//getElementsByClassName으로 정의한 변수에 addEventListener를 줄 경우 몇번째인지 써야함
playButton.addEventListener('click', play)
inputAnswer.addEventListener('focus', function(){
    inputAnswer.value = "";
})
resetButton.addEventListener('click', reset)

function play(){

    let inputValue = inputAnswer.value

    if (inputValue == 0) {
        resultArea.textContent = "숫자를 입력해주세요";
        return;
    }

    if (inputValue<0 || inputValue>100) {
        resultArea.textContent = "1부터 100까지의 숫자를 입력해주세요";
        return;
    }

    if (history.includes(inputValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다";
        return;
    }

    chance--;
    chanceArea.textContent = `기회 ${chance}번!`;

    if(inputValue < answer) {
        resultArea.textContent = "UP!";
    } else if (inputValue > answer) {
        resultArea.textContent = "Down!";
    } else if (inputValue == answer) {
        resultArea.textContent = "정답!";
        gameOver = true;
    }

    history.push(inputValue)

    if(chance<1) {
        gameOver = true;
    }

    if(gameOver == true) {
        playButton.disabled = true;
    }
}

function reset(){
    inputAnswer.value = "";
    randomAnswer()
    
    resultArea.textContent = "정답은?"

    if(chance<5) {
        chance = 5;
        chanceArea.textContent = `기회 ${chance}번!`;
    }
}