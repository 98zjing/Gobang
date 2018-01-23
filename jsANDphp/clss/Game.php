<?php 
	require "determine.php";
	class Game
	{
		//载入游戏界面
		private function isShow(){
			include "View/View.php";
		}
		//处理ajx数据请求、
		private function doAjax(){
			if(!empty($_GET["class"])){
				Demin::doAjax($_GET);
			}
		}
		//进入游戏
		public function run(){
			if(!empty($_GET["ajax"]) && $_GET["ajax"] == "y" ){
				$this->doAjax();
			}else{
				Demin::isStart();	
				$this->isShow();
			}
		}
	}
 ?>