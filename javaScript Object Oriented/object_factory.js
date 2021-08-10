var kim = {
    name : 'kim',
    first : 10,
    second : 20,
    sum : function () {
        return this.first + this.second;
    }
}


var lee = {
    name : 'lee',
    first : 10,
    second : 10,
    sum : function () {
        return this.first + this.second;
    }
}
console.log("kim.sum())", kim.sum());
console.log("lee.sum())", lee.sum());

// 여기서 third라는 값을 추가하려면
// kim에도 추가해야되고, lee에게도 추가해야 돼
// 이게 1억개라고 생각하면 너무 복잡하잖아

// 그래서 이런 형식의 객체를 찍어내는 공장을 만들어내서
// 객체를 양산할거야






// 사례

// 시간을 알아내고 싶을 때 사용하는 Date() 가 있음
// Date()를 사용하려면 앞에다가 new를 붙여줌
// 그리고 d1이라고 하는 객체를 만들어줘
var d1 = new Date('2021.07.08');

// Date()가 내부에 어떤 설계도를 가지고 있는지는 모르지만
// 잘 써먹을 수는 있어
console.log(d1.getFullYear());  // 2021
console.log(d1.getMonth());  // 6 (0부터 출력되서)

// 봐보면, Date()라는 애는, 우리한테 d1으로 객체를 만들어서
// 우리한테 return해주고 있다는 걸 알 수 있어
// 우리도 이런식으로 객체를 찍어내는 공장을 만들어주면 코드가 깨끗해질거야


function Person() {
    this.name = 'kim';
    this.first = 10,
    this.second = 20,
    this.sum = function () {
        return this.first + this.second;
    }
}
console.log('Person()', Person());
// undefined로 출력. 함수를 그냥 호출하면 얘는 그냥 함수야

console.log('Person()', new Person());
// 근데, 이렇게 new를 함수 앞에다가 붙여주면 이젠 일반적인 함수가 아니라
// 객체를 생성하는 생성자(Constructor)가 됨
// Person {name: "kim", first: 10, second: 20, sum: ƒ} 로 출력
// Person이라는 객체가 만들어졌다는 걸 우리한테 알려주는거야

// 여기서, new라는 키워드는 객체를 생성하는 생성자임
// 그래서 new가 붙은 함수는 생성자 함수가 되는 것




// 이렇게 써주면
function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function () {
        return this.first + this.second;
    }
}

// 이렇게 객체와 값들을 하나하나 입력해줄 필요 없이
// var kim = {
//     name : 'kim',
//     first : 10,
//     second : 20,
//     sum : function () {
//         return this.first + this.second;
//     }
// }


// 이렇게만 써줘
var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);

console.log('kim.sum()', kim.sum());    // kim.sum() 30
console.log('lee.sum()', lee.sum());    // lee.sum() 20
