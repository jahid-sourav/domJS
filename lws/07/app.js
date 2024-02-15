function elementByQuerySelector(elementId){
    return document.querySelector(elementId);
}
const input = elementByQuerySelector('#input');
const form = elementByQuerySelector('#form');
const incompleteArea = elementByQuerySelector('#incompleteArea');
const completedArea = elementByQuerySelector('#completedArea');

function createTask(task){
    const incompleteAreaContent = document.createElement('div');
    incompleteAreaContent.classList.add('mt-10');
    incompleteAreaContent.innerHTML = `
        <div class="flex justify-center items-center">
            <input type="checkbox">
            <label class="label">${task}</label>
        </div>
    `;
    return incompleteAreaContent;
}

function addTask(event){
    event.preventDefault();
    const incompleteAreaContent = createTask(input.value);
    incompleteArea.appendChild(incompleteAreaContent);
    input.value = '';
    bindIncompleteTask(incompleteAreaContent);
}

function completeTask(){
    const incompleteAreaContent = this.parentNode.parentNode;
    incompleteArea.removeChild(incompleteAreaContent);
    const label = this.parentNode.querySelector('.label');
    const completedAreaContent = document.createElement('div');
    completedAreaContent.className = 'mt-10';
    completedAreaContent.innerHTML = `
        <div class="flex justify-center items-center">
            ${label.outerHTML}
            <button class="delete-button">Delete</button>
        </div>
    `;
    completedArea.appendChild(completedAreaContent);
    bindCompleteTask(completedAreaContent);
}

const deleteTask = function(){
    const completedAreaContent =  this.parentNode.parentNode;
    completedArea.removeChild(completedAreaContent);
}

const bindCompleteTask = function(completedAreaContent){
    const deleteButton = completedAreaContent.querySelector('.delete-button');
    deleteButton.onclick = deleteTask;
}

function bindIncompleteTask(incompleteAreaContent){
    const checkbox = incompleteAreaContent.querySelector('input[type = "checkbox"]');
    checkbox.onchange = completeTask;
}

form.addEventListener('submit', addTask);
