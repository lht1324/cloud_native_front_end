<?php
    include_once("redis_session.php")
    $ret = array();

    // session start
    session_start()

    $_SESSION["username"] = "";
    $_SESSION["useremail"] = "";

    unset($_SESSION["username"])
    unset($_SESSION["useremail"])

    $ret["result"] = "ok";
    $ret["msg"] = "로그아웃 되었습니다.";

    echo json_encode($ret, )
?>