<?php
class view{
    protected static $c;
    protected static $m;
    protected static $a;
    protected static $val=array();
    function __construct($model,$controller,$action)
    {
        self::$c = $controller;
        self::$m = $model;
        self::$a = $action;
    }

    function assign($k,$v){
        self::$val[$k] = $v;
    }

    function display(){
        extract(self::$val);

        $viewPath = VIEW_PATH.self::$m.DS;
        $defaultHeader = $viewPath.'header.html';
        $defaultFooter = $viewPath.'footer.html';
        $defaultIndex = $viewPath.'index.html';

        $cHeader = $viewPath.self::$c.DS.'header.html';
        $cFooter = $viewPath.self::$c.DS.'footer.html';
        $cIndex = $viewPath.self::$c.DS.self::$a.'.html';

        if(file_exists($cHeader)){
            include $cHeader;
        }else{
            include $defaultHeader;
        }

        if(file_exists($cIndex)){
            include $cIndex;
        }else{
            include $defaultIndex;
        }

        if(file_exists($cFooter)){
            include $cFooter;
        }else{
            include $defaultFooter;
        }
    }
}