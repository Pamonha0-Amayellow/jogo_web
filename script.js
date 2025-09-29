// --- DADOS DO JOGO (Reformulado para Respostas Objetivas) ---
const gameData = [
    {
        id: 'scene1',
        type: 'HTML',
        narrative: "O título da página não aparece no navegador. Qual **tag** essencial está faltando no `<head>` para definir o título da aba?",
        code: "<head>\n        <meta charset=\"UTF-8\">\n        Meu Projeto\n    </head>",
        answer: "title",
        nextId: 'scene2'
    },
    {
        id: 'scene2',
        type: 'CSS',
        narrative: "O botão está à esquerda. Qual propriedade CSS, aplicada ao contêiner (`.button-container`), é usada para **centralizar** o conteúdo inline?",
        code: "/* CSS atual */\n.button-container {\n    /* Propriedade faltando aqui */\n    : center;\n}\n\n<div class=\"button-container\">\n    <button>Enviar</button>\n</div>",
        answer: "text-align",
        nextId: 'scene3'
    },
    {
        id: 'scene3',
        type: 'JAVASCRIPT',
        narrative: "O botão não reage ao clique. Qual método do JavaScript anexa uma função (`processarDados`) a um evento (clique) do elemento (`botao`)?",
        code: "/* JS atual */\nconst botao = document.getElementById('main-btn');\n\n// Comando faltando aqui\n\nfunction processarDados() { ... }",
        answer: "addEventListener",
        nextId: 'scene4'
    },
    {
        id: 'scene4',
        type: 'HTML',
        narrative: "Qual é a declaração obrigatória que deve ser a primeira linha do seu arquivo HTML para definir a versão?",
        code: "\n<html>",
        answer: "!DOCTYPE html",
        nextId: 'scene5'
    },
    {
        id: 'scene5',
        type: 'HTML',
        narrative: "Qual **tag** HTML é usada para demarcar um **parágrafo** de texto?",
        code: "<body>\n    <...> </p>\n</body>",
        answer: "p",
        nextId: 'scene6'
    },
    {
        id: 'scene6',
        type: 'HTML',
        narrative: "Para adicionar um link que leva o usuário para outra página (ex: Google), qual **tag** você deve usar?",
        code: "href=\"https://google.com\">Ir para o Google</a>",
        answer: "a",
        nextId: 'scene7'
    },
    {
        id: 'scene7',
        type: 'HTML',
        narrative: "Qual é o atributo HTML usado dentro da **tag** `<a>` para especificar o endereço (URL) do link?",
        code: "<a =\"https://google.com\">Link</a>",
        answer: "href",
        nextId: 'scene8'
    },
    {
        id: 'scene8',
        type: 'HTML',
        narrative: "Para adicionar o maior e mais importante **título** (cabeçalho) à sua página, qual é a **tag** correta?",
        code: "<body>\n    <... >Título Principal</h1 >\n</body>",
        answer: "h1",
        nextId: 'scene9'
    },
    {
        id: 'scene9',
        type: 'HTML',
        narrative: "Qual **tag** é usada para agrupar elementos e aplicar estilos, mas não tem significado semântico por padrão? É frequentemente usada para layout (o contêiner genérico).",
        code: "<body>\n    <...>\n        <p>Conteúdo</p>\n    </div>\n</body>",
        answer: "div",
        nextId: 'scene10'
    },
    {
        id: 'scene10',
        type: 'HTML',
        narrative: "Você precisa criar um campo para o usuário digitar o nome. Qual **tag** de formulário é usada para criar um campo de **entrada de texto**?",
        code: "<form>\n    Nome: type=\"text\">\n</form>",
        answer: "input",
        nextId: 'scene11'
    },
    {
        id: 'scene11',
        type: 'CSS',
        narrative: "Qual **propriedade** CSS você usa para alterar a **cor do texto** de um elemento?",
        code: "p {\n    : blue;\n}",
        answer: "color",
        nextId: 'scene12'
    },
    {
        id: 'scene12',
        type: 'CSS',
        narrative: "Qual **propriedade** CSS define a **cor de fundo** de um elemento?",
        code: "body {\n    : #f0f0f0;\n}",
        answer: "background-color",
        nextId: 'scene13'
    },
    {
        id: 'scene13',
        type: 'CSS',
        narrative: "Qual **propriedade** CSS é usada para controlar o **tamanho da fonte** do texto?",
        code: "h1 {\n    : 24px;\n}",
        answer: "font-size",
        nextId: 'scene14'
    },
    {
        id: 'scene14',
        type: 'CSS',
        narrative: "Para adicionar um espaço **interno** entre o conteúdo e a borda de um elemento, qual **propriedade** você deve usar?",
        code: ".card {\n    : 20px;\n}",
        answer: "padding",
        nextId: 'scene15'
    },
    {
        id: 'scene15',
        type: 'CSS',
        narrative: "Qual **propriedade** CSS remove os pontos ou números (marcadores) de uma lista (`<ul>` ou `<ol>`)?",
        code: "ul {\n    : none;\n}",
        answer: "list-style-type",
        nextId: 'scene16'
    },
    {
        id: 'scene16',
        type: 'CSS',
        narrative: "Qual **propriedade** CSS você define como `none` para fazer com que um elemento desapareça totalmente da página e não ocupe espaço?",
        code: ".hidden {\n    : none;\n}",
        answer: "display",
        nextId: 'scene17'
    },
    {
        id: 'scene17',
        type: 'CSS',
        narrative: "Qual **símbolo** é usado no CSS para selecionar um elemento pelo seu atributo `id` (ex: 'main-header')?",
        code: "main-header {\n    color: red;\n}",
        answer: "#",
        nextId: 'scene18'
    },
    {
        id: 'scene18',
        type: 'CSS',
        narrative: "Qual **símbolo** é usado no CSS para selecionar todos os elementos que possuem uma `class` (ex: 'btn-primary')?",
        code: "btn-primary {\n    background-color: blue;\n}",
        answer: ".",
        nextId: 'scene19'
    },
    {
        id: 'scene19',
        type: 'JAVASCRIPT',
        narrative: "Para declarar uma variável que pode ter seu valor alterado no futuro (ex: pontuação), qual **palavra-chave** você deve usar?",
        code: "userName = 'Visitante';",
        answer: "let",
        nextId: 'scene20'
    },
    {
        id: 'scene20',
        type: 'JAVASCRIPT',
        narrative: "Qual é a função básica em JS usada para exibir uma **caixa de diálogo simples** com uma mensagem no navegador?",
        code: "('Bem-vindo!');",
        answer: "alert",
        nextId: 'scene21'
    },
    {
        id: 'scene21',
        type: 'JAVASCRIPT',
        narrative: "Qual método do objeto `document` é usado para selecionar um elemento HTML pelo seu atributo **`id`** (ex: 'myForm')?",
        code: "const form = document.('myForm');",
        answer: "getElementById",
        nextId: 'scene22'
    },
    {
        id: 'scene22',
        type: 'JAVASCRIPT',
        narrative: "Qual **operador de comparação** verifica se dois valores são **iguais** em valor e tipo (igualdade estrita)?",
        code: "if (x y) { //... }",
        answer: "===",
        nextId: 'scene23'
    },
    {
        id: 'scene23',
        type: 'JAVASCRIPT',
        narrative: "Para definir ou mudar o conteúdo HTML (incluindo tags) dentro de um elemento JavaScript, qual **propriedade** você usa?",
        code: "element.= 'Novo Conteúdo';",
        answer: "innerHTML",
        nextId: 'scene24'
    },
    {
        id: 'scene24',
        type: 'JAVASCRIPT',
        narrative: "Para repetir um bloco de código um número definido de vezes (loop), qual é a principal **palavra-chave** da estrutura de repetição?",
        code: "(let i = 0; i < 10; i++) { //... }",
        answer: "for",
        nextId: 'scene25'
    },
    {
        id: 'scene25',
        type: 'JAVASCRIPT',
        narrative: "Qual **palavra-chave** é usada para declarar uma **função** nomeada no JavaScript?",
        code: "meuAlerta() { //... }",
        answer: "function",
        nextId: 'scene26'
    },
    {
        id: 'scene26',
        type: 'HTML',
        narrative: "Qual **tag** é usada dentro do `<head>` para **vincular** um arquivo de estilo CSS (`style.css`) à página?",
        code: "<head>\n    rel=\"stylesheet\" href=\"style.css\">\n</head>",
        answer: "link",
        nextId: 'scene27'
    },
    {
        id: 'scene27',
        type: 'CSS',
        narrative: "Qual **propriedade** CSS é usada para definir o tipo de fonte (ex: Arial) do texto?",
        code: "p {\n    : Arial, sans-serif;\n}",
        answer: "font-family",
        nextId: 'scene28'
    },
    {
        id: 'scene28',
        type: 'JAVASCRIPT',
        narrative: "Qual é a sintaxe correta para declarar um **array vazio** no JavaScript?",
        code: "const lista = ;",
        answer: "[]",
        nextId: 'end_final'
    }
];

