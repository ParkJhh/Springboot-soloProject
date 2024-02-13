//탈퇴 경고
alert("탈퇴를 누르신게 맞습니까?")
//탈퇴 confirm 호출
deleteEvent();

function deleteEvent(){
    if (confirm("정말 삭제하시겠습니까?? \n취소시 이전페이지로 돌아갑니다.") == true){    //확인
        return true
    } else {   //취소
        history.back();
    }
}