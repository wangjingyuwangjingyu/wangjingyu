<?php
    include 'session.php';
    include 'dbdata.php';
    $id=$_POST['id'];
    $name=$_POST['name'];
    $pass=$_POST['pass'];
    $pass=md5($pass);
    $role=$_POST['role'];
    $l->set_charset('utf8');
    $sql="update user set name='$name',pass='$pass',role='$role' where id='$id'";
    $r=$l->query($sql);
if($r){
    $bian1='修改成功！';
}else{
    $bian1='修改失败！';
}
    $bian2='../phphtml/gluser.php';
    include '../phphtml/ts.html';
?>