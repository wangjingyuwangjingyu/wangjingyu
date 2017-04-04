<?php
    define('H','localhost');
    define('U','root');
    define('P','');
    define('D','zphp');
    $l=new mysqli(H,U,P,D);
    if($l->connect_error){
        echo "连接失败!!!";
        exit();
    }
?>