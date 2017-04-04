<?php
include 'session.php';
include 'dbdata.php';
$id=$_POST['iid'];
$spid=$_POST['pid'];
$simage=$_POST['image'];
$sname=$_POST['name'];
$l->set_charset('utf8');
$sql="update category set name='$sname',image='$simage',pid='$spid' where id='$id'";
$data=$l->query($sql);
if($data){
    $bian1='修改成功！';
}else{
    $bian1='修改失败！';
}
$bian2='../phphtml/gllm.php';
include "../phphtml/ts.html";

