<?php
    define('DS',DIRECTORY_SEPARATOR);

    define('ROOT',__DIR__ . DS);
    //http://localhost/phpmvc3-10/
    define('WEB_PATH','http://'.$_SERVER['SERVER_NAME'].substr($_SERVER['SCRIPT_NAME'],0,strrpos($_SERVER['SCRIPT_NAME'],'/')).'/');

    define('LIB_PATH',ROOT.'libs'.DS);
    define('CONFIG_PATH',ROOT.'config'.DS);
    define('STATIC_PATH',WEB_PATH.'static'.DS);

    define('UPLOAD_PATH',ROOT.'upload'.DS);
    define('APP_PATH',ROOT.'app'.DS);


    define('CONTROLLER_PATH',APP_PATH.'controller'.DS);
    define('MODEL_PATH',APP_PATH.'model'.DS);
    define('VIEW_PATH',APP_PATH.'view'.DS);
    define('PLUGIN_PATH',WEB_PATH.'app/plugin/');

    define('CSS_PATH',STATIC_PATH.'css'.DS);
    define('IMG_PATH',STATIC_PATH.'images'.DS);
    define('JS_PATH',STATIC_PATH.'js'.DS);

    include LIB_PATH.'route.class.php'; //路由
    include LIB_PATH.'view.class.php';  //视图类基类
    include LIB_PATH.'controller.class.php'; //控制器基类
    include LIB_PATH.'model.class.php';
    include CONFIG_PATH.'config.php';
    include LIB_PATH.'sql.class.php';
    include LIB_PATH.'session.class.php';

    (new route())->init();




