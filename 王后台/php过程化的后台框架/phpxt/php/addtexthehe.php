<?php
    include 'session.php';
    include 'dbdata.php';
    $l->set_charset('utf8');
$pid=$_POST['pid'];
$title=$_POST['title'];
$image=$_POST['image'];
$text=$_POST['text'];
$time=$_POST['time'];

if(!$pid){
    $bian1='警告：父级栏目必选!';
    $bian2='../phphtml/addtext.php';
    include '../phphtml/ts.html';
    exit();
}
$sql="select * from context where title='$title'";
$r=$l->query($sql);
if($r->num_rows>0){
    $bian1='内容重复，请重新添加！';
}else{
    $sql="insert into context(title,text,image,pid) values('$title','$text','$image','$pid')";
    $r=$l->query($sql);
    if($r){
        $bian1='添加内容成功！';
    }else{
        $bian1='添加数据失败！';
    }
}
$bian2='../phphtml/gltext.php';
include '../phphtml/ts.html';
?>