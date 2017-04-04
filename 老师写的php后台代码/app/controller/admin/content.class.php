<?php
class content extends controller{
    protected static $categoryModel;
    protected static $contentModel;
    function __construct($model, $controller, $action)
    {
        include MODEL_PATH.'admin'.DS.'category.class.php';
        include MODEL_PATH.'admin'.DS.'content.class.php';
        self::$categoryModel = new categoryModel();
        self::$contentModel = new contentModel();
        parent::__construct($model, $controller, $action);
    }

    function add(){
        $this->assign('pos',self::$contentModel->getPos());
        $this->assign('cates',self::$categoryModel->getcate());
        $this->display();
    }

    function addContent(){
        $data = self::$contentModel->addCont();
        $this->redirect($data['url'],$data['message'],1);
    }

    function lists(){
        $this->assign('pages',self::$contentModel->getLists());
        $this->display();
    }

    function edit(){
        $this->assign('pos',self::$contentModel->getPos());
        $this->assign('article',self::$contentModel->getId());
        $this->assign('cates',self::$categoryModel->getcate());
        $this->display();
    }

    function saveEdit(){
        $data = self::$contentModel->saveEditContent();
        $this->redirect($data['url'],$data['message'],1);
    }

    function del(){
        $data = self::$contentModel->delContent();
        $this->redirect($data['url'],$data['message'],1);
    }
}