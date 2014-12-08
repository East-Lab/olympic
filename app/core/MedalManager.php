<?php

class MedalManager
{
    public function get()
    {
        $json = file_get_contents("../script/json/medals.json");
        $obj = json_decode($json);
        //return $this->vdump($obj[0]);
        return $obj;
    }

    public function vdump($obj){
        ob_start();
        var_dump($obj);
        $dump = ob_get_contents();
        ob_end_clean();
        return $dump;
    }
}
