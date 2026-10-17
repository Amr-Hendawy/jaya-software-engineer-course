<?php
	function circleArea($r) {
		$pi = pi();
		$area = $pi * $r * $r;
		return $area;
	}
	echo circleArea(5);
	echo circleArea(10);
	echo circleArea(15);
?>