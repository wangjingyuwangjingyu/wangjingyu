<?php
class contentModel extends model{
    function addCont(){
        $title = $_POST['title'];
        $content = $_POST['content'];
        $cid = $_POST['cid'];
        $user = $_SESSION['username'];
        $posid = isset($_POST['posid'])?$_POST['posid']:0;
        $this->query("insert into `content`(cid,title,content,author,posid)VALUES ($cid,'$title','$content','$user',$posid)");
        if($this->sql->connect->affected_rows>0){
            $message = "添加成功";
        }else{
            $message = "添加失败";
        }
        return array('url'=>'index.php?m=admin&c=content&a=add','message'=>$message);
    }

    function getLists(){
        $nowPage = isset($_GET['page'])?$_GET['page']:1;

        $pageNums = isset($_GET['pageNums']) ?$_GET['pageNums']:5;

        $rows = $this->query('select * from content')->num_rows;
        $pages =ceil($rows/$pageNums);

        if($nowPage>$pages){
            $nowPage = $pages;
        }
        if($nowPage<=1){
            $nowPage = 1;
        }

        $offset = ($nowPage-1)*$pageNums;
        $data = $this->getAll("select * from content limit $offset,$pageNums");
        return Array('pages'=>$pages,'total'=>$rows,'nowPage'=>$nowPage,'data'=>$data);
    }

    function getId(){
        $id = $_GET['id'];
        return $this->getAll("select * from content where id=$id")[0];
    }

    function saveEditContent(){
        $title = $_POST['title'];
        $cid = $_POST['cid'];
        $content = $_POST['content'];
        $id = $_POST['id'];
        $posid = isset($_POST['posid'])?$_POST['posid']:0;
        $this->query("update content set title='$title',cid=$cid,content='$content',posid=$posid where id=$id");
        if($this->sql->connect->affected_rows>0){
            return array('url'=>"index.php?m=admin&c=content&a=lists",'message'=>'修改成功');
        }else{
            return array('url'=>"index.php?m=admin&c=content&a=edit&id={$id}",'message'=>'修改失败');
        }
    }


    function delContent(){
        $id = $_GET['id'];
        $this->query("delete from content where id=$id");
        if($this->sql->connect->affected_rows>0){
            return array('url'=>"index.php?m=admin&c=content&a=lists",'message'=>'删除成功');
        }else{
            return array('url'=>"index.php?m=admin&c=content&a=lists",'message'=>'删除失败');
        }
    }


    function getPos(){
        return $this->getAll('select * from position');
    }
}