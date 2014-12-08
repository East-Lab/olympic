<?php

class MedalManager
{
    private $base_url = "";
    public $hoge = "init";

    public function initialize()
    {
        $this->hoge = "hoge";
    }

    public function get()
    {
        return $this->hoge;
    }
}
