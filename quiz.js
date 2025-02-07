document.getElementById("trueBtn").addEventListener("click", function() {
    playSound("correct");
    showCoins();
    showExplanation(true);
    showSoundIcon(true);
});

document.getElementById("falseBtn").addEventListener("click", function() {
    playSound("wrong");
    showExplanation(false);
    showSoundIcon(false);
});

function playSound(type) {
    if (type === "correct") {
        document.getElementById("correctSound").play();
    } else {
        document.getElementById("wrongSound").play();
    }
}

function showCoins() {
    let button = document.getElementById("trueBtn");
    let rect = button.getBoundingClientRect(); 
    let container = document.body; 

    for (let i = 0; i < 5; i++) { 
        let coin = document.createElement("div");
        coin.classList.add("coin");

        coin.style.setProperty('--x', Math.random()); 
        coin.style.setProperty('--y', Math.random());

        coin.style.left = `${rect.left + rect.width / 2}px`;
        coin.style.top = `${rect.top}px`;

        container.appendChild(coin);

        setTimeout(() => {
            coin.remove();
        }, 3000);
    }
}


function showExplanation(isCorrect) {
    let explanation = document.getElementById("explanation");
    if (isCorrect) {
        explanation.style.display = "block"; 
    } else {
        explanation.style.display = "none"; 
    }
}

function showSoundIcon(isCorrect) {
    let soundIcon = document.getElementById("soundIcon");
    if (isCorrect) {
        soundIcon.style.display = "inline"; 
        soundIcon.style.opacity = 0;
        setTimeout(() => { soundIcon.style.opacity = 1; }, 100);
        setTimeout(() => { soundIcon.style.display = "none"; }, 1000);
    } else {
        soundIcon.style.display = "none"; 
    }
}
