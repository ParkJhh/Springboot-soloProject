const api = "/api/boards"

async function First(){
    let res = await fetch(api);
    data = await res.json();
    //태그 초기화
    console.log(data)
}
//초기 데이터 조회
First();
