<?php

    session_start();
    if(!isset($_SESSION['timeid'])){
        header('location:../phphtml/dl.html');
        exit();
    }