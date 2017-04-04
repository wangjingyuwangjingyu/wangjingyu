<?php
include 'dbdata.php';
$u=$_POST['u'];
$p=$_POST['p'];
$p=md5($p);
$role=$_POST['role'];
$l->set_charset("utf8");
$sql="select * from user where name='$u'";
$r=$l->query($sql);
$data=$r->fetch_all(MYSQLI_ASSOC);
if($data){
    $bian1="用户名已被占用！";
    $bian2="../phphtml/zc.html";
    include '../phphtml/ts.html';
}else{
    $sql="insert into user (name,pass,role) values ('$u','$p','$role')";
    $rrt=$l->query($sql);
    if($rrt){
        $bian1="注册成功！";
        $bian2="../phphtml/dl.html";
    }else{
        $bian1="数据库有问题！";
        $bian2="../phphtml/zc.html";
    }
    include '../phphtml/ts.html';
}