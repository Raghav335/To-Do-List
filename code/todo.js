const btnEle = document.querySelector(".btn");
const inputEle = document.querySelector("#input-field");
const taskEle = document.querySelector(".List-items");


btnEle.addEventListener("click", ()=>{
    if(inputEle.value===""){
        alert("Please Add your task first")

    }
    else{

        let listEle =document.createElement("li");
        listEle.textContent = inputEle.value;
        taskEle.appendChild(listEle);

        let spanEle = document.createElement("span");
        spanEle.textContent = "\u00d7";
        listEle.appendChild(spanEle);
    }
    inputEle.value="";
    saveEle();

})

taskEle.addEventListener("click", (evt)=>{
   if(evt.target.tagName == "LI"){
        evt.target.classList.toggle("checked");
        saveEle();
    }else if(evt.target.tagName == "SPAN"){
        evt.target.parentNode.remove()
        saveEle();
    }

})

function saveEle(){
    localStorage.setItem("task",taskEle.innerHTML);
}

function getEle(){
    taskEle.innerHTML = localStorage.getItem("task");
}

getEle();