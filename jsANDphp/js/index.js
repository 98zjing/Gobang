$(function(){
	new Bas({
		btns:$("ul li button")
	});
})
function Bas(obj){
	this.btns = obj.btns;
	this.click();
}
//点击事件添加
Bas.prototype.click = function(){
	var _this = this;
	this.btns.on("click",function(){
		$(this).css("background","red").attr("disabled","");
		var index = $(this).parent().index();
		_this.ajax("user",index);
	});
}
//每次下棋发送数据
Bas.prototype.ajax = function(str,index){
	var _this = this;
	switch (str) {
		case "user":
			//玩家的请求
			$.ajax({
				type:"GET",
				url:"index.php",
				data:{"ajax":"y","class":str,"index":index},
				dataType:"json",
				success:function(data){
					if(data.user){
						alert("赢了");
						$("button").attr("disabled","");
					}else if(data.computer){
						alert("输了");
						$("button").attr("disabled","");
					}else {
						_this.computer(data.computerIndex);
					}
				}
			});
			break;
		case "computer":
			// 电脑的请求
			$.ajax({
				type:"GET",
				url:"index.php",
				data:{"class":str,"index":index},
				success:function(data){
					alert();
				}
			});
		break;
		default:
			// statements_def
			break;
	}
}
Bas.prototype.computer = function(index){
	$("ul li").eq(index).children("button").css("background","blue").attr("disabled","");
}