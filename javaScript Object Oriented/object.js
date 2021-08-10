// 조직의 멤버를 목록화시키고 싶다

// 먼저, 배열로 만들어보면
var memberArray = ['devssom', 'devmom', 'devbrother'];
console.log("memberArray[2]", memberArray[2]);
// devbrother 출력

// 이렇게 목록만 있으면 배열을 쓰면 되는데,
// 내용이 더 있는 경우에는 객체를 쓰면 됨

// 객체 : 이름이 있는 정보를 정리정돈 할 때 쓰는 도구

var memberObject = {
    manager : 'devssom',
    developer : 'devmom',
    designer : 'devbrother'
}
console.log("memberObject.designer", memberObject.designer);
// devbrother 출력

// 배열에서는 배열에 있는 값에 접근할 때 대괄호 [ ]를 썼는데
// 객체에서는 .점을 써줌. 대괄호도 쓸 수는 있음.

// 객체 원소를 수정하고 싶다면
memberObject.designer = 'devfather';
console.log("memberObject.designer", memberObject.designer);
// devfather 출력

// 객체 원소를 삭제하고 싶다면
delete memberObject.manager;
console.log('after delete memberObject.manager', memberObject.manager);
// undefined 출력