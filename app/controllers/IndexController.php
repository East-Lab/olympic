<?php

class IndexController extends ControllerBase
{

    public function initialize()
    {
        $this->assets
            ->addCss('css/jquery.bxslider.css')
            ->addCss('css/style.css')
            ->addCss('http://necolas.github.io/normalize.css/3.0.2/normalize.css')
            ->addCss('css/bootstrap.min.css');

        $this->assets
            ->addJs('js/jquery.js')
            ->addJs('js/bootstrap.min.js')
            ->addJs('js/jquery.bxslider.js')
            ->addJs('js/main.js');

        $this->view->title = "NUM of MEDALS";
    }

    public function indexAction()
    {
        $this->view->hoge = $this->medalManager->get();
    }

}

