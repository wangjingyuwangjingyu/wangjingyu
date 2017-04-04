<?php
include 'session.php';
include 'dbdata.php';
$name=$_POST['name'];
$pid=$_POST['pid'];
$image=$_POST['image'];
$l->set_charset('utf8');
$sql="insert into category (name,image,pid) values('$name','$image','$pid')";
$r=$l->query($sql);
if($r){
    $bian1="添加栏目成功！";
}else{
    $bian1="添加栏目失败，请重新确认！";
}
$bian2="../phphtml/addlm.php";
include '../phphtml/ts.html';
