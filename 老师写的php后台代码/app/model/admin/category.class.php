<?php
class categoryModel extends model{
    protected static $catetree;

    /*
     * addcate()
     * 新增栏目
     * */
    function addcate(){
        $pid = $_POST['pid'];
        $catename = $_POST['catename'];
        $this->query("insert into `category` (catename,pid)values('$catename',$pid)");
        if($this->sql->connect->affected_rows>0){
            return array('url'=>'index.php?m=admin&c=category&a=add','message'=>'添加成功');
        }else{
            return array('url'=>'index.php?m=admin&c=category&a=add','message'=>'添加失败');
        }
    }

    /*
     * getcate()
     * 获取无限分类数据
     * */
    public function getcate(){
        $data = $this->getAll('select * from `category`');
        $this->tree($data,0,1);
        return self::$catetree;
    }

    /*
     * tree($data,$pid,$i)
     * 连接树结构
     * $data 数据  $pid 父栏目id  $i要重复符号数量
     * */
    private function tree($data,$pid,$i){
        foreach($data as $v){
            if($v['pid']==$pid){
                $str = str_repeat('+',$i);
                $v['tag'] = $str;
                self::$catetree[]=$v;
                $this->tree($data,$v['cid'],$i+1);
            }
        }
    }

    /*
     * changecate()
     * */
    function changecate(){
        $cid = $_POST['cid'];
        $catename = $_POST['catename'];
        $pid = $_POST['pid'];
        $this->query("update `category` set `catename`='$catename',`pid`=$pid where cid=$cid");
        return $this->sql->connect->affected_rows;
    }

    function delcate(){
        $cid = $_POST['cid'];
        $this->query("DELETE FROM `category` WHERE `cid`={$cid}");
        return $this->sql->connect->affected_rows;
    }
}