<?php 
	header("content-type:text/html;charset=utf-8");
	session_start();
	require "clss/Game.php";
	$Ganme = new Game();
	$Ganme->run();
 ?>