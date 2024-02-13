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
        <p style="font-size: 15px; font-weight:bold; color: white; line-height: 60px;"  ><%=sessionMember.getName()%> 님 환영합니다!</p>
        <p style="font-size: 15px; font-weight:bold; color: white; line-height: 60px;"> 내가 작성한 글 수 : </p>
        <p style="font-size: 15px; font-weight:bold; color: white; line-height: 60px;" >내가 작성한 댓글 수 : </p>

        <a style="font-size: 15px; font-weight:bold; color: white" href="/member/memberupdate">회원정보 수정</a><br>
        <a style="font-size: 15px; font-weight:bold; color: white" href="/member/memberout">회원 탈퇴</a>
    </div>
</div>
<script>
    let memberError = '${memberError}'
</script>
<script src="/member/script.js"></script>
</body>
</html>