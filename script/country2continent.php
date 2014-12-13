<?php

require "../app/core/MedalManager.php";
$mm = new MedalManager();

$medals = json_decode($mm->get(), true);
$continental = json_decode($mm->getContinental(), true);

var_dump($medals);
$array = array();
foreach ($medals as $game) {
    $arr = array();
    $arr["year"] = $game["year"];
    $arr["season"] = $game["season"];
    $arr["host_country"] = "";
    $asia = 0;
    $america = 0;
    $europe = 0;
    $africa = 0;
    $oceania = 0;
    foreach ($game["medals"] as $country) {
        switch ($continental[$country["country"]]) {
            case "Asia":
                $asia += $country["gold"] + $country["silver"] + $country["blonds"];
                break;
            case "America":
                $america += $country["gold"] + $country["silver"] + $country["blonds"];
                break;
            case "Europe":
                $europe += $country["gold"] + $country["silver"] + $country["blonds"];
                break;
            case "Africa":
                $africa += $country["gold"] + $country["silver"] + $country["blonds"];
                break;
            case "Oceania":
                $oceania += $country["gold"] + $country["silver"] + $country["blonds"];
                break;
            default :
                echo "default!\n";
                break;
        }
    }
    $arr["medal_num"]["asia"] = $asia;
    $arr["medal_num"]["america"] = $america;
    $arr["medal_num"]["europe"] = $europe;
    $arr["medal_num"]["africa"] = $africa;
    $arr["medal_num"]["oceania"] = $oceania;
    $array[] = $arr;
}

var_dump($array);
file_put_contents("./json/conti_medals.json", json_encode($array, true));



