<?php
    include 'header.php';
    $id=$_GET['id'];
    $sql="select * from context where pid='$id'";
    $data=$l->query($sql)->fetch_all(MYSQLI_ASSOC);
    error_reporting(0);
?>
<?php
    $sql2="select * from category where id='$id'";
    $data2=$l->query($sql2)->fetch_all(MYSQLI_ASSOC);
?>

    <link rel="stylesheet" href="../static/css/category.css">

<div class="mbx">
    <span>面包屑导航：</span>
    <span>首页&gt;</span>
<!--面包屑导航-->
<?php
    $g1=$data2[0]['pid'];
    $sql3="select * from category where id='$g1'";
    $data3=$l->query($sql3)->fetch_all(MYSQLI_ASSOC);
   while($data3){
       ?>
           <span><?php
               echo $data3[0][name];
               ?>&gt;
           </span>
           <?php
       $g1=$data3[0]['pid'];
       $sql3="select * from category where id='$g1'";
       $data3=$l->query($sql3)->fetch_all(MYSQLI_ASSOC);
   }
?>

    <span><?php echo $data2[0]['name'];?></span>
</div>

    <div class="bigbox1">
    <h1>该栏目下的子栏目</h1>
    <?php
        $sql1="select * from category where pid='$id'";
        $data1=$l->query($sql1)->fetch_all(MYSQLI_ASSOC);
    ?>
    <ul>
        <?php foreach($data1 as $v){?>
            <li><a href="category.php?id=<?php echo $v['id'];?>"><?php echo $v['name'];?></a></li>
        <?php }?>
    </ul>
</div>

<div class="bigbox" style="overflow:hidden;">
    <h1 style="text-align: center;margin: 10px 0px;">文章列表</h1>
    <ul>
        <?php
        foreach($data as $v){
        ?>
        <li><img src="<?php echo $v['image'];?>" alt=""><a href="show.php?id=<?php echo $v['id'];?>"><?php echo $v['title'];?></a><span><?php echo $v['time'];?></span></li>
        <?php
        }
        ?>
    </ul>
</div>



<?php
    include 'footer.php';
?>