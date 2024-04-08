const fontControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');
fontControl.addEventListener('input', () => {
    textSpan.style.fontSize = `${fontControl.value}px`;
});