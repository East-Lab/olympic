<?php

class MedalManager
{
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
