<!DOCTYPE html>
<html lang="en">
<meta http-equiv="Content-Language" content="ja">
<meta name="Keywords" content="Visualization, Olympic" lang="ja">
<meta name="Author" content="Kenta Kuzuhara", "Daichi Kawashima">
<meta name="copyright" content="trihacks">
<meta name="description" content="Visualization of the number of medals in each olympic.">
<meta name="ROBOTS" content="NOINDEX,NOFOLLOW">
<!--OGP | Facebook-->
<meta property="og:image" content="images/ogp.png">
<meta property="og:title" content="NUM of Metals | Visualization of the Num of Medals">
<meta property="og:description" content="Visualization of the number of metals in each olympic by using Olympic Rings">
<meta property="og:type" content="article">
<meta property="og:url" content="http://kuzuharakenta.com/olympic">
<!--OGP | Facebook-->
<title>{{ title }}</title>
<?php $this->assets->outputCss() ?>
<link href='http://fonts.googleapis.com/css?family=Sorts+Mill+Goudy' rel='stylesheet' type='text/css'>
<body>
<?php $this->assets->outputJs() ?>
<div style="align: right; float: right;">
    <a href="http://twitter.com/share?url=http://kuzuharakenta.com/olympic&text= NUM of MEDALs - Visualization of the Number of Medals in Each Olympic - @donkeykey &via=kzhrknt&related=donkeykey&hashtags=#numofmedals" target="_blank"><img src="images/twitter.png" /></a>
<a title="facebookでシェアする" href="http://www.facebook.com/sharer.php?u=http://kuzuharakenta.com/olympic&t=NUM of MEDALs | Visualization of the Number of medals in each Olympics" target="_blank"><img src="images/facebook.png" /></a>
</div>
<header>
<div id="logo"><img src="images/logo.png" alt="logo"></div>
</header>
<div id="main-contents">
    <div id="wrapper">
        <div id="rings">
            <div class="blue"></div>
            <div class="yellow"></div>
            <div class="black"></div>
            <div class="green"></div>
            <div class="red"></div>
        </div>
        <div id="compe">
            <div class="year"></div>
            <div class="place"></div>
        </div>
    </div>
</div>
<footer class="page-footer">
<ul class="bxslider">
</ul>
<small class="copyright">All right reserved by &copy; creamsoad.</small>
</footer>
</body>
</html>
