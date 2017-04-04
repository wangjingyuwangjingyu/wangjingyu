<?php
@include 'session.php';
error_reporting(0);
class fn{
    function __construct($str='',$strfh='')
    {
      $this->str=$str;
        $this->strfh;
    }
    function fn1($id=0,$index,$pid=0,$ds1=''){
        include 'dbdata.php';
        $l->set_charset('utf8');
        $sql="select * from category where pid='$pid'";
        $r=$l->query($sql);
        $index++;
        while($data=$r->fetch_assoc()){
            if($data){
                $this->strfh='';
                for($i=0;$i<$index;$i++){
                    $this->strfh.='*';
                }
                if($data[id]==$ds1){
                    $this->str.="<option value='".$data[id]."' selected='selected'>".$this->strfh.$data[name]."</option>";
                }else{
                    $this->str.="<option value='".$data[id]."'>".$this->strfh.$data[name]."</option>";
                }
            }else{
                return $this->str;
            }
            $this->fn1(0,$index,$data[id],$ds1);
        }
        return $this->str;
    }
    function fn2($id=0,$index,$pid=0){
        include 'dbdata.php';
        $l->set_charset('utf8');
        $sql="select * from category where pid='$pid'";
        $r=$l->query($sql);
        $index++;
        while($data=$r->fetch_assoc()){
            if($data){
                $this->strfh='';
                for($i=0;$i<$index;$i++){
                    $this->strfh.='*';
                }
                $this->strfh.='&nbsp;&nbsp;&nbsp;&nbsp;';
                $this->str.="<tr><td>".$data[id]."</td><td>".$this->strfh.$data[name]."</td><td>".$data[image]."</td><td>".$data[pid]."</td><td><a href='../php/dellm.php?id=".$data[id]."'>删除</a></td><td><a href='xiugai.php?id=".$data[id]."'>修改</a></td></tr>";
            }else{
                return $this->str;
            }
            $this->fn2(0,$index,$data[id]);
        }
        return $this->str;
    }
}