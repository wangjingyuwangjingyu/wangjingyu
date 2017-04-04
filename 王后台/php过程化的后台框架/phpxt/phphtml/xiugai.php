<?php
include "../php/session.php";
include "../php/dg.php";
include "../php/dbdata.php";
$l->set_charset('utf8');
$iid=$_GET['id'];
$sql1="select * from category where id='$iid'";
$r1=$l->query($sql1);
$data1=$r1->fetch_all(MYSQLI_ASSOC);

$fnn=new fn();
$datas=$fnn->fn1(0,0,0,$data1[0][pid]);




?>

<link rel="stylesheet" href="../static/css/addlm.css">
<form action="../php/xglm.php" method="post" enctype="application/x-www-form-urlencoded">
    <div class="num1">
        <label for="parent">修改父级栏目id:</label>
        <select name="pid" id="parent">
            <option value="0">一级栏目</option>
            <?php
            echo $datas;
            ?>
        </select>
    </div>
    <div class="num2">
        <label for="name">修改栏目名称:</label>
        <input type="text" value="<?php echo $data1[0][name];?>" id="name" name="name">
    </div>
    <div class="num3">
        <label for="image">修改图片地址:</label>
        <input id="image" type="text" value="<?php echo $data1[0][image];?>" name="image">
    </div>
    <input type="text" style="width: 0px;height: 0px;opacity: 0;" value="<?php echo $iid;?>" name="iid">
    <div class="num4">
        <input type="submit" value="修改一条栏目">
    </div>
</form>




