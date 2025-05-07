const palette = document.getElementById('palette');
const generateBtn = document.getElementById('generate');

function getRandomColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
  return `#${hex}`;
}

function generateColors() {
  palette.innerHTML = '';
  for (let i = 0; i < 6; i++) {
    const color = getRandomColor();
    const div = document.createElement('div');
    div.className = 'color-box';
    div.style.backgroundColor = color;
    div.textContent = color;
    div.addEventListener('click', () => {
      navigator.clipboard.writeText(color);
      alert(`Copied ${color} to clipboard!`);
    });
    palette.appendChild(div);
  }
}

generateBtn.addEventListener('click', generateColors);

// Generate initial colors
generateColors();
