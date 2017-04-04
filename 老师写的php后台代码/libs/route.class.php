<?php
class route{
    protected static $c;
    protected static $m;
    protected static $a;

    function init(){
        $this->dispatch();
    }

    function dispatch(){
        self::$m = isset($_REQUEST['m'])?$_REQUEST['m']:'index'; //admin  index
        self::$c = isset($_REQUEST['c'])?$_REQUEST['c']:'index'; //
        self::$a = isset($_REQUEST['a'])?$_REQUEST['a']:'init';
        $file = CONTROLLER_PATH.self::$m.DS.self::$c.'.class.php';

        //文件   类   方
        if(file_exists($file)){
            include $file;
            if(class_exists(self::$c)){
                $ctrl = new self::$c(self::$m,self::$c,self::$a);
                $action = self::$a;
                if(method_exists($ctrl,$action)){
                    $ctrl->$action();
                }else{
                    echo $action.'方法不存在!';
                }
            }else{
                echo self::$c.'类不存在！';
            }
        }else{
            echo $file.'文件不存在！';
        }

    }
}