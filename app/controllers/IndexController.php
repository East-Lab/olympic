<?php

class IndexController extends ControllerBase
{

    public function initialize()
    {
        $this->assets
            ->addCss('css/flexslider.css')
            ->addCss('css/bootstrap.min.css');

        $this->assets
            ->addJs('js/jquery.js')
            ->addJs('js/bootstrap.min.js')
            ->addJs('js/jquery.flexslider.js')
            ->addJs('js/main.js');

        $this->view->title = "NUM of MEDALS";
    }

    public function indexAction()
    {
        $this->view->hoge = $this->medalManager->get();
    }

}

