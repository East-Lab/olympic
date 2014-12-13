<?php

/*
$arr = array(
    "Greece" => "Europe",
    "United States" => "Europe",
    "Germany (until 1912)" => "Europe",
    "France" => "Europe",
    "United Kingdom" => "Europe",
    "Denmark" => "Europe",
    "Hungary" => "Europe",
    "Austria" => "Europe",
    "International Team" => "Europe",
    "Switzerland" => "Europe",
    "Australia" => "Europe",
    "Belgium" => "Europe",
    "Norway" => "Europe",
    "Italy (until 1946)" => "Europe",
    "Netherlands" => "Europe",
    "British India" => "Europe",
    "Bohemia" => "Europe",
    "Canada" => "Europe",
    "Cuba" => "Europe",
    "Spain" => "Europe",
    "Mexico" => "Europe",
    "Sweden" => "Europe",
    "Finland" => "Europe",
    "Australasia (until 1920)" => "Europe",
    "Russia" => "Europe",
    "South Africa (until 1960)" => "Europe",
    "Brazil" => "Europe",
    "Czechoslovakia (until 1992)" => "Europe",
    "Japan" => "Europe",
    "Luxembourg" => "Europe",
    "New Zealand" => "Europe",
    "Argentina" => "Europe",
    "Estonia" => "Europe",
    "Ireland" => "Europe",
    "Poland" => "Europe",
    "Yugoslavia (until 1988)" => "Europe",
    "Haiti" => "Europe",
    "Monaco" => "Europe",
    "Portugal" => "Europe",
    "Romania" => "Europe",
    "Egypt" => "Europe",
    "Chile" => "Europe",
    "Haiti" => "Europe",
    "Uruguay" => "Europe",
    "Philippines" => "Europe",
    "Latvia" => "Europe",
    "Turkey" => "Europe",
    "Jamaica" => "Europe",
    "India" => "Europe",
    "South Korea" => "Europe",
    "Panama" => "Europe",
    "Iran" => "Europe",
    "Peru" => "Europe",
    "Puerto Rico" => "Europe",
    "Sri Lanka" => "Europe",
    "Trinidad & Tobago" => "Europe",
    "Soviet Union" => "Europe",
    //"Greece" => "Oceania",
    //"Greece" => "Asia",
    //"Greece" => "Africa",
    //"Greece" => "America",
);
 */

$arr = array();

require "../app/core/MedalManager.php";
$mm = new MedalManager();

$obj = json_decode($mm->get(), true);
//var_dump($obj);
foreach ($obj as $game) {
    //var_dump($game);
    foreach ($game["medals"] as $country) {
        //echo $country["country"] . ":" . $arr[$country["country"]] . "\n";
        $arr[$country["country"]] = "Europe";
    } 
}

echo(json_encode($arr));



