# JavaScript-Todo-List-Project

<h3>How to build a Todo List App with JavaScript</h3>
This is a sample project how to create a todo list using Jaascript with the basic knowledge of JavaScript. You will find how to used the filter function, addEventListener and array changing with Modren es6 Arrow functions, etc.
 
 # Link 
 https://javascripttodolist.web.app/


# App.js file
<code>
<pre>
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
 

</code>
</pre>



# Index.html file
<code>
<pre>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
    <title>Javascript Todo List</title>
</head>

<body>
 
    <div class="container">

        <header class="text-center text-light my-4">
            <h1 class="mb-4">Todo List by Javascript</h1>
            <form class="search">
                <input class="form-control m-auto" type="text" name="search" placeholder="search todos" />
            </form>
        </header>


        <ul class="list-group todos mx-auto text-light">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>Play Guiter</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>Clean the floors</span>
                <i class="far fa-trash-alt delete"></i>
            </li>

            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>Clean Kitchen </span>
                <i class="far fa-trash-alt delete"></i>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>Watch TV</span>
                <i class="far fa-trash-alt delete"></i>
            </li>

            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>BUY MILK</span>
                <i class="far fa-trash-alt delete"></i>
            </li>

            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>Pay House Rent</span>
                <i class="far fa-trash-alt delete"></i>
            </li>

        </ul>

        <form class="add text-center my-4">

            <div class="alert message"></div>
            <label class="text-light">Add a new todo...</label>

            <input class="form-control m-auto" type="text" name="add" />
            <input type="submit" value="Submit" class="mt-3 btn btn-secondary" />
        </form>

    </div>


    <script src="app.js"></script>
</body>

</html>

</pre>

</code>