$(function(){
	new Bas($("li button"));
})
function Bas(obj){
	this.obj = obj;
	this.click();
	//
	this.index = null;
	//水平
	this.determineOne = [];
	for(var i=1;i<=this.obj.length;i++){
		var ary = [];
		for(var j =0;j<5;j++){
			ary.push(i+j);
		}
		this.determineOne.push(ary);
	}
	//垂直
	this.determineTwo = [];
	for(var i=1;i<=this.obj.length;i++){
		var ary = [];
		for(var j =0;j<5;j++){
			ary.push(i+j*10);
		}
		this.determineTwo.push(ary);
	}
	//前交叉
	this.determineThree = [];
	for(var i=1;i<=this.obj.length;i++){
		var ary = [];
		for(var j =0;j<5;j++){
			ary.push(i + j*10 + j);
		}
		this.determineThree.push(ary);
	}
	//后交叉
	this.determineFour = [];
	for(var i=1;i<=this.obj.length;i++){
		var ary = [];
		for(var j =0;j<5;j++){
			ary.push(i + j*10 - j);
		}
		this.determineFour.push(ary);
	}
	//电脑走的步数
	this.addCompute = [];
	//玩家走的步数
	this.addUser = [];
	//可走的地方
	this.determineIndex = [];
	for(var i=1;i<=this.obj.length;i++){
		this.determineIndex.push(i);
	}
}
Bas.prototype.click = function(){
	var _this = this;
	$(this.obj).on("click",function(){
		$(this).css("background","red").attr("disabled","");
		_this.addUser.push($(this).parent().index() + 1);
		_this.index = $(this).parent().index()+1;
		_this.unDetermineIndex();
		_this.isDetermine("user");
		_this.compute();
	});
}
//删除已经走过的地方
Bas.prototype.unDetermineIndex = function(){
	for(var i=0;i<this.determineIndex.length;i++){
		if(this.determineIndex[i] == this.index){
			this.determineIndex.splice(i,1);
		}
	}
}
/*
	Bas.prototype.ajax = function(index){
		$.ajax({
			url:"index.php",
			data:index,
			success:function(){
			}
		});
	}
*/
//电脑下棋
Bas.prototype.compute = function(){
	var length = this.determineIndex.length;
	var random =  Math.floor(Math.random()*length);
	$(this.obj).eq(this.determineIndex[random-1]).css("background","blue").attr("disabled","");
	this.addCompute.push(random);
	this.index = this.determineIndex[random];
	this.unDetermineIndex();
	console.log(this.index)
	this.isDetermine("compute");
}
Bas.prototype.isDetermine = function(i){
	if(i == "user"){
		for(var i=0;i<this.determineOne.length;i++){
			var ary = [];
			for(var j=0;j<this.determineOne[i].length;j++){
				for(var k=0;k<this.addUser.length;k++){
					if(this.determineOne[i][j] == this.addUser[k]){
						ary.push("1");
					}
				}
				if(ary.length>=5){
					alert("赢了");
					this.disabled();
					return;
				}
			}
		}
		for(var i=0;i<this.determineTwo.length;i++){
			var ary = [];
			for(var j=0;j<this.determineTwo[i].length;j++){
				for(var k=0;k<this.addUser.length;k++){
					if(this.determineTwo[i][j] == this.addUser[k]){
						ary.push("1");
					}
				}
				if(ary.length>=5){
					alert("赢了");
					this.disabled();
					return;
				}
			}
		}
		for(var i=0;i<this.determineThree.length;i++){
			var ary = [];
			for(var j=0;j<this.determineThree[i].length;j++){
				for(var k=0;k<this.addUser.length;k++){
					if(this.determineThree[i][j] == this.addUser[k]){
						ary.push("1");
					}
				}
				if(ary.length>=5){
					alert("赢了");
					this.disabled();
					return;
				}
			}
		}
		for(var i=0;i<this.determineFour.length;i++){
			var ary = [];
			for(var j=0;j<this.determineFour[i].length;j++){
				for(var k=0;k<this.addUser.length;k++){
					if(this.determineFour[i][j] == this.addUser[k]){
						ary.push("1");
					}
				}
				if(ary.length>=5){
					alert("赢了");
					this.disabled();
					return;
				}
			}
		}
	}
	if(i == "compute"){
		for(var i=0;i<this.determineOne.length;i++){
			var ary = [];
			for(var j=0;j<this.determineOne[i].length;j++){
				for(var k=0;k<this.addCompute.length;k++){
					if(this.determineOne[i][j] == this.addCompute[k]){
						ary.push("1");
					}
				}
				if(ary.length>=5){
					alert("输了");
					this.disabled();
					return;
				}
			}
		}
		for(var i=0;i<this.determineTwo.length;i++){
			var ary = [];
			for(var j=0;j<this.determineTwo[i].length;j++){
				for(var k=0;k<this.addCompute.length;k++){
					if(this.determineTwo[i][j] == this.addCompute[k]){
						ary.push("1");
					}
				}
				if(ary.length>=5){
					alert("输了");
					this.disabled();
					return;
				}
			}
		}
		for(var i=0;i<this.determineThree.length;i++){
			var ary = [];
			for(var j=0;j<this.determineThree[i].length;j++){
				for(var k=0;k<this.addCompute.length;k++){
					if(this.determineThree[i][j] == this.addCompute[k]){
						ary.push("1");
					}
				}
				if(ary.length>=5){
					alert("输了");
					this.disabled();
					return;
				}
			}
		}
		for(var i=0;i<this.determineFour.length;i++){
			var ary = [];
			for(var j=0;j<this.determineFour[i].length;j++){
				for(var k=0;k<this.addCompute.length;k++){
					if(this.determineFour[i][j] == this.addCompute[k]){
						ary.push("1");
					}
				}
				if(ary.length>=5){
					alert("输了");
					this.disabled();
					return;
				}
			}
		}
	}
}
Bas.prototype.disabled = function(){
	$(this.obj).attr("disabled","")
}