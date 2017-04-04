<?php
class login extends controller{
        protected static $loginM;
        function __construct($model, $controller, $action)
        {

            include MODEL_PATH.'admin'.DS.$controller.'.class.php';
            self::$loginM =(new loginModel());
            parent::__construct($model, $controller, $action);
        }
    function init(){
        $this->display();
    }

    function checklogin(){
        $data = self::$loginM->checkuser();
        $this->redirect($data['url'],$data['message']);
    }

    function loginOut(){
        self::$loginM->loginOut();
        $this->redirect('index.php?m=admin&c=login&a=init','退出登录',1);
    }
}