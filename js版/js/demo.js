var $ = function(){
	return new Bas();
}
function Bas(){
	this.obj = [];
}
// id
Bas.prototype.Id = function(id){
	this.obj = document.getElementById(id);
	return this;
}
Bas.prototype.GetClass = function(Class){
	var obj = document.getElementsByClassName(Class);
	for(var i=0;i<obj.length;i++){
		this.obj.push(obj[i]);
	}
	return this;
}
Bas.prototype.getName = function(TagName){
	var obj = document.getElementsByTagName(TagName);
	for(var i=0;i<obj.length;i++){
		this.obj.push(obj[i]);
	}
	return this;
}

//事件处理
Bas.prototype.on = function(event,fn){
	for(var i=0;i<this.obj.length;i++){
		this.obj[i]["on"+event] = fn;
	}
	return this;
}
//css
Bas.prototype.css = function(style,val){
	//传入为设置
	if(val != false){
		alert(this.obj.length);
		for(var i =0;i<this.obj.length;i++){
			this.obj[i].style[style] = val;
		}
	}else{

	}
	//不传入为获取
}
//添加index索引
Bas.prototype.index = function(){
	for(var i=0;i<this.obj.length;i++){
		this.obj.index = i;
	}
	return this;
}
//
Bas.prototype.ChoiceIndex = function(i){
	var index = this.obj[i];
	this.obj = [];
	this.obj.push(index);
}
$().getName("li").on("click",function(){
	this.style.background = 'red';
});
