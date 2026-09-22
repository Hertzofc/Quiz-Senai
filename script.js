const perguntas = [
    {
        pergunta: "Qual linguagem é responsável pela estrutura de uma página web?",
        alternativas: [
            "CSS",
            "HTML",
            "JavaScript",
            "Python"
        ],
        correta: 1
    },

    {
        pergunta: "Qual linguagem usamos principalmente para estilizar uma página?",
        alternativas: [
            "HTML",
            "Java",
            "CSS",
            "Python"
        ],
        correta: 2
    },

    {
        pergunta: "Qual linguagem é responsável pela interatividade de uma página web?",
        alternativas: [
            "CSS",
            "HTML",
            "JavaScript",
            "Python"
        ],
        correta: 2
    },

    {
        pergunta: "Qual evento ocorre quando o usuário clica em um elemento?",
        alternativas: [
            "onmouseover",
            "onclick",
            "onchange",
            "onload"
        ],
        correta: 1
    },

    {
        pergunta: "Qual comando pode localizar um elemento pelo seu id?",
        alternativas: [
            "document.getElementById()",
            "console.log()",
            "alert()",
            "document.write()"
        ],
        correta: 0
    }
];

let perguntaAtual = 0;
let pontos = 0;

function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];

    document.getElementById("pergunta").textContent = pergunta.pergunta;

    const alternativas = document.getElementById("alternativas");
    alternativas.innerHTML = "";

    pergunta.alternativas.forEach((alternativa, index) => {
        const button = document.createElement("button");

        button.textContent = alternativa;

        button.addEventListener("click", () => {
            verificarResposta(index);
        });

        alternativas.appendChild(button);
    });
}

function verificarResposta(indice) {
    if (indice === perguntas[perguntaAtual].correta) {
        pontos++;
    }

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    document.getElementById("pergunta").textContent = "Quiz finalizado!";

    document.getElementById("alternativas").innerHTML = "";

    document.getElementById("resultado").textContent =
        "Você acertou " + pontos + " de " + perguntas.length + " perguntas.";
}

mostrarPergunta();
