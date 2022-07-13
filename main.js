

//유저가 번호를 입력 후 go 버튼 클릭

let answer = 0
let playButton = document.getElementById("playButton")
let userInput = document.getElementById("userInput")
let resultArea = document.getElementById("resultArea")
let resetButton = document.getElementById("resetButton")
let chance = 5
let gameOver = false
let chanceArea = document.getElementById("chanceArea")
let history = []


//랜덤번호 지정

function pickRandomNumber(){
    answer = Math.floor(Math.random()*100)+1; 
    //Math.random() 함수는 0~1 숫자가 나옴(1은 미포함)
    //Math.random()*100의 범위는 0~99 / +1을 해서 범위 1~100으로 옮기기
    console.log("정답",answer);
}
pickRandomNumber()

playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);
userInput.addEventListener('focus',function(){
    userInput.value="";
})

function play(){

    let userValue = userInput.value

    if(userValue<1 || userValue>100) {
        resultArea.textContent = "1과 100 사이 숫자를 입력해주세요";
        return;
    }

    if(history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요."
        return;
    }

    chance--;
    chanceArea.textContent = `남은 기회: ${chance}번`
    console.log("chance "+chance)

    if (userValue > answer) {
        resultArea.textContent = "Down!!";
    } else if (userValue < answer) {
        resultArea.textContent = "Up!!";
    } else if (userValue == answer) {
        resultArea.textContent = "정답!!";
        gameOver = true;
    } 

    history.push(userValue)

    if(chance<1) {
        gameOver = true;
    }

    if(gameOver == true) {
        playButton.disabled = true;
    }
}

function reset(){
    userInput.value = "";
    pickRandomNumber();

    resultArea.textContent = "결과는?"
}