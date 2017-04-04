<?php
    include 'dbdata.php';
    $u=$_POST['u'];
    $p=$_POST['p'];
    $p=md5($p);
$l->set_charset("utf8");
$sql="select * from user where name='$u' and pass='$p'";
$r=$l->query($sql);
$data=$r->fetch_all(MYSQLI_ASSOC);
if($data){
    session_start();
    $_SESSION['timeid']=true;
    $_SESSION['timename']=$data[0][name];
    $bian1='欢迎登录...';
    $bian2='../phphtml/index.php';
}else{
    $bian1='登陆失败，请检查输入!';
    $bian2='../phphtml/dl.html';
}
include '../phphtml/ts.html';