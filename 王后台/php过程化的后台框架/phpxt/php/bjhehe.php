<?php
include "session.php";
include 'dbdata.php';
$text=$_POST['text'];
$time=$_POST['time'];
$image=$_POST['image'];
$title=$_POST['title'];
$pid=$_POST['pid'];
$id=$_POST['id'];
$l->set_charset('utf8');
$sql="update context set title='$title',image='$image',text='$text',pid='$pid' where id='$id'";
$r=$l->query($sql);
if($r){
    $bian1='修改内容成功！';
}else{
    $bian1='修改失败！';
}
$bian2='../phphtml/gltext.php';
include '../phphtml/ts.html';
?>