const words = ["IM SORRY LOVE", "I LOVE YOU IVYY<3"];
const container = document.getElementById('falling-words');

function createWord() {
    const word = document.createElement('div');
    word.classList.add('word');
    word.textContent = words[Math.floor(Math.random() * words.length)];
    
    word.style.left = Math.random() * 100 + 'vw';
    word.style.animationDuration = (Math.random() * 5 + 5) + 's';
    
    container.appendChild(word);
    
    word.addEventListener('animationend', () => {
        word.remove();
        createWord();
    });
}

for (let i = 0; i < 20; i++) {
    createWord();
}
