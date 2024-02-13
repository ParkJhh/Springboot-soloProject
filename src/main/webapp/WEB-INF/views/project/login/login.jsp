<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<%@include file="/WEB-INF/views/project/common/head.jsp"%>
<link rel="stylesheet" href="/login/login.css" />
<body>
<%@include file="/WEB-INF/views/project/common/header.jsp"%>

<div class="wrapper">
    <div class="title">
        LOGIN FORM
    </div>
    <form action=/login method="post">
        <div class="field">
            <input type="text" name="email" id="email" value="${cookie.rememberme.value}" required>
            <label>이메일 주소</label>
        </div>
        <div class="field">
            <input type="password" name="password" id="password" required>
            <label>비밀번호</label>
        </div>
        <div class="content">
            <div class="checkbox">
                <%--체크시 "ON" 전달--%>
                <input type="checkbox" id="rememberme" ${cookie.rememberme.value != "" ? 'checked' : ''}>이메일 주소 저장</input>
            </div>
        </div>
        <div class="field">
            <input type="submit" value="로그인">
        </div>
        <div class="signup-link">
            <p>회원이 아니신가요?<p>
            <a href="/memberadd"> 회원가입 </a>
        </div>
    </form>
</div>

<script src="/login/script.js"></script>
</body>
</html>