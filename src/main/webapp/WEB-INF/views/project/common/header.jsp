<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>

<%--<head>--%>
<%--    <meta charset="UTF-8" />--%>
<%--    <meta name="viewport" content="width=device-width, initial-scale=1.0" />--%>
<%--    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"--%>
<%--          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">--%>
<%--    <link rel="stylesheet" href="/main/mainStyle.css" />--%>
<%--    <title>Common header</title>--%>
<%--</head>--%>
<body>
<header>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="/memberadd">Join Us!</a>
                    <a class="nav-link" href="#">Pricing</a>
                </div>
            </div>
        </div>
    </nav>
    <form id="form">
        <input type="text" id="search" class="search" placeholder="Search">
    </form>
<%--    <form id="form">--%>
<%--        <input type="text" id="search" class="search" placeholder="Search">--%>
<%--    </form>--%>
</header>
</body>
</html>