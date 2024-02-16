// start! 
const play = document.querySelector('.play');
const carrot = document.querySelectorAll('.carrot');
const bug = document.querySelectorAll('.bug');
const counter = document.querySelector('.counter');
const popup = document.querySelector('.popupMessage');
const message = document.querySelector('.message');

play.addEventListener('click', randomXY);
play.addEventListener('click', getTimer);
play.addEventListener('click', () => popup.style.visibility = 'hidden');

// 벌레10개와 당근10개 무작위로 배치
function randomXY() {
    carrot.forEach((element) => {
        element.style.visibility = 'visible',
            element.style.top = `${getRandom(1, 200)}px`,
            element.style.left = `${getRandom(1, 1150)}px`
    }
    );
    bug.forEach((element) => {
        element.style.visibility = 'visible',
            element.style.top = `${getRandom(1, 200)}px`,
            element.style.left = `${getRandom(1, 1150)}px`
    }
    );
};

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

// 타이머
const timer = document.querySelector('.timer')
function getTimer() {
    setTimeout(() => { timer.innerText = '9:00'; }, 1000);
    setTimeout(() => { timer.innerText = '8:00'; }, 2000);
    setTimeout(() => { timer.innerText = '7:00'; }, 3000);
    setTimeout(() => { timer.innerText = '6:00'; }, 4000);
    setTimeout(() => { timer.innerText = '5:00'; }, 5000);
    setTimeout(() => { timer.innerText = '4:00'; }, 6000);
    setTimeout(() => { timer.innerText = '3:00'; }, 7000);
    setTimeout(() => { timer.innerText = '2:00'; }, 8000);
    setTimeout(() => { timer.innerText = '1:00'; }, 9000);
    setTimeout(() => { timer.innerText = '0:00'; }, 10000);
};

// 당근 카운트
carrot.forEach((element) => element.addEventListener('click', vanish));
function vanish(event) {
    event.target.style.visibility = 'hidden';
    let count = Number(counter.textContent);
    count = count - 1;
    counter.textContent = count;
};

// 벌레 클릭시
function catchBug() {
    const beep = new Audio('sound/bug_pull.mp3');
    beep.play();
    lost();
};

// 타이머 0이 되면
if (timer.innerText = '0:00') { lost(); };

function lost() {
    message.textContent = 'YOU LOST !'
    popup.style.visibility = 'visible';
};
bug.forEach((element) => element.addEventListener('click', catchBug));



// you lost! 10초동안 카운트가 0이 되지 않으면 you lost! 사인과 리플레이버튼 표시

// you won! 10초 안에 카운트가 0이되면 you won! 사인과 리플레이버튼 표시