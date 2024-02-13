<%@ page import="com.kitri.solo.dto.MemberInfo" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<%@include file="/WEB-INF/views/project/common/head.jsp"%>
<link rel="stylesheet" href="/member/member.css" />
<body>

<%@include file="/WEB-INF/views/project/common/header.jsp"%>

<div class="container">
    <div class="title">Update Your Infomation!</div>
    <div class="content">
        <form action="/member/nowUpdate" method="post">
            <div class="user-details">
                <div class="input-box">
                    <span class="details">이메일(수정하실 수 없습니다.)</span>
                    <input type="text" name="email" id="email" placeholder="이메일 주소를 입력하세요"
                           value="<%=sessionMember.getEmail()%>" readonly>
                </div>
                <div class="input-box">
                    <span class="details">이름</span>
                    <input type="text" name="name" id="name" placeholder="이름을 입력하세요"
                            value="<%=sessionMember.getName()%>" required>
                </div>
                <div class="input-box">
                    <span class="details">비밀번호</span>
                    <input type="password" name="password" id="password" placeholder="비밀번호를 입력하세요" required>
                </div>
                <div class="input-box">
                    <span class="details">비밀번호 확인</span>
                    <input type="password" name="passwordChk" id="passwordChk" placeholder="비밀번호를 확인해주세요" required>
                </div>
                <div class="input-box">
                    <span class="details">생년월일</span>
                    <input type="date" name="birthday" id="birthday" required>
                </div>
                <div class="input-box">
                </div>
                <div class="input-box">
                    <span class="details">자기소개</span>
                    <input type="text" name="introduce" id="introduce" value="<%=sessionMember.getIntroduce()%>">
                </div>
            </div>
            <div class="button">
                <input type="submit" value="수정하기">
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