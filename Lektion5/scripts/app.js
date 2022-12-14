import Item from "./item.js";


((todo) => {

    const items = document.querySelector('#toDoItems');

    todo.save = function(){
        let items = document.querySelectorAll('li');
        let res = Array.from(items).map(i => new Item(i.childNodes[0].textContent, i.classList.contains('change')));
        localStorage.setItem('items', JSON.stringify(res));
    }
    
    todo.load = function(){
        let result = JSON.parse(localStorage.getItem('items'));
        if(result === null) return;
        result.forEach(i => addItemToDom(i));
    }

    todo.addItem = function(e){
        
        e.preventDefault();
        const input = this['todoInput'];
        if(input.value.trim().length === 0){
            input.value = ''; 
            return;
        }

        //Alt 1 
        //AddItemToDom används vid Load!
        addItemToDom(new Item(input.value, false));
        input.value = '';

        //Alt 2
        // const li = createToDo(input.value);
        // items.appendChild(li);
        // input.value = '';
    }

    // const createToDo = (input) => {
    //     let li = document.createElement('li');
    //     li.innerText = input;
    //     li.classList.add('list-group-item');
    //     li.addEventListener('click', change);

    //     let button = document.createElement('button');
    //     button.classList.add('btn', 'btn-danger');
    //     button.innerText = 'X';
    //     button.addEventListener('click', remove);

    //     li.appendChild(button);

    //     return li;
    // }
    
    
    function addItemToDom(item) {
        items.insertAdjacentHTML('beforeend', 
        ` <li class="list-group-item ${item.isChecked ? 'change' : ''}">
        ${item.text}
        <button class="btn btn-danger">X</button>
        </li>`);
        
        let lastChild = items.lastElementChild;
        lastChild.addEventListener('click', change);
        lastChild.querySelector('button').addEventListener('click', remove);
    }

    function change(){
        this.classList.toggle('change');
    }

    function remove(){
        this.parentElement.remove();
    }
    
    
})(window.todo = window.todo || {});

document.querySelector('#todoForm').addEventListener('submit', todo.addItem);
document.querySelector('h1').addEventListener('click', todo.save);
document.querySelector('#load').addEventListener('click', todo.load);