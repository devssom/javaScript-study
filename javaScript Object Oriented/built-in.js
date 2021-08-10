// 내장함수

console.log("Math.PI", Math.PI); 
// Math.PI 3.141592653589793 출력 (파이값)

console.log("Math.random()", Math.random()); 
// Math.random() 0.9127252946590054 출력

console.log("Math.floor(3.9)",Math.floor(3.9));
// Math.floor(3.9) 3 출력

// Math라는 객체에서 메소드들을 잘 그룹핑 해놓은 것
// 이미 우리는 객체를 사용하고 있었던 것


// 우리도 똑같이 객체를 만들어보면
// MyMath라는 수납상자에 수학과 관련된 함수들을 수납

var MyMath = {
    PI : Math.PI,
    random : function() {
        return Math.random()
    },
    floor : function(val) {
        return Math.floor(val);
    }
}
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(3.9)", MyMath.floor(3.9));
