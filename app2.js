
const texts = ["splyachyj", "sleeping", "inactive", "silent", "unseen"];
let currentIndex = 0;

function changeText() {
    document.getElementById("changingText").textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length; 
}


const texts2 = ["shadow", "unknown", "unseen", "hidden", "dark"];
let currentIndex2 = 0;

function changeText2() {
    document.getElementById("changingText2").textContent = texts2[currentIndex2];
    currentIndex2 = (currentIndex2 + 1) % texts2.length; // Перехід до наступного елемента в масиві
}


if (document.getElementById("changingText")) {
    setInterval(changeText, 1000); 
}

if (document.getElementById("changingText2")) {
    setInterval(changeText2, 1000); // Зміна тексту для другого елемента
} 
