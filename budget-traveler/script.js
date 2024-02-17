// Common Functions Starts Here
function elementById(elementId){
    const element = document.getElementById(elementId);
    return element;
}
function elementByClassName(className){
    const elements = document.getElementsByClassName(className);
    return elements;
}
function setInnerText(element, value){
    return element.innerText = value;
}
function theTotal(total, price){
    const sum = total + price;
    return parseFloat(sum);
}
function grandTotal(category){
    const totalCostElement = elementById('total-cost');
    const totalCost = parseFloat(totalCostElement.innerText);
    const grandTotalElement = elementById('grand-total');
    if(category === 'bus'){
        const result = totalCost + 100;
        setInnerText(grandTotalElement, result);
    }else if(category === 'train'){
        const result = totalCost - 200;
        setInnerText(grandTotalElement, result);
    }else if(category === 'flight'){
        const result = totalCost + 500;
        setInnerText(grandTotalElement, result);
    }else{
        setInnerText(grandTotalElement, totalCost);
    }
}
function handleSelect(elements){
    let count = 0;
    let total = 0;
    for(const element of elements){
        element.addEventListener('click', function(){
            count += 1;
            const cartCount = elementById('cart-count');
            setInnerText(cartCount, count);
            const place = element.parentNode.querySelector('h2').innerText;
            const price = element.parentNode.querySelector('.price').innerText;
            const priceInNumber = parseFloat(price);
            const selectedPlaceContainer = elementById('selected-place-container');
            const li = document.createElement('li');
            li.className = 'justify-center mt-6';
            li.innerHTML  = `${count}. ${place} $${priceInNumber}`;
            const budgetElement = elementById('budget');
            const budget = parseFloat(budgetElement.innerText);
            const theBudget = budget - priceInNumber; 
            if(theBudget < 0){
                alert('Earn More!');
                return;
            }
            selectedPlaceContainer.appendChild(li);
            const totalElement = elementById('total-cost');
            total = theTotal(total, priceInNumber);
            setInnerText(totalElement, total);
            grandTotal();
            setInnerText(budgetElement, theBudget);
            element.parentNode.parentNode.style.backgroundColor = '#ddd';
            element.setAttribute('disabled', true);
        }); 
    }
}
// Common Functions Ends Here
const allAdButton = elementByClassName('add-btn');
handleSelect(allAdButton);