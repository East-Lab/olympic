<?php

$base_url = "http://www.databaseolympics.com/games/gamesyear.htm?g=";

$array = array();
for ($i = 1; $i <= 47; $i++) {
    $url = $base_url . $i;
    $html = file_get_contents($url);
    $domDocument = new DOMDocument();
    $domDocument->loadHTML($html);
    $xml = $domDocument->saveXML();
    $xmlobj = simplexml_load_string($xml);
    $obj = json_decode(json_encode($xmlobj), true);
    $info = explode(" ", $obj["body"]["table"][1]["tr"]["td"][0]["font"][0]["b"]);
    $tr = $obj["body"]["table"][2]["tr"];
    $j = 0;
    $array[$i - 1] = array(
        "year" => $info[0],
        "season" => $info[1],
        "medals" => array(),
    );
    foreach ($tr as $l) {
        if ($j == 0) {
            $j++;
            continue;
        }
        $array[$i - 1]["medals"][$j]["country"] = $l["td"][0]["a"];
        for ($k = 1; $k <= 4; $k++) {
            switch ($k) {
                case 1:
                    $array[$i - 1]["medals"][$j]["gold"] = $l["td"][$k]["a"];
                    break;
                case 2:
                    $array[$i - 1]["medals"][$j]["silver"] = $l["td"][$k]["a"];
                    break;
                case 3:
                    $array[$i - 1]["medals"][$j]["blonds"] = $l["td"][$k]["a"];
                    break;
                case 4:
                    $array[$i - 1]["medals"][$j]["total"] = $l["td"][$k]["a"];
                    break;
            }
        }
        $j++;
    }
    var_dump($array);
} 
json_encode($array, true);
