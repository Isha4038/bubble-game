var boxCnt = document.querySelector(".main");
var hitCnt = document.querySelector(".hit");
var score = document.querySelector(".score");
var time = document.querySelector(".time");
var timer = 60;
var totalscore = 0;
var hit = 0; // 7
time.innerHTML=timer

function generatebox() {
  var box = ``;
  for (let i = 0; i < 60; i++) {
    var boxes = Math.floor(Math.random() * 10);
    box += `<div class="box">${boxes}</div>`;
  }
  boxCnt.innerHTML = box;
}
generatebox();
boxCnt.addEventListener("click", function (event) {
  if (hit == event.target.innerHTML) {
    totalscore++;
    updateScore();
    generatebox();
    setRandom();
  }
});
function updateScore() {
  score.innerHTML = totalscore;
}

function setRandom() {
  var random_number = Math.floor(Math.random() * 10); // Generates a random number
  // random_number = 7
  hit = random_number;
  hitCnt.innerHTML = random_number;
}
setRandom();



 var interval= setInterval(() => {
  --timer
  time.innerHTML=timer
  if(timer==0){
boxCnt.innerHTML=`<div class="end-game">
       <label>GAME OVER 😁😁!!!!!</label>
       <label>score: ${totalscore}</label>
       </div>`
    clearInterval(interval)
  }
}, 1000);
