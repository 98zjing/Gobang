<?php 
	//游戏数据处理
	class Demin
	{
		//游戏模板重置
		public static function isStart(){
			//玩家走棋的步数
			$_SESSION["user"] = array();
			//电脑走棋的步数
			$_SESSION["computer"] = array();
			//可走棋的地方
			$_SESSION["data"] = array();
			for($i=0;$i<100;$i++){
				array_push($_SESSION["data"],$i);
			}
			return $_SESSION["data"];
		}
		//
		public static function doAjax($data){

			switch ($data["class"]) {
				case 'user':
					$user = $data["index"];
					array_push($_SESSION["user"], $user);
					unset($_SESSION["data"][$user]);
					if(self::algorithm(($_SESSION["user"])) == true){
						//用户赢了
						echo json_encode(array("user"=>"赢了！"));
					}else{
						//没赢棋局继续，计算电脑走棋
						$s = self::computerIndex();
						if($s!= 0){
							$index = $s;
							echo json_encode(array("computerIndex"=>$index));
						}else{
							echo "平局！";
						}
					}
					break;
				case 'computer':
					$computer = $data["class"];
					array_push($_SESSION["user"], $ucomputerser);
					unset($_SESSION["data"][$computer]);
					if(self::algorithm(($_SESSION["computer"])) == true){
						//电脑赢了
						echo json_encode(array("computer"=>"赢了！"));
					}
					break;
				default:
					# code...
					break;
			}	
		}
		//计算电脑走棋
		private static function computerIndex(){
			$len = count($_SESSION["data"]);
			if($len != 0){
				$rand = array_rand($_SESSION["data"]);
				return $_SESSION["data"][$rand];
			}else{
				return false;
			}
		}
		//游戏判定
		private static function algorithm($target){
			if(isset($_SESSION["algorithm"])){
				//算法初始化
				$_SESSION["algorithm"] = array();
				for($i=0;$i<4;$i++){
					array_push($_SESSION["algorithm"], array());
				}
				//水平
				for($i=0;$i<100;$i++){
					array_push($_SESSION["algorithm"][0], array());
					for($j=0;$j<5;$j++){
						array_push($_SESSION["algorithm"][0][$i], $i + $j);
					}
				}
				//垂直
				for($i=0;$i<100;$i++){
					array_push($_SESSION["algorithm"][1], array());
					for($j=0;$j<5;$j++){
						array_push($_SESSION["algorithm"][1][$i], $i + $j * 10);
					}
				}
				//左向右斜下
				for($i=0;$i<100;$i++){
					array_push($_SESSION["algorithm"][2], array());
					for($j=0;$j<5;$j++){
						array_push($_SESSION["algorithm"][2][$i], $i + $j * 10 + $j);
					}
				}
				//右向左斜下
				for($i=0;$i<100;$i++){
					array_push($_SESSION["algorithm"][3], array());
					for($j=0;$j<5;$j++){
						array_push($_SESSION["algorithm"][3][$i],$i + $j * 10 - $j);
					}
				}
			}
			// 开始判定
			for($i=0;$i<count($_SESSION["algorithm"]);$i++){
				for($j=0;$j<count($_SESSION["algorithm"][$i]);$j++){
					$_SESSION["age"] = 0;
					for($k=0;$k<count($target);$k++){
						for($s=0;$s<count($_SESSION["algorithm"][$i][$j]);$s++){
							if($_SESSION["algorithm"][$i][$j][$s] == $target[$k]){
								$_SESSION["age"]++;
								if($_SESSION["age"] >=5){
									return true;
								}
							}
						}
					}
				}
			}
			/*
				for($i=0;$i<count($_SESSION["algorithm"][0]);$i++){
					for($j=0;$j<count($target);$j++){
						for($k=0;$k<count($_SESSION["algorithm"][0][$i]);$k++){
							if($_SESSION["algorithm"][0][$i][$k] == $target[$j]){
								var_dump($_SESSION["algorithm"][0][$i][$k]);
							}
						}
					}
				}
			*/
		}
	}
