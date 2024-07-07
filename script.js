function startQuiz() {
    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = `
        <p>Question: Who won the FIFA World Cup in 2018?</p>
        <button onclick="checkAnswer('a')">Germany</button>
        <button onclick="checkAnswer('b')">France</button>
        <button onclick="checkAnswer('c')">Brazil</button>
    `;

    const buttons = quizDiv.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.backgroundColor = '#2ebdbd';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.padding = '0.5em 1em';
        button.style.margin = '0.5em';
        button.style.cursor = 'pointer';
        button.style.borderRadius = '4px';
        button.style.transition = 'background 0.3s ease';
        
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#239a9a';
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#2ebdbd';
        });
    });
}

function checkAnswer(answer) {
    const quizDiv = document.getElementById('quiz');
    if (answer === 'b') {
        quizDiv.innerHTML = `<p>Correct! France won the FIFA World Cup in 2018.</p>`;
    } else {
        quizDiv.innerHTML = `<p>Incorrect. Try again!</p>`;
    }
}
