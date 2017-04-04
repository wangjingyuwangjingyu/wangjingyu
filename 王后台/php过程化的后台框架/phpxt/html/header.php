<?php
    include '../php/dbdata.php';
    $sql="select * from category where pid=0";
    $l->set_charset('utf8');
    $data=$l->query($sql)->fetch_all(MYSQLI_ASSOC);
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="../static/css/header.css">
</head>
<body>

<header>
    <div class="left">
        <img src="../static/images/asjhdg.jpg" alt="">
    </div>
    <ul class="right">
        <li><a href="">首页</a></li>

        <?php foreach ($data as $v) {
            ?>
            <li><a href="category.php?id=<?php echo $v['id'];?>"><?php echo $v['name'];?></a></li>
            <?php
                }
            ?>
    </ul>
</header>




