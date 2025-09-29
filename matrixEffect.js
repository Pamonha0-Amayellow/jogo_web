// --- LÓGICA DO EFEITO MATRIX ---
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / fontSize);
    drops = new Array(columns).fill(0);
});

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()_+=-';
const fontSize = 24;
let columns = Math.floor(width / fontSize);
let drops = new Array(columns).fill(0);

// Define a cor verde neon do Matrix
const matrixColor = 'red'; // Usando o verde neon do seu tema

function drawMatrix() {
    // Fundo semitransparente para o rastro
    ctx.fillStyle = 'rgba(26, 26, 26, 0.05)'; 
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = matrixColor;
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        // Pega um caractere aleatório
        const text = letters[Math.floor(Math.random() * letters.length)];
        
        // Desenha o caractere na coluna (i * fontSize) e linha (drops[i] * fontSize)
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Se o caractere cair abaixo da tela (ou randomicamente), reinicia o drop
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Incrementa a posição y do próximo caractere na coluna
        drops[i]++;
    }
}

// Inicia a animação (loop)
setInterval(drawMatrix, 45);