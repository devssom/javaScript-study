// 배열의 반복문

var memberArray = ['devssom', 'devmom', 'devbrother'];
console.group('array loop');
var i = 0;
while(i < memberArray.lenth){
    console.log(i, memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop');


// 객체의 반복문 
var memberObject = {
    manager : 'devssom',
    developer : 'devmom',
    designer : 'devbrother'
}
console.group('object loop');

// 객체에서 사용하는 for문은 문법이 다름. for-in문
for(var name in memberObject) {
    console.log(name, memberObject[name]);
} 

console.groupEnd('object loop');


