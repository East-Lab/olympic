<?php

class IndexController extends ControllerBase
{

    public function initialize()
    {
        $this->assets
            ->addCss('css/style.css')
            ->addCss('css/index.css');

        $this->assets
            ->addJs('js/jquery.js')
            ->addJs('js/bootstrap.min.js');

        $this->view->title = "NUM of MEDALS";
    }

    public function indexAction()
    {
        $this->view->hoge = $this->medalManager->get();
    }

}

