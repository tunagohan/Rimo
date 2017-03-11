# <font color="Lime">R</font>imo
#### <font color="SteelBlue">H</font>ome <font color="Salmon">A</font>pplication <font color="DarkOrange">C</font>ontrol
![Rimo](http://yahoo.jp/box/kwvUxZ)

___

### お使いのスマートフォンからこちらのランプを操作してみよう

お使いのスマートフォンで

![Link](http://yahoo.jp/box/rHp93u)

へアクセス

右上の「Sing in」をタップしてログインをすると操作ページへ移動します

ID: rimo

PASS: rimo


# <font color="Tomato">概</font>要<br>
<br>
### [Raspberry pi 3を使って家電を操作できるようにする]<br>
<br>
●Raspberry Pi に LIRC(赤外線)を追加し、家のリモコンを登録し操作できるようにする。<br>
<br>
●外部からのアクセスを可能にし、外出先から家電の消し忘れや、予約の機能など を追加する。<br>
<br>
●世の中のためになる IoT を目指す。<br>
<br>
<br>
___
<br>
# <font color="Tomato">準</font>備物<br>
<br>
#### ●Raspberry Pi 3<br>
OS： RASPBIAN JESSIE<br>
メモリ：8GB<br>
<br>
#### ●赤外線リモコン受信モジュール<br>
<br>
#### ●5mm 赤外線 LED<br>
<br>
#### ●ジャンパー線(オス-メス)<br>
<br>
#### ●ミニブレッドボード<br>
<br>
#### ●カーボン抵抗(1kΩ)<br>
<br>
<br>
<br>
OSバージョン：debian_version 8.0<br>
<br>
インストール物のバージョン記載<br>
lirc＝0.9.4b<br>
gpio＝2.32<br>
npm＝3.10.3<br>
nodejs＝6.6.0<br>
<br>
### [イメージ図(小さくてすいません)]<br>
![Rimo](http://yahoo.jp/box/K5unWo)<br>
<br>
___
<br>
# <font color="Tomato">L</font>IRC編<br>
#### ●Raspberry PiでLIRC(赤外線)導入<br>
<br>
まずRaspbianをメモリに書き込み【初期設定】を行う<br>
OSダウンロード先：[Raspbian OS](https://www.raspberrypi.org/downloads/raspbian/)<br>
<br>
【初期設定】が終わったら必要なパッケージをインストールする<br>
<br>
`sudo apt-get install -y lirc`<br>
`shutdown -h now`<br>

シャットダウン後【回路】を作成してRaspberry Piと接続し起動する<br>
(Pin Nunber)<br>
●電源5V(01)<br>
●グランド(GND)<br>
●受信モジュール(17)<br>
●ランプ(18)<br>

以下のコマンドを入力し４箇所書き換える<br>
`sudo vi /etc/lirc/hardware.conf`<br>
<br>

|変更前|変更後|
|:--|:--|
|LIRC_ARGS=""|LIRC_ARGS="--uinput"|
|DRIVER="UNCONFIGURED"|DRIVER="default"|
|DEVICE=""|DEVICE="/dev/lirc0"|
|MODULES=""|MODULES="lirc_rpi"|

<br>
その後<br>
`sudo vi /boot/config.txt`<br>
を入力後、一番下に以下のコードを入力する<br>
`dtoverlay=lirc-rpi,gpio_out_pin=17,gpio_in_pin=18,gpio_in_pull=up`<br>
<br>
その後再起動<br>
`sudo reboot`<br>

再起動後lsmodでlircの存在確認<br>
`lsmod | grep lirc`<br>
[表示参考]<br>
lirc_rpi 6422 0<br>
lirc_dev 8110 1 lirc_rpi<br>
rc_core 16220 1 lirc_dev<br>

LIRCを一度止める<br>
`sudo /etc/init.d/lirc stop`<br>
[表示参考]<br>
[ <font color="LimeGreen">ok</font> ] Stopping lirc (via systemctl): lirc.service.<br>
<br>
リモコンで動作確認をする<br>
`mode2 -d /dev/lirc0`<br>
[表示参考]<br>
pulse 456<br>
space 410<br>
pulse 350<br>
space 451<br>
….<br>
….<br>
….<br>
リモコン信号を受信する度に space / pulse が連続して表示される<br>
<br>
リモコンの内容を登録する<br>
`irrecord -n -d /dev/lirc0 ~/登録名.conf`<br>
<br>
登録名.confのNAMEを変更する<br>
`sudo vi 登録名.conf`<br>
<br>

|変更前|変更後|
|:--|:--|
|name  /home/pi/登録名.conf|name  好きな登録名|

<br>
リモコンの定義ファイルをコピーする<br>
`sudo op 登録名.conf /etc/lirc/lircd.conf`<br>
<br>
LIRCサービスを再起動する<br>
`sudo /etc/init.d/lirc restart`<br>
<br>
リモコンの定義を確認<br>
`irsend LIST "" ""`<br>
[表示参考]<br>
irsend: 好きな登録名<br>
<br>
リモコン定義の中身を確認 <br>
`irsend LIST 好きな登録名 ""`<br>
[表示参考]<br>
irsend: 0000000000000001 play<br>
irsend: 0000000000000002 stop<br>
irsend: 0000000000000003 pause<br>
irsend: 0000000000000004 eject<br>
<br>
リモコンの内容を送信する<br>
`irsend SEND_ONCE 好きな登録名 play`<br>
`irsend SEND_ONCE 好きな登録名 stop`<br>
<br>
___
