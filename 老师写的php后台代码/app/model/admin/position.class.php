<?php
class positionModel extends model{
    function addPos(){
        $posname = $_POST['posname'];

        $this->query("insert into `position` (posname)values('$posname')");
        if($this->sql->connect->affected_rows>0){
            $message = "添加成功";
        }else{
            $message = "添加失败";
        }
        return array('url'=>'index.php?m=admin&c=position&a=add','message'=>$message);
    }

    function getPos(){
        return $this->getAll('select * from position');
    }

    function getOne(){
        $posid = $_GET['posid'];
        return $this->getAll("select * from position where posid=$posid")[0];
    }

    function editPos(){
        $posid = $_POST['posid'];
        $posname = $_POST['posname'];
        $this->query("update position set posname='$posname' where posid=$posid");
        if($this->sql->connect->affected_rows>0){
            return array('url'=>'index.php?m=admin&c=position&a=lists','message'=>'修改成功');
        }else{
            return array('url'=>'index.php?m=admin&c=position&a=edit&posid='.$posid,'message'=>'修改失败');
        }

    }

    function delPos(){
        $posid = $_GET['posid'];
        $this->query("delete from `position` where posid=$posid");
        if($this->sql->connect->affected_rows>0){
            return array('url'=>'index.php?m=admin&c=position&a=lists','message'=>'删除成功');
        }else{
            return array('url'=>'index.php?m=admin&c=position&a=lists','message'=>'删除失败');
        }
    }
}