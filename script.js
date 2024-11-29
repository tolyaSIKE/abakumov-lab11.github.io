$(document).ready(function () {
    const words = [
        { en: "cucumber", ua: "огурець" },
        { en: "porridge", ua: "каша" },
        { en: "cabbadge", ua: "капуста" },
        { en: "juice", ua: "сік" },
        { en: "pumpkin", ua: "гарбуз" },
        { en: "pea", ua: "горох" },
        { en: "spinach", ua: "шпинат" },
        { en: "radish", ua: "редиска" },
        { en: "celery", ua: "селера" },
        { en: "potato", ua: "картопля" }
    ];
    let availableWords = [...words];
    const totalSteps = 10;
    let currentStep = 1;
    let trueAnswers = 0;
    let falseAnswers = 0;
    function getRandomWord() {
        const index = Math.floor(Math.random() * availableWords.length);
        const word = availableWords[index];
        availableWords.splice(index, 1);
        return word;
    }
    let currentWord = getRandomWord();
    $('#word').text(currentWord.en);
    $('#check-btn').click(function () {
        const userInput = $('#message').val().trim().toLowerCase();
        if (userInput == currentWord.ua) {
            trueAnswers++;
            $('#true').text(trueAnswers);
        } else {
            falseAnswers++;
            $('#false').text(falseAnswers);
        }
        currentStep++;
        if (currentStep > totalSteps) {
            $('#result-card').removeClass('hidden');
            $('#result').text(`Ви відповіли: правильно: ${trueAnswers}, неправильно: ${falseAnswers}`);
        } else {
            $('#step').text(currentStep);
            currentWord = getRandomWord();
            $('#word').text(currentWord.en);
            $('#message').val('');
        }
    });
    $('#restart-btn').click(function () {
        currentStep = 1;
        trueAnswers = 0;
        falseAnswers = 0;
        availableWords = [...words];
        $('#true').text(trueAnswers);
        $('#false').text(falseAnswers);
        $('#step').text(currentStep);
        $('#result-card').addClass('hidden');
        currentWord = getRandomWord();
        $('#word').text(currentWord.en);
    });
});