// --- CONTROLE DE ESTADO ---
let currentSceneIndex = 0;
let score = 0;
let currentAttempts = 0; 
const MAX_ATTEMPTS = 3;
let isTyping = false; // Flag para evitar múltiplas chamadas de digitação

// --- ELEMENTOS DOM ---
const narrativeText = document.getElementById('narrative-text');
const bugCode = document.getElementById('bug-code');
const userInput = document.getElementById('user-input');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');
const gameContainer = document.getElementById('game-container');
const gameOverScreen = document.getElementById('game-over-screen'); // Novo elemento


// --- FUNÇÕES DE LÓGICA DO JOGO ---

/**
 * Simula o efeito de digitação em um elemento.
 * @param {HTMLElement} element - O elemento onde o texto será digitado.
 * @param {string} text - O texto completo a ser digitado.
 * @param {function} callback - Função a ser chamada ao final.
 */
function typeWriter(element, text, callback) {
    if (isTyping) return;
    isTyping = true;
    element.textContent = '';
    let i = 0;
    const speed = 30; // Velocidade de digitação (ms)

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            isTyping = false;
            if (callback) callback();
        }
    }
    type();
}


/**
 * Carrega os dados da cena atual e atualiza o DOM com efeito de digitação.
 */
function loadScene() {
    const scene = gameData[currentSceneIndex];

    if (!scene) {
        showEndScreen(true); // Se não houver mais cenas, o jogo é um sucesso
        return;
    }

    currentAttempts = 0; // Reinicia as tentativas para a nova cena

    userInput.value = ''; 
    feedback.textContent = ''; 
    feedback.className = '';
    
    // Desabilita interação enquanto o texto está sendo digitado
    document.querySelector('button').disabled = true;
    userInput.disabled = true;

    // Digita a narrativa
    typeWriter(narrativeText, scene.narrative, () => {
        // Quando a digitação termina, exibe o código e habilita a interação
        bugCode.textContent = scene.code;
        document.querySelector('button').disabled = false;
        userInput.disabled = false;
        userInput.focus(); // Foca no input
    });
    
    updateScoreDisplay();
}

