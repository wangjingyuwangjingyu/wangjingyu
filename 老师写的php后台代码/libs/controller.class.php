<?php
class controller{
    protected static $_view;
    function __construct($model,$controller,$action)
    {
        self::$_view = new view($model,$controller,$action);
        new session();
    }
    /*
     * assign()
     * 给视图绑定对应的数据
     * */
    function assign($k,$v){
        self::$_view->assign($k,$v);
    }
    /*
     * display()
     * 显示对应的视图文件
     * */
    function display(){
        self::$_view->display();
    }
    /*
     * redirect($url,$message,$wait)
     * 重定向到指定的url，并提示信息
     *
     * */
    function redirect($url,$message,$wait=0){
        if($wait==0){
            header("Location:{$url}");
        }else{
            include VIEW_PATH.'message.html';
        }
    }

    /*
     * chenckrole()
     * 验证后台是否有权限登录
     * */
    function checkrole(){
        if(!isset($_SESSION['is_login'])){
            $this->redirect('index.php?m=admin&c=login&a=init','请登录',1);
            exit();
        }
    }
}