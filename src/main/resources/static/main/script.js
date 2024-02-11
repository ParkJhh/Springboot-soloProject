const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

//페이지 호출 함수
async function test(){
    let res = await fetch(API_URL);
    data = await res.json();

    console.log(data.results[0].title);
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
}
//페이지 호출 함수 실행
test()

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

    console.log(data)
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