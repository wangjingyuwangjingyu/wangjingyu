<?php
class category extends controller{
    protected static $cateModel;
    function __construct($model, $controller, $action)
    {
        include MODEL_PATH.'admin'.DS.'category.class.php';
        self::$cateModel = new categoryModel();
        parent::__construct($model, $controller, $action);
    }

    function add(){
        $this->assign('cates',self::$cateModel->getcate());
       $this->display();
    }

    function addcategory(){
        $data = self::$cateModel->addcate();
        $this->redirect($data['url'],$data['message'],1);
    }

    function manage(){
        $this->assign('cates',self::$cateModel->getcate());
        $this->display();
    }

    function changecategory(){
        echo self::$cateModel->changecate();
    }

    function delcategory(){
        echo self::$cateModel->delcate();
    }
}