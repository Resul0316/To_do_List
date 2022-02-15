let inputText = document.getElementById("To_do_list_input");
let button = document.getElementById("add-to-do-button");
let todoscontainer = document.getElementsByClassName("to-dos_container");

button.addEventListener("click", function() {
    let paragraph = document.createElement('p')
    paragraph.innerText = inputText.value
    document.body.appendChild(paragraph)
    inputText.value = "";

    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through" ;
    })

    paragraph.addEventListener("dblclick", function(){
        todoscontainer.removeChild(paragraph);
    })
})