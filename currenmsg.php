<?php
	if($_GET['msg']) {
		$msg = $_GET['msg'];
		file_put_contents("currentmsg", $msg);
	}
?>
