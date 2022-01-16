const typeWriter = document.getElementById('typewriter-text');
const text = 'I am a web developer';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);

