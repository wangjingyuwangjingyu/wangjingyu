<?php
class model{
//    protected static $sql;
    //parent::$sql
    function __construct()
    {
        $this->sql = new sql();
    }

    function query($sql){
        return $this->sql->query($sql);
    }

    function getAll($sql){
        return $this->sql->getAll($sql);
    }
    function getResult($sql){
        return $this->sql->getResult($sql);
    }



}