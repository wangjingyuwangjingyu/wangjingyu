<?php
class session{
    function __construct()
    {
        session_start();
    }

    function set($k,$v){
        if(is_array($k)){
            foreach($k as $key=>$val){
                $_SESSION[$key] = $val;
            }
        }else{
            $_SESSION[$k] = $v;
        }
    }

    function get($k){
        return $_SESSION[$k];
    }

    function del($k){
        unset($_SESSION[$k]);
    }
    function clear(){
        unset($_SESSION);
    }

    function destroy(){
        session_destroy();
    }
}