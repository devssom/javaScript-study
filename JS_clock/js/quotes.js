const quotes = [
    {
        quote: "네가 먹고 살 길은 공부 밖에 없다",
        author: "최여사",
    },
    {
        quote: "스타트업 초봉 3000만원. 버틸 수 있겠음?",
        author: "이주경",
    },
    {
        quote: "이야~ 코딩 마법사인줄★",
        author: "오정철",
    },
    {
        quote: "공부할래? 광고할래?",
        author: "전직 쏨카피"
    },
    {
        quote: "자 이제 시작이야, 내 꿈을 위한 여행~♪",
        author: "피카츄"
    },
    {
        quote: "31살에 다시 시작한다",
        author: "데브쏨",
    },
    {
        quote: "날 잊지마",
        author: "아파트 대출금"
    },
    {
        quote: "더는...버틸 수....없어....살려줘....!",
        author: "통장"
    },
    {
        quote: "광고판에서도 버텼는데 개발쯤이야",
        author: "전직 쏨카피"
    },
    {
        quote: "공부도 불안감을 낮춰줘요",
        author: "의사선생님"
    },
    {
        quote: "개발 배우길 잘했다",
        author: "5년 후의 나"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = "-" + todaysQuote.author;