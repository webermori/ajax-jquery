<?php 

// if($_REQUEST) {
// 	echo json_encode(["msg"=>"request"]);exit;
// }

if ($_GET) {
	//var_dump($_GET); exit;
	//echo "<name>{$_GET['name']}</name>";
	echo json_encode($_GET); exit;
}

if($_POST) {
	//var_dump($_POST); exit;
	$_POST['name'] = $_POST['name']. " DB";
	$_POST['email'] = $_POST['email'];
	$_POST['tel'] = $_POST['tel']. " DB";
	echo json_encode($_POST); exit;
}