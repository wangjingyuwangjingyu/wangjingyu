<?php
class sql{
    function __construct()
    {
        $this->connect = new mysqli(HOST,USERNAME,PASSWORD,DBNAME,PORT);
        $this->setCharset(CHARSET);
    }
    function setCharset($charset){
        $this->connect->set_charset($charset);
    }
    function query($sql){
        return $this->connect->query($sql);
    }

    function getAll($sql){
        $resulte= $this->query($sql);
        return $resulte->fetch_all(MYSQLI_ASSOC);
    }

    function getResult($sql){
        return $this->query($sql);
    }
}

//