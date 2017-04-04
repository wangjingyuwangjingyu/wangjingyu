<?php
    include 'session.php';
    include 'dbdata.php';
    $id=$_GET['id'];
    $l->set_charset('utf8');
    $sql="delete from context where id='$id'";
    $r=$l->query($sql);
    if($r){
        $bian1='删除内容成功！';
    }else{
        $bian1='删除失败!';
    }
    $bian2='../phphtml/gltext.php';
    include '../phphtml/ts.html';
?>