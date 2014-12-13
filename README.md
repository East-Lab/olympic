![](./design/mock.jpg)



Web Hook設定方法
=======================
githubにpushした時に指定したURLにPOSTリクエストしてくれるのがwebhooks。

githubでwebhooks設定
-----------------------
まずgithubのwebhooks設定からURLを登録する。
例）http://example.com/webhooks.php

POSTリクエストを受け取るPHPを用意
-----------------------
webhooks.php
```
<?php
$cmd = dirname(__FILE__) . '/githook/update.sh';
$res = system($cmd);
```

実行するシェルスクリプトを用意
-----------------------
```
#!/bin/sh
cd /aaa/bbb/ccc #git initされてるフォルダ
sudo /usr/bin/git --git-dir=.git pull
```
apacheがスクリプトを実行するので実行ユーザはapacheさんになる。
apacheさんはgit pullできないのでrootさんがgit pullするようにsudoをつける。
もちろん、rootさんがgit pullできるようにrootの公開鍵をgithubに登録しておく必要がある。

/etc/sudoersの編集
------------------------
apacheがsudoすると普通はパスワードが聞かれる。
スクリプトを実行したときにパスワードを聞かれても答えられないのでパスワードが不要となるように設定。
→visudoする
```
# Defaults requiretty←コメントアウトする
apache  ALL=(ALL) NOPASSWD: /usr/bin/git←追記する
```
