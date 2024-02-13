<%@ page import="com.kitri.solo.dto.MemberInfo" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<%@include file="/WEB-INF/views/project/common/head.jsp"%>
<link rel="stylesheet" href="/member/member.css" />
<body>

<%@include file="/WEB-INF/views/project/common/header.jsp"%>

<div class="container">
    <div class="title">My Page!</div>
    <div class="content">
        <%--헤더에 있으므로 여기서 사용 가능--%>
        <p style="font-size: 15px; font-weight:bold; color: white; line-height: 60px;"><%=sessionMember.getName()%> 님 환영합니다!</p>
        <p style="font-size: 15px; font-weight:bold; color: white; line-height: 60px;"> 내가 작성한 글 수 : </p>
        <p style="font-size: 15px; font-weight:bold; color: white; line-height: 60px;">내가 작성한 댓글 수 : </p>
        <br>
        <p style="font-size: 15px; font-weight:bold; color: white; line-height: 60px;" >탈퇴를 위해 아래 정보를 다시 입력해주세요.</p>
        <form action="/member/outconfirm" method="post">
            <div class="user-details">
                <div class="input-box">
                    <span class="details" style="color: crimson">이메일</span>
                    <input type="text" name="email" id="email" placeholder="이메일 주소를 입력하세요" required>
                </div>
                <div class="input-box">
                    <span class="details" style="color: crimson">이메일 확인</span>
                <input type="text" name="emailChk" placeholder="이메일 주소를 다시 입력하세요" required>
            </div>
            </div>
            <div class="button">
                <input type="submit" value="회원 탈퇴">
            </div>
        </form>
    </div>
</div>
<script>
    let memberError ='${memberError}'
</script>
<script src="/member/script.js"></script>
</body>
</html>