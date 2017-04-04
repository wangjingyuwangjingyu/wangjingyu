<?php
    include '../php/session.php';
    include 'ts.html';
    $_SESSION['timeid']=false;
    $_SESSION['timename']=null;
    session_destroy();
    header('location:dl.html');
?>


