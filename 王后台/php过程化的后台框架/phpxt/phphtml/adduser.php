<?php
include '../php/session.php';
?>

<link rel="stylesheet" href="../static/css/addgly.css">


<form action="../php/addgly.php" method="post" enctype="application/x-www-form-urlencoded">
    <div>
        <label for="d1">管理员账号：</label>
        <input type="text"id="d1" name="name" placeholder="...">
    </div>
    <div>
        <label for="d2">管理员密码：</label>
        <input type="password" id="d2" name="pass" placeholder="...">
    </div>
    <div>
        <label for="d2">重新输密码：</label>
        <input type="password" id="d2" placeholder="再次确认密码...">
    </div>
    <div>
        <label for="d3">管理员权限：</label>
        <input type="text" id="d3" name="role" value="0">
    </div>
    <div class="op1">
        <input type="submit" value="添加管理员">
    </div>
</form>

