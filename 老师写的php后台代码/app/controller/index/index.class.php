<?php
class index extends controller{
    function init(){
        parent::assign('title','你好吗？');
        parent::display();
    }
}