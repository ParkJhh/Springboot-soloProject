const api = "/api/boards"

//게시판 시작수
let boardNo = 0;
//게시판 한 화면 최대수
let boardCount = 15;
//페이지 수
let pageNum = 1;



async function First(){
    let res = await fetch(api);
    data = await res.json();

    console.log(data)

    let viewHtml = ``;
    resetBoard = document.querySelector('tbody')
    resetBoard.innerHTML = viewHtml;

    for(i in data){
        if(boardNo !== boardCount) {
            viewHtml += `
            <tr>
                <th scope="row">${data[boardNo].boardid}</th>
                <td><a href="/board/detail?id=">${data[boardNo].title}</a></td>
                <td>${data[boardNo].writer}</td>
                <td>${data[boardNo].createdAt}</td>
                <td>${data[boardNo].viewcount}</td>
                <td>${data[boardNo].commentcount}</td>
                <td>${data[boardNo].likecount}</td>
            </tr>
            `;
            boardNo++;
        }
    }
    boardNo = 0;

    boardResult = document.querySelector('tbody');
    boardResult.innerHTML += viewHtml;
}
//초기 데이터 조회
First();

document.querySelector("ul").addEventListener('click',(event)=>{
    let moveStr = event.target.textContent.trim()
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
    First().then(() =>{
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
