<?php
    include '../php/session.php';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="../static/css/index.css">
</head>
<body>
<header>
    <span>后台管理系统</span>
    <div class="ff2">
        欢迎<span style="color: red;font-size: 18px;">
                <?php
                    echo $_SESSION['timename'];
                ?>
            </span>
        用户登录
    </div>
    <div class="close">
        <button><a href="close.php">退出管理系统</a></button>
    </div>
</header>

<section>
    <div class="left">
        <ul class="fl">
            <li class="f2">用户管理</li>
           <ul class="f3">
               <li><a class="f5" href="adduser.php" target="view">新增用户<span class="f4">&gt;</span></a></li>
               <li><a class="f5" href="gluser.php" target="view">管理用户<span  class="f4">&gt;</span></a></li>
           </ul>
        </ul>
        <ul class="fl">
            <li class="f2">栏目管理</li>
            <ul class="f3">
                <li><a class="f5" href="addlm.php" target="view">新增栏目<span class="f4">&gt;</span></a></li>
                <li><a class="f5" href="gllm.php" target="view">管理栏目<span  class="f4">&gt;</span></a></li>
            </ul>
        </ul>
        <ul class="fl">
            <li class="f2">内容管理</li>
            <ul class="f3">
                <li><a class="f5" href="addtext.php" target="view">新增内容<span class="f4 ff4">&gt;</span></a></li>
                <li><a class="f5" href="gltext.php" target="view">管理内容<span  class="f4 ff4">&gt;</span></a></li>
            </ul>
        </ul>
    </div>
    <!--视图区-->
    <div class="right">
        <iframe src="welcome.html" name="view">
        </iframe>
    </div>
</section>


</body>
</html>