const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const message = document.querySelector('.message');
const searchForm = document.querySelector('.search');

const generateTemplate = todo =>{
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li> 
    `;
    list.innerHTML += html; 
}

addForm.addEventListener('submit', e=>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length){
        message.classList.add('d-none');
        addForm.add.classList.add('class', 'success');
        generateTemplate(todo);
        addForm.reset();
        addForm.add.focus();
        message.textContent = 'Great! You added your todo item.';
        message.classList.remove('alert-danger');
        message.classList.add('alert-success');
    }else{
        message.classList.add('d-block');
        addForm.add.classList.add('class', 'error');
        message.textContent = 'Oops! Please enter your item.';
        message.classList.remove('alert-success');
        message.classList.add('alert-danger');

    }

});


//delete todo

list.addEventListener('click', e=>{

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

const showTodoList = (searchText) =>{
    console.log(searchText)
    childsOfList= Array.from(list.children);
 
        Array.from(list.children)
        .filter(li =>{ 
             return !li.textContent.toLowerCase().includes(searchText)  
         }).forEach(li=>{
            li.classList.add('filtered')
        }) 

        Array.from(list.children)
        .filter(li =>{ 
             return li.textContent.toLowerCase().includes(searchText)  
         }).forEach(li=>{
            li.classList.remove('filtered')
        }) 

}


//keyup search
searchForm.search.addEventListener('keyup', e=>{
    e.preventDefault();
    const searchText = e.target.value.trim().toLowerCase();
     showTodoList(searchText);
})
 