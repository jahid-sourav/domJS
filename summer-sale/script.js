// Common Functions Starts Here
function elementById(elementId){
    const element = document.getElementById(elementId);
    return element;
}
function elementsByQuerySelectorAll(element){
    const elements = document.querySelectorAll(element);
    return elements;
}
function getCardTitle(element){
    const cardTitle = element.querySelector('h3').innerText;
    return cardTitle;
}
function getPrice(element){
    const cardPrice = element.querySelector('span').innerText.slice(2);
    return parseFloat(cardPrice).toFixed(2);
}
function createElement(element){
    const theElement = document.createElement(element);
    return theElement;
}
function getValue(element){
    const value = element.value;
    return value;
}
function getDiscount(totalPrice){
    const discountAmount = totalPrice * 0.20;
    const totalDiscountAmount = discountAmount.toFixed(2);
    return totalDiscountAmount; 
}
function theRestTotal(totalPrice, totalDiscountAmount){
    const restTotal = totalPrice - totalDiscountAmount;
    return restTotal.toFixed(2);
}
function enableButton(buttonElement, totalPrice){
    const button = elementById(buttonElement);
    if(totalPrice > 0){
        button.removeAttribute('disabled');
    }else{
        button.setAttribute('disabled', true);
    }
}
// Common Functions Ends Here

const cards = elementsByQuerySelectorAll('.card');
let titleCount = 1;
let totalPrice = 0;
for(const card of cards){
    card.addEventListener('click', function(){
        const title = getCardTitle(card);
        const price = getPrice(card);
        const titleContainer  = elementById('title-container');
        const div = createElement('div');
        div.innerHTML = `
            <div class="flex gap-2">
                <p class="font-bold text-[18px]">${titleCount}</p>
                <p class="font-bold text-[18px]">${title}</p>
                <p class="font-bold text-[18px]">$${price}</p>
            </div>
        `;
        titleContainer.appendChild(div);
        titleCount++;
        const totalPriceElement = elementById('totalPrice');
        totalPrice += parseFloat(price);
        totalPriceElement.innerText = totalPrice.toFixed(2);
        enableButton('modal-button', totalPrice);
    });
}
const applyButton = elementById('apply-btn');
const input = elementById('input-field');
applyButton.addEventListener('click', function(){
    const inputValue = getValue(input);
    const theInputValue = inputValue.split(' ').join('').toUpperCase();
    if(totalPrice >= 200){
        if(theInputValue === 'SELL200'){
            const discountAmount = getDiscount(totalPrice);
            const discountPriceElement = elementById('discountPrice');
            discountPriceElement.innerText = discountAmount;
            const totalAfterDiscount = theRestTotal(totalPrice, discountAmount);
            const totalElement = elementById('total');
            totalElement.innerText = totalAfterDiscount;
            input.value = '';
        }else{
            alert('Invalid');
            input.value = '';
        }
    }else{
        alert('Add More!');
        input.value = '';
    }
});
