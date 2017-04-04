<?php
include 'session.php';
include 'dbdata.php';
    $name=$_POST['name'];
    $pass=$_POST['pass'];
    $role=$_POST['role'];
    $pass=md5($pass);
$sql="select * from user where name='$name'";
$r=$l->query($sql);
if($r->num_rows>0){
    $bian1='管理员已存在...';
}else{
    $sql="insert into user(name,pass,role) values('$name','$pass','$role')";
    $r=$l->query($sql);
    if($r){
        $bian1='管理员添加成功...';
    }else{
        $bian1='管理员添加失败！';
    }
}
$bian2='../phphtml/adduser.php';
include '../phphtml/ts.html';

    ;