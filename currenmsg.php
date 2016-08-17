<?php
	if($_GET['msg']) {
		$msg = $_GET['msg'];
                $msg = str_replace("%20"," ",$msg);
		file_put_contents("currentmsg", $msg);
	}
?>
