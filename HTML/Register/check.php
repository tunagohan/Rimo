<!DOCTYPE HTML PUBLIC"-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title></title>
	</head>
<body>

<?php
$name=$_POST['name'];
$userid=$_POST['userid'];
$pass=$_POST['passwd'];
$serial=$_POST['primarykey'];
$status =0;

$name=htmlspecialchars($name);
$userid=htmlspecialchars($userid);
$pass=md5($pass);
$serial=htmlspecialchars($serial);
print'登録確認画面';
print'<br />';


if($name==''|| $userid==''|| $pass=='' || !preg_match('/^[0-9a-zA-Z]{2,32}$/', $_POST["passwd"]) || !preg_match('/^[0-9a-zA-Z]{2,32}$/', $_POST["userid"]))
{
	print'<form><br />';
	print'<input type="button"onclick="history.back()"value="戻る"><br />';
	print'</form><br />';
	print'ユーザID,パスワードは半角英数で入力してください。<br />';
	
}
else
{

  $conn=mysqli_connect('localhost','root','') or exit("MySQLへ接続できません。");
    mysqli_select_db($conn,'rimo') or exit("データベース名が間違っています。<br>");

    $sql="SELECT * FROM $serial where id='{$userid}';";
    $result=mysqli_query($conn,$sql) or exit("データの抽出に失敗しました。<br>");

    if(mysqli_num_rows($result)!=0){
      echo "すでに{$userid}は登録済みです。別のユーザIDを利用し登録してください。<br>";
      print'<input type="button" onclick="history.back()"value="戻る">';
    }
    else{
      $sql="INSERT INTO $serial values(null,'{$name}','{$userid}','{$pass}');";
      $result=mysqli_query($conn,$sql) or exit("データの書き込みに失敗しました。");
      echo "{$name}様の登録が完了しました。<br />";
      echo "ユーザIDは{$userid}です。<br />";
      echo "パスワードは{$_POST['passwd']}です。<br />";
    }
    mysqli_close($conn);


	

}

?>

<FORM><INPUT type="button" value="　トップへ戻る　" onclick=location.href="../home.html" ></FORM>
</body>
</html>
