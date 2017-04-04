<?php
class position extends controller{
    protected static $positionModel;
    function __construct($model, $controller, $action)
    {
        include MODEL_PATH.'admin'.DS.'position.class.php';
        self::$positionModel = new positionModel();
        parent::__construct($model, $controller, $action);
    }

    function add(){
        $this->display();
    }

    function addPosition(){
        $data = self::$positionModel->addPos();
        $this->redirect($data['url'],$data['message'],1);
    }


    function lists(){
        $this->assign('pos',self::$positionModel->getPos());
        $this->display();
    }

    function edit(){
        $this->assign('pos',self::$positionModel->getOne());
        $this->display();
    }

    function editposition(){
        $data = self::$positionModel->editPos();
        $this->redirect($data['url'],$data['message'],1);
    }

    function del(){
        $data = self::$positionModel->delPos();
        $this->redirect($data['url'],$data['message'],1);
    }
}