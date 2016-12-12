$(function(){
	/*主页*/
	var add1=$(".addB");
	add1.on("touchend",function(){
		location.href="add.html";
	})
	
	/*删除*/
	var modify = $(".content");
	modify.on('touchend','li .add',function(){
		var index = $(this).closest("li").index();
		console.log(index);
		$('<div class="delete"><div class="l">&#xe643;</div><div class="r">X</div></div>').appendTo($(".content li").eq(index));	
		return false;
	})
	
	modify.on('click','li .delete .r',function(){
		$(this).closest('li').css("display","none");
		console.log(1)
	})
	
	modify.on('click','li .delete',function(){
		$(this).css("display","none");
		console.log(1)
	})
	/*删除*/
	
	
	/*添加内容页*/
	var add2=$(".header .l1");
	add2.on("touchend",function(){
		location.href="index.html";
		var input=$("textarea");
		var v=$.trim(input.val());
		var todo={
			name:v,
			state:0,
		}	
		if(!v){
			return;
		}
		todos.push(todo);
		localStorage.x=JSON.stringify(todos);
		render();
		input.val("");
	})
	var ul=$(".content")
	var posStart;
	var todos=[];//存储记录的数组
	if(localStorage.x){
		todos=JSON.parse(localStorage.x);
		render();
	}
	/*li里面delete效果*/
	var add3=$("ul li .add")
	var li=$("ul li");
	var delete1=li.find(".delete");
	add3.on('touchend',function(e){
//		$(this).find(".top").css("display","block")
//		var posEnd=e.originalEvent.changedTouches[0].clientX;
//		var index=$(this).index();
//		console.log(index)
//		if(posEnd-posStart>50){
//			todos[index].state=1;
			$("<div class='top'>"+'&#xe643;'+"</div>").appendTo($(this))
//			$("<div class='delete'><div class='l'>"+'&#xe643;'+"</div><div class='r'>"+'X'+"</div></div>").appendTo(li);
////		}
////		if(posEnd-posStart<-50){
////			todos[index].state=0;
////			$(this).removeClass("done");
////		}
//		localStorage.x=JSON.stringify(todos);
	})
	
	/*右滑删除*/
	ul.on('touchstart',"li",function(e){
		posStart=e.originalEvent.changedTouches[0].clientX;
	})
	ul.on('touchend',"li",function(e){
		var posEnd=e.originalEvent.changedTouches[0].clientX;
		var index=$(this).index();
		if(posEnd-posStart>50){
			todos.splice(index,1);
			localStorage.x=JSON.stringify(todos);
			li.eq(index).remove();
		}
	})
	/*li里面delete效果*/
	
	function render(){
		ul.empty();
		for(var i=0;i<todos.length;i++){
			var cls=todos[i].state?"done":"";
			$("<li>"+todos[i].name+"<div class='add'><div class='bot'>&#xe67c;</div></div></li>").appendTo(ul);
		}
	}
	
})
