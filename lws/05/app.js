function element(elementId){
    return document.getElementById(elementId);
}
const main01 = element('main');
const incompleteAreaContentAll = main01.querySelectorAll('#incompleteAreaContent');
console.log(incompleteAreaContentAll);

const incompleteAreaContent = element('incompleteAreaContent');
const incompleteArea = incompleteAreaContent.parentElement;
console.log(incompleteArea);
const main = incompleteAreaContent.closest('#main');
console.log(main);
const fstIncompleteAreaContent = document.querySelector('#incompleteAreaContent');
const sndIncompleteAreaContent = fstIncompleteAreaContent.nextElementSibling;
const label = sndIncompleteAreaContent.querySelector('.label');
label.style.color = 'red';
const incompleteAreaContent01 = sndIncompleteAreaContent.previousElementSibling;
incompleteAreaContent01.querySelector('.label').style.color = 'green';