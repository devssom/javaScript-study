const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];


function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
    // JSON.stringify()를 해주면 모든 JS 애들이 문자열로 바뀜
    // 값을 sring으로 저장하고 싶을 때 많이 사용함
    // 이걸 다시 배열로 바꿔주고 싶으면 JSON.parse() 하면 됨
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    // 지우고 싶은 target li 선택
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);

    // todo를 삭제하는 버튼
    const button = document.createElement("button");
    button.innerText = "✖";
    li.appendChild(button);
    button.addEventListener("click", deleteToDo)
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    // input의 value를 새로운 변수에 복사하는 것

    toDoInput.value = "";
    // 엔터치면 값 사라지고, 폼 비어지게
    
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}



toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}