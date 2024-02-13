<%@ page import="com.kitri.solo.dto.MemberInfo" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<%@include file="/WEB-INF/views/project/common/head.jsp"%>
<link rel="stylesheet" href="/member/member.css" />
<body>

<%@include file="/WEB-INF/views/project/common/header.jsp"%>

<div class="container">
    <div class="title">Join Us!</div>
    <div class="content">
        <form action="/memberadd/chk" method="post">
            <div class="user-details">
                <div class="input-box">
                    <span class="details">이메일</span>
                    <input type="text" name="email" id="email" placeholder="이메일 주소를 입력하세요" required>
                </div>
                <div class="input-box">
                    <span class="details">이름</span>
                    <input type="text" name="name" id="name" placeholder="이름을 입력하세요" required>
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
                    <input type="text" name="introduce" id="introduce" placeholder="간단한 자기소개!(30자 이내입니다.)">
                </div>
            </div>
            <div class="button">
                <input type="submit" value="가입하기">
            </div>
        </form>
    </div>
</div>
<script></script>
</body>
</html>