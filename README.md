
# 見出し1
## 見出し2
### 見出し3
#### 見出し4
##### 見出し5
###### 見出し6
インストールコマンドは `gem install hoge` です
太字に **太字** します

***
___

[Google先生](https://www.google.co.jp/)

1. 番号付きリスト1
    1. 番号付きリスト1_1
    1. 番号付きリスト1_2
1. 番号付きリスト2
1. 番号付きリスト3

> 横線を入れます
>
> これで入ります

___

# <font color="Lime">R</font>imo
#### <font color="SteelBlue">H</font>ome <font color="Salmon">A</font>pplication <font color="DarkOrange">C</font>ontrol
![Rimo](http://yahoo.jp/box/kwvUxZ)

___

# <font color="Tomato">概</font>要

### [Raspberry pi 3を使って家電を操作できるようにする]

●Raspberry Pi に LIRC(赤外線)を追加し、家のリモコンを登録し操作できるようにする。

●外部からのアクセスを可能にし、外出先から家電の消し忘れや、予約の機能など を追加する。

●世の中のためになる IoT を目指す。


___

# <font color="Tomato">準</font>備物

#### ●Raspberry Pi 3
OS： RASPBIAN JESSIE
メモリ：8GB

#### ●赤外線リモコン受信モジュール

#### ●5mm 赤外線 LED

#### ●ジャンパー線(オス-メス)

#### ●ミニブレッドボード

#### ●カーボン抵抗(1kΩ)

<br>

OSバージョン：debian_version 8.0

インストール物のバージョン記載
lirc＝0.9.4b
gpio＝2.32
npm＝3.10.3
nodejs＝6.6.0

### [イメージ図(小さくてすいません)]
![Rimo](http://yahoo.jp/box/K5unWo)

___

# <font color="Tomato">L</font>IRC編
#### ●Raspberry PiでLIRC(赤外線)導入

まずRaspbianをメモリに書き込み【初期設定】を行う
OSダウンロード先：[Raspbian OS](https://www.raspberrypi.org/downloads/raspbian/)

【初期設定】が終わったら必要なパッケージをインストールする

`sudo apt-get install -y lirc`
`shutdown -h now`

シャットダウン後【回路】を作成してRaspberry Piと接続し起動する
(Pin Nunber)
●電源5V(01)
●グランド(GND)
●受信モジュール(17)
●ランプ(18)

●以下のコマンドを入力し４箇所書き換える
`sudo vi /etc/lirc/hardware.conf`

|変更前|変更後|
|:--|:--|
|LIRC_ARGS=""|LIRC_ARGS="--uinput"|
|DRIVER="UNCONFIGURED"|DRIVER="default"|
|DEVICE=""|DEVICE="/dev/lirc0"|
|MODULES=""|MODULES="lirc_rpi"|

その後
`sudo vi /boot/config.txt`
を入力後、一番下に以下のコードを入力する
`dtoverlay=lirc-rpi,gpio_out_pin=17,gpio_in_pin=18,gpio_in_pull=up`

その後再起動
`sudo reboot`

再起動後lsmodでlircの存在確認
`lsmod | grep lirc`
[表示参考]
lirc_rpi 6422 0
lirc_dev 8110 1 lirc_rpi
rc_core 16220 1 lirc_dev

LIRCを一度止める
`sudo /etc/init.d/lirc stop`
[表示参考]
[ <font color="LimeGreen">ok</font> ] Stopping lirc (via systemctl): lirc.service.

リモコンで動作確認をする
`mode2 -d /dev/lirc0`
[表示参考]
pulse 456
space 410
pulse 350
space 451
….
….
….
リモコン信号を受信する度に space / pulse が連続して表示される

リモコンの内容を登録する
`irrecord -n -d /dev/lirc0 ~/登録名.conf`

登録名.confのNAMEを変更する
`sudo vi 登録名.conf`

|変更前|変更後|
|:--|:--|
|name  /home/pi/登録名.conf|name  好きな登録名|

リモコンの定義ファイルをコピーする
`sudo op 登録名.conf /etc/lirc/lircd.conf`

LIRCサービスを再起動する
`sudo /etc/init.d/lirc restart`

リモコンの定義を確認
`irsend LIST "" ""`
[表示参考]
irsend: 好きな登録名

リモコン定義の中身を確認
`irsend LIST 好きな登録名 ""`
[表示参考]
irsend: 0000000000000001 play irsend: 0000000000000002 stop irsend: 0000000000000003 pause irsend: 0000000000000004 eject

リモコンの内容を送信する
`irsend SEND_ONCE 好きな登録名 play`
`irsend SEND_ONCE 好きな登録名 stop`

___
