<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<%@include file="/WEB-INF/views/project/common/head.jsp"%>
<link rel="stylesheet" href="/board/board.css" />
<body>
<%@include file="/WEB-INF/views/project/common/header.jsp"%>
<div class="d-flex justify-content-center" >
    <h1 style="color: white; font-weight: bold" > Free Board! </h1>
</div>

<div class="d-flex justify-content-center" >
    <table class="table">
        <thead class="table-dark">
        <tr>
            <th scope="col">No.</th>
            <th scope="col">제목</th>
            <th scope="col">작성자</th>
            <th scope="col">작성일자</th>
            <th scope="col">조회수</th>
            <th scope="col">댓글수</th>
        </tr>
        </thead>
        <tbody class="table-group-divider">
            <tr>
                <th scope="row"></th>
                <td><a href="/board/detail?id="></a></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>
<script src="/board/script.js"></script>
</body>
</html>