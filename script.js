let addtodobutton=document.querySelector("#addtodo");
let inputfield=document.querySelector("#inputfield");
let todocontainer=document.querySelector("#todocontainer");

addtodobutton.addEventListener('click', function(){
    let paragraph=document.createElement('p');
  
        todocontainer.appendChild(paragraph);
        paragraph.innerText=inputfield.value ;
        inputfield.value="";
        paragraph.addEventListener('dblclick',function(){
            todocontainer.removeChild(paragraph);
})
})