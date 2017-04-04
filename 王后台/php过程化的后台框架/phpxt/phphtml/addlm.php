<?php
    include '../php/session.php';
    include '../php/dg.php';
    $fnn1=new fn();
    $datas=$fnn1->fn1(0,0,0);
?>
<link rel="stylesheet" href="../static/css/addlm.css">

<form action="../php/add123.php" method="post" enctype="application/x-www-form-urlencoded">
    <div class="num1">
        <label for="parent">父级栏目id:</label>
        <select name="pid" id="parent">
            <option value="0">一级栏目</option>
            <?php
                echo $datas;
            ?>
        </select>
    </div>
    <div class="num2">
        <label for="name">添加栏目名称:</label>
        <input type="text" placeholder="..." id="name" name="name">
    </div>
    <div class="num3">
        <label for="image">图片地址:</label>
        <input id="image" type="text" placeholder="imageURL/..." name="image">
    </div>
    <div class="num4">
        <input type="submit" value="添加一条栏目">
    </div>
</form>