/**
 * Atualiza o placar e as tentativas na tela.
 */
function updateScoreDisplay() {
    const totalScenes = gameData.length;
    scoreDisplay.textContent = `Cena: ${currentSceneIndex + 1} de ${totalScenes} | Pontos: ${score} | Tentativas: ${MAX_ATTEMPTS - currentAttempts}`;
}

/**
 * Verifica a resposta do usuário e avança ou falha.
 */
function checkAnswer() {
    if (isTyping) return; // Não processa resposta se a narrativa ainda estiver sendo digitada

    const scene = gameData[currentSceneIndex];
    if (!scene) return; 

    const userAnswer = userInput.value.trim().toLowerCase();
    const correctAnswer = scene.answer.trim().toLowerCase();
    
    // Normaliza a resposta para aceitar tag pura ou o valor
    const isCorrect = userAnswer === correctAnswer || 
                      userAnswer === correctAnswer.replace(/<|>/g, '').replace('!', '');


    if (isCorrect) {
        // RESPOSTA CORRETA
        score += 10; 
        
        feedback.textContent = `CORRETO! O bug ${scene.type} foi corrigido. Avançando...`;
        feedback.className = 'correct';
        updateScoreDisplay();

        document.querySelector('button').disabled = true;

        setTimeout(() => {
            currentSceneIndex++;
            if (currentSceneIndex < gameData.length) {
                loadScene();
            } else {
                showEndScreen(true);
            }
        }, 1500);

    } else {
        // RESPOSTA INCORRETA
        currentAttempts++;
        
        if (currentAttempts >= MAX_ATTEMPTS) {
            // LIMITE DE TENTATIVAS ALCANÇADO: FIM DE JOGO
            showEndScreen(false); // Chama a tela de Game Over por falha
            return;
        }

        feedback.textContent = `ERRO! Você tem mais ${MAX_ATTEMPTS - currentAttempts} tentativa(s) para corrigir.`;
        feedback.className = 'incorrect';
        updateScoreDisplay();
    }
}

/**
 * Exibe a tela final do jogo ou a tela de Game Over.
 * @param {boolean} success - Indica se o jogador venceu (todas as perguntas) ou falhou (estourou as tentativas).
 */
function showEndScreen(success) {
    // Oculta o game-container principal
    gameContainer.style.display = 'none';

    if (success) {
        // Exibe uma mensagem de sucesso na própria tela final do Game Over
        gameOverScreen.style.display = 'flex'; // Mostra a tela de Game Over
        document.getElementById('skull-image').style.display = 'none'; // Oculta a caveira para sucesso
        document.getElementById('game-over-message').textContent = `SUCESSO TOTAL! Você depurou o código e alcançou o fim com ${score} pontos. O Projeto está pronto!`;
        gameOverScreen.style.borderColor = '#008000'; // Borda verde para sucesso
    } else {
        // Exibe a tela de Game Over com a caveira
        gameOverScreen.style.display = 'flex'; // Mostra a tela de Game Over
        document.getElementById('skull-image').style.display = 'block'; // Mostra a caveira
        document.getElementById('game-over-message').textContent = `DEPURAÇÃO FALHOU! Você estourou as ${MAX_ATTEMPTS} tentativas. Pontuação final: ${score}.`;
        gameOverScreen.style.borderColor = '#CC0000'; // Borda vermelha para falha
    }
}

// --- INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', loadScene);