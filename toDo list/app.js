//alert("lol")
//var task =getElementsByClassName("addtxt").value.trim();
var element = [];
window.onload = function(){
    if(JSON.parse(localStorage.getItem("todo-elements"))!=null){
        element = JSON.parse(localStorage.getItem("todo-elements"));
        console.log(element);
        display();
    }
};
function addElement(){
    if(document.querySelector(".addtxt").value.trim()){
        element.push(document.querySelector(".addtxt").value.trim());
        if(localStorage.getItem("todo-elements")==null){
            localStorage.setItem("todo-elements",JSON.stringify(element));
        }
        else{
            localStorage.setItem("todo-elements",JSON.stringify(element));

        }
        console.log(localStorage.getItem("todo-elements"));
        display();
        document.querySelector(".addtxt").value ="";
    }
}
function display(){
    document.querySelector(".list").innerHTML = "";
    for(var i = 0 ; i < element.length ; i++)
    {
        document.querySelector(".list").innerHTML += "<center><div class='elements'>" +element[i]+"<img class='done' src='done.png' onclick='strike("+i+")'> <img class='delet' src='delet.png' onclick='del("+i+")'></div></center>"  
    }
}
function del(index){
    element.splice(index,1);
    if(localStorage.getItem("todo-elements")==null){
        localStorage.setItem("todo-elements",JSON.stringify(element));
    }
    else{
        localStorage.setItem("todo-elements",JSON.stringify(element));

    }
    display();

}
function strike(index){
    if(element[index].includes("<strike>")){
        element[index] = element[index].replace("<strike>","");
        element[index] = element[index].replace("</strike>","");

    }
    else{
        element[index] = "<strike>" +element[index]+"</strike>";
    }
    if(localStorage.getItem("todo-elements")==null){
        localStorage.setItem("todo-elements",JSON.stringify(element));
    }
    else{
        localStorage.setItem("todo-elements",JSON.stringify(element));

    }
    display();
}



document.querySelector(".reset").addEventListener("click", function(index) {
    element.splice(index);
    if(localStorage.getItem("todo-elements")==null){
        localStorage.setItem("todo-elements",JSON.stringify(element));
    }
    else{
        localStorage.setItem("todo-elements",JSON.stringify(element));

    }
    display();

  });


