//경고
AlertError(memberError);
function AlertError(memberErr){
    //회원 가입
    if(memberErr === "etc") {
        alert("입력하신 양식의 일부가 틀렸습니다. \n 확인 후 다시 입력하시기 바랍니다.")
    }
    if(memberErr === "pwerror") {
        alert("비밀번호가 확인과 다릅니다. \n 확인 후 다시 입력하시기 바랍니다.")
    }
    if(memberErr === "emailerror") {
        alert("이미 회원가입한 이메일입니다. \n 확인 후 다시 입력하시기 바랍니다.")
    }
    //정보 수정
    if(memberErr === "OK") {
        alert("회원정보 수정이 완료되었습니다!")
    }
    //회원 탈퇴
    if(memberErr === "outerror") {
        alert("탈퇴 확인 이메일이 다릅니다!")
    }
    if(memberErr === "outchkerror") {
        alert("로그인 이메일과 탈퇴 확인 이메일이 다릅니다!")
    }
}
