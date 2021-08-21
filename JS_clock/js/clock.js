const clock = document.querySelector("h1#clock")

function getClock() {
    const date = new Date();
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // padStart는 문자를 (n자리수로 만들기 위해, 특정 문자)를 앞에 채워주는 함수

    clock.innerHTML = `${year}년 ${month}월 ${day}일 ${hours}:${minutes}:${seconds}`;
}
    
getClock();
setInterval(getClock, 1000);
// setInterval로 인터벌을 설정해서 함수를 실행 (실행할함수, 간격은 ms 단위)
// setTimeout(sayHello, 5000); 이라면 timeout은 내가 정해놓은 ms 후에 함수 실행