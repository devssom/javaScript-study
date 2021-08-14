const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    // if (h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }
    h1.classList.toggle(clickedClass);
    // toggle은 h1의 classList에 clickedClass가 이미 있는지 확인해서
    // 만약 있다면, toggle이 clicked를 없애주고, 없으면 생기게 해줌
}

h1.addEventListener("click", handleTitleClick);