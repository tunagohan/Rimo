<?php
$serial=$_POST['serial'];
session_start();

$db['host'] = "localhost";
$db['user'] = "is07rimo";
$db['pass'] = "is07rimo";
$db['dbname'] = "rimo";


$errorMessage = "";

if (isset($_POST["login"])) {

  if (empty($_POST["userid"])) {
    $errorMessage = "ユーザIDが未入力です。";
  } else if (empty($_POST["password"])) {
    $errorMessage = "パスワードが未入力です。";
  } 


  if (!empty($_POST["userid"]) && !empty($_POST["password"])) {

    $mysqli = new mysqli($db['host'], $db['user'], $db['pass']);
    if ($mysqli->connect_errno) {
      print('<p>データベースへの接続に失敗しました。</p>' . $mysqli->connect_error);
      exit();
    }


    $mysqli->select_db($db['dbname']);
    $userid = $mysqli->real_escape_string($_POST["userid"]);
    $pass = $mysqli->real_escape_string($_POST["password"]);
    $query = "SELECT * FROM $serial WHERE id = '" . $userid . "'";
    $result = $mysqli->query($query);
    
    if (!$result) {
      print('クエリーが失敗しました。' . $mysqli->error);
      $mysqli->close();
      exit();
    }
//md5認証　
    $passwd1=$_POST["password"];
    $passwd1=md5($passwd1);
    $db_hashed_pwd = 'null';
    while ($row = $result->fetch_assoc()) {

      $db_hashed_pwd = $row['pass'];
    }
     
     $conn=mysqli_connect($db['host'], $db['user'], $db['pass']) or exit("MySQLへ接続できません。");
    mysqli_select_db($conn,'rimo') or exit("データベース名が間違っています。");

    $sql="SELECT * FROM $serial where id='{$userid}';";
    $result=mysqli_query($conn,$sql) or exit("データの抽出に失敗しました。");

    if(mysqli_num_rows($result)==0){
      echo "IDまたはパスワードを確認してください。<br>";
      print'<input type="button" onclick="history.back()"value="戻る">';
      mysqli_close($conn);
    }
     
    
    elseif ($passwd1 == $db_hashed_pwd) {
      session_regenerate_id(true);
      $_SESSION["userid"] = $_POST["userid"];
      $mysqli->close();
      header("Location:../Remote/Remote.html");
      exit;
    } 
    else {
      
      print 'パスワードが正しくありません。もう一度入力してください。';
      print'<input type="button" onclick="history.back()"value="戻る">';
    } 
  } else {
      print '未入力の項目があります。';
      print'<input type="button" onclick="history.back()"value="戻る">';

    
  } 
} 
 
?>
<FORM><INPUT type="button" value="　トップへ戻る　" onclick=location.href="../Top.html" ></FORM>

