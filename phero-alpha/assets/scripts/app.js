// Common Function Starts Here
function elementById (elementId){
    const element =  document.getElementById(elementId);
    return element;
}
function hide(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function show(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}
function setBGColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBGColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBGColor(alphabet);
}
function getValue(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}
function getElementText(elementId){
    const element = elementById(elementId);
    const text = element.innerText;
    return text;
}
function setValue(elementId, value){
    const element = elementById(elementId);
    element.innerText = value;
}
function handleKey(event){
    const pressed = event.key;
    if(pressed === 'Escape'){
        gameOver();
    }
    const currentAlphabetElement = elementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    if(pressed === expectedAlphabet){
        const currentScore = getValue('current-score');
        const newScore = currentScore + 1;
        setValue('current-score', newScore);
        removeBGColor(expectedAlphabet);
        continueGame();
    }else{
        const currentLife = getValue('current-life');
        const newLife = currentLife - 1;
        setValue('current-life', newLife);
        if(newLife === 0){
            gameOver();
        }
    }
}
document.addEventListener('keyup', handleKey);
// Common Function Ends Here
function play(){
    hide('home-screen');
    hide('final-score');
    show('play-ground');
    setValue('current-life', 5);
    setValue('current-score', 0);
    continueGame();
}
function gameOver(){
    hide('play-ground');
    show('final-score');
    const lastScore = getValue('current-score');
    setValue('last-score', lastScore);
    const currentAlphabet = getElementText('current-alphabet');
    removeBGColor(currentAlphabet);
}

