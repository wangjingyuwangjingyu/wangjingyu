<?php
class loginModel extends model{
    //验证登录
    public function checkuser(){
        $u = $_REQUEST['username'];
        $p = md5($_REQUEST['password']);
        $all = $this->getAll('select * from admin');
        foreach($all as $v){
            if($v['username']==$u&&$v['password']==$p){
                $_SESSION['is_login'] = true;
                $_SESSION['username'] = $u;
                return Array('url'=>'index.php?m=admin&c=index&a=init','message'=>'登录成功');
            }else{
                return Array('url'=>'index.php?m=admin&c=login&a=init','message'=>'登录失败');
            }
        }
    }

    function loginOut(){
        session_destroy();
    }
}