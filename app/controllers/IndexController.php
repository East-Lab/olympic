<?php

class IndexController extends ControllerBase
{

    public function indexAction()
    {

        $this->view->hoge = $this->medalManager->get();
    }

}

