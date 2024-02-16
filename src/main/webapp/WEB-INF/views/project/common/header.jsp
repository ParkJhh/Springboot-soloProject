<%@ page import="com.kitri.solo.dto.MemberInfo" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<body>
<header>
    <%
        MemberInfo sessionMember = (MemberInfo) session.getAttribute("sessionId");
    %>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" style="color: white" href="/movie">Main page!</a>
                    <%
                        if(sessionMember != null){
                    %>
                    <p class="nav-link" style="color: white" ><%=sessionMember.getName()%>님 환영합니다!</p>
                    <a class="nav-link" style="color: white" href="/login/logout">Logout!</a>
                    <a class="nav-link" style="color: white" href="/member/mypage">My Page!</a>
                    <%} else {%>
                    <a class="nav-link" style="color: white" href="/member">Join Us!</a>
                    <a class="nav-link" style="color: white" href="/login">Login Now!</a>
                    <%}%>
                    <a class="nav-link" style="color: white" href="/board">Free Board!</a>
                    <a class="nav-link" style="color: white" href="/">use</a>
                </div>
            </div>
        </div>
    </nav>
    <form id="form">
        <input type="text" id="search" class="search" placeholder="Search">
    </form>
</header>
</body>
</html>