<?php
include "session.php";
include 'dbdata.php';
$id=$_GET['id'];
$l->set_charset('utf8');
$sql="delete from user where id='$id'";
$l->query($sql);
if($l){
    $bian1='删除成功！';
}else{
    $bian1='删除失败！';
}
$bian2='../phphtml/gluser.php';
include '../phphtml/ts.html';
?>