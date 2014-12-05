<?php

class MedalManager
{
    public $hoge;

    public function initialize()
    {
        $this->hoge = "hoge";
    }

    public function get()
    {
        return $this->hoge;
    }
}
