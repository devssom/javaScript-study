// 객체 : 서로 연관된 변수와 함수를 그룹핑해서 이름을 붙여놓은 것

// 한국어와 영어에서 대명사 : 나, me 
// ㄴ 자기 자신을 가리키는 표현

// 프로그래밍에서도 자기 자신을 가리키는 표현이 있는데
// 그게 바로 this


var kim = {
    name : 'kim',
    first : 10,
    second : 20,
    sum : function (f, s) {
        return f + s;
    }
}

// kim이 지금까지 게임을 했던 총합을 구하려면
console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.first, kim.second));

// 아 근데 뭐가 아쉬워
// 함수의 인자로 또 한번 객체 자신을 언급해야 하니까
// 그래서 생략하고 싶다면

// 시도 1
var kim = {
    name : 'kim',
    first : 10,
    second : 20,
    sum : function () {
        return first + second;
    }
}
console.log("kim.sum(kim.first, kim.second)", kim.sum());
// 이렇게 하면 오류나 first is not defined


// 시도 2
var kim = {
    name : 'kim',
    first : 10,
    second : 20,
    sum : function () {
        return kim.first + kim.second;
    }
}
console.log("kim.sum(kim.first, kim.second)", kim.sum());
// 이렇게 하면 잘됨
// kim.sum(kim.first, kim.second) 30
// 이 방법도 나쁜 건 아닌데 아직 아쉬워
// kim이라고 하는 저 객체의 이름을 k라고 바꾸면 동작하지 않아
// kim.first라는 건 더 이상 존재하지 않기 때문에, k.first라고 또 일일이 바꿔야됌


// 그래서 객체에 메소드가 있으면
// 메소드가 자신이 속해 있는 객체를 가리키는 특수한 키워드를 만들기로 함
// 그게 바로 this

var kim = {
    name : 'kim',
    first : 10,
    second : 20,
    sum : function () {
        return this.first + this.second;
    }
}
console.log("kim.sum(kim.first, kim.second)", kim.sum());
