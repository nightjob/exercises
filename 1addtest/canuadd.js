const prompt = require('prompt-promise');

async function askMathQuestion() {
let correctAnswer = 12;
let numGuesses = 0;
let userAnswer;

while (numGuesses < 3) {
    try {
    userAnswer = await prompt('QUICK! WHATS 7 + 5!\n');
    if (parseInt(userAnswer) === correctAnswer) {
        console.log('nice...');
        break;
    } else {
        console.log('Wow...');
        numGuesses++;
    }
    } catch (err) {
    console.log(err);
    break;
    }
}

if (numGuesses === 3) {
    console.log('heh... cute');
}

prompt.done();
}

askMathQuestion();