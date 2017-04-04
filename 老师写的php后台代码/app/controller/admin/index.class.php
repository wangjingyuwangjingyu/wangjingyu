<?php
class index extends controller{
    function init(){
        $this->checkrole();
        $this->display();
    }
}