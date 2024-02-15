const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page='
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

let pageNum = 1;

//페이지 호출 함수
async function mainScreen(){
    let res = await fetch(API_URL + pageNum);
    data = await res.json();

    //초기화
    document.querySelector('#main').remove();
    //초기화 후 다시 세팅
    let reset = document.createElement('main');
    reset.id = 'main';

    document.body.querySelector(".reset").append(reset)

    let count = 0;
    let viewHtml = ``;
    for(i in data.results){
        let voteA = data.results[count].vote_average;
        voteA = voteA.toFixed(1)
        viewHtml += `
    <div class="movie">
        <img class="movie img" src="${IMG_PATH}${data.results[count].poster_path}" alt="">
        <div class="movie-info">
        <h3>${data.results[count].title}</h3>
            <span class=${colorFind(voteA)}>${voteA}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${data.results[count].overview}        
        </div>
    </div>
    `;
        count++;
    }
    findResult = document.querySelector('#main');
    findResult.innerHTML += viewHtml;
    navTag()
}
//페이지 호출 함수 실행
mainScreen();
//api 이벤트로 페이지 이동
document.querySelector("ul").addEventListener('click',(event)=>{
    let moveStr = event.target.textContent.trim()
    console.log(pageNum)
    console.log(moveStr)
    if(moveStr === 'Privous'){
        if(pageNum === 1){
            pageNum = 1;
        } else {
            pageNum = pageNum - 1;
        }
    } else if(moveStr === 'Next') {
        if(pageNum === 10){
            pageNum = 10;
        } else {
            pageNum = pageNum + 1;
        }
    } else {
        pageNum = Number(moveStr);
    }
    mainScreen().then(() =>{
        navTag();
    })
})
//메인페이지 페이지네이션 태그
function navTag(){
    //초기화
    let viewHtml = ``;
    resetTag = document.querySelector('ul')
    resetTag.innerHTML = viewHtml;
    //Privious
    viewHtml = `
    <li class="page-item ${Priviousdis(pageNum)}">
            <a href="#" class="page-link">Privous</a>
    </li>
    `
    for(let i =1; i <= 10; i++){
        viewHtml += `
        <li class="page-item ${Middis(pageNum,i)}">
            <a class="page-link" href="#">${i}</a>
        </li>
    `;
    }
    //Next
    viewHtml += `
    <li class="page-item ${Nextdis(pageNum)}">
            <a href="#" class="page-link " >Next</a>
    </li>
    `
    findResult = document.querySelector('ul');
    findResult.innerHTML += viewHtml;
}
function Priviousdis(pageNum){
    if(pageNum === 1){
        return "disabled"
    } else {
        return ""
    }
}
function Middis(pageNum,i){
    if(pageNum === i){
        return "active"
    } else {
        return ""
    }
}
function Nextdis(pageNum){
    if(pageNum === 10){
        return "disabled"
    } else {
        return ""
    }
}


//페이지내 검색 기능
form.addEventListener("submit", event => {
    event.preventDefault()

    let ans = document.getElementById("search")
    let keyword = ans.value;
    search(keyword);
})

//검색 함수
async function search(keyword){
    let res = await fetch(SEARCH_API + keyword);
    data = await res.json();

    let count = 0;
    let viewHtml = ``;
    //초기화
    document.querySelector('#main').remove();
    //초기화 후 다시 세팅
    let reset = document.createElement('main');
    reset.id = 'main';

    document.body.querySelector(".reset").append(reset)

    for(i in data.results){
        let voteA = data.results[count].vote_average;
        voteA = voteA.toFixed(1)
        viewHtml += `
    <div class="movie">
        <img class="movie img" src="${IMG_PATH}${data.results[count].poster_path}" alt="">
        <div class="movie-info">
        <h3>${data.results[count].title}</h3>
            <span class="${colorFind(voteA)}">${voteA}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${data.results[count].overview}
        </div>
    </div>
    `;
        count++;
    }
    findResult = document.querySelector('#main');
    findResult.innerHTML += viewHtml;
    navTag();
}

function colorFind(voteA){
    if(voteA >= 7.5){
        return 'green'
    } else if(voteA >= 6.0 && voteA < 7.5){
        return 'orange'
    } else if(voteA < 6.0) {
        return 'red'
    }
}