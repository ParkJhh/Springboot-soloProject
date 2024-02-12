//경고
AlertError(memberError);

function AlertError(memberErr){
    if(memberErr == "etc") {
        alert("입력하신 양식의 일부가 틀렸습니다. \n 확인 후 다시 입력하시기 바랍니다.")
    }
    if(memberErr == "pwerror") {
        alert("비밀번호가 확인과 다릅니다. \n 확인 후 다시 입력하시기 바랍니다.")
    }
    if(memberErr == "emailerror") {
        alert("이미 회원가입한 이메일입니다. \n 확인 후 다시 입력하시기 바랍니다.")
    }
}