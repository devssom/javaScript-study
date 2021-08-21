const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// 관습적으로 string만 포함한 변수는 대문자로 표기하고, sring을 저장하고 싶을 때 사용함

function onLoginSubmit(event) {
    // 이렇게 함수에 event를 argument로 채워주면
    // eventListner에 어떤 함수를 추가하던지간에
    // 첫번째 argument에서 발생된 event에 대한 정보를 줌 (선택사항, 비워도 됨)
    // ㄴ> 쉽게 말해, 어떤 정보를 담은 채로 함수를 호출하는 것
    // const value = loginInput.value;
    
    event.preventDefault();
    // 원래 브라우저는 엔터를 누를 때나 버튼을 누를 때
    // 새로고침을 하고 form을 submit 하도록 되어있음
    // 우리가 원하는건 이 기본 동작이 발생되지 않도록 하는 것 --> 새로고침 NO
    // 그래서 preventDefault()를 사용해서 기본 동작을 막는 것
    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // css에서 정의한 hidden class를 추가해주면, 로그인했을 때 form이 사라지게 됨 
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // localStrage에 username 을 받아서 저장하기
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerHTML = `와우! ${username}님이 오셨다!!!!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    // greeting을 숨김 표시했던 hidden class를 없애서 화면에 보여줌
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
// form 보여주기
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    // hidden class를 remove 해주는걸로 로그인했을 때 form이 사라지게 됨 
    loginForm.addEventListener("submit", onLoginSubmit);
    //submit은 엔터를 누르거나 버튼을 클릭할 때 발생함

} else {
// greeting 보여주기
    paintGreetings(savedUsername);
}