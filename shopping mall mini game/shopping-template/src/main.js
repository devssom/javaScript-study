// Fetch the items from the JSON file
function loadItems() {
    return fetch('data/data.json')
    .then(response => console.log(response));
}




// main
loadItems()    // data.json 파일 리턴하기 위해
.then(items => {   // 전달받은 아이템들을 이용해서
    displayItems(items);
    setEventListners(items)
})
.catch(console.log)