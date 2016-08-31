$(document).ready(function(){
	
	newsImg();
	ScrollImgLeft();
	showTime();
	scrollLink(20,1500);
	

	
});
function linkArrow(){
	var ul=$(".link_content ul")[0]; //定义变量o为document.getElementByIdx_x("marqueebox")对象
		//if(!o)return;
		ul.innerHTML+=ul.innerHTML; 
	$(".link_box .arrow_left").on("click",function(){

		if(Math.abs(parseInt(ul.style.marginLeft))>=ul.scrollWidth/2) ul.style.marginLeft=0; 
	})
}
function scrollLink(speed,delay) {   //函数 函数名(变量1,变量2,变量3)滚动高度,速度,延迟
		var p=false; //定义变量 p为假;
		var t; //定义变量t了
		var $ul=$(".link_content ul"); //定义变量o为document.getElementByIdx_x("marqueebox")对象
		var ul = $ul[0];
		var blockNum = $(".link_content ul li").length;
		if(blockNum<4){return}

		var lengthUl = ul.scrollWidth;
		var singleBlock = lengthUl/(blockNum);
		
		var index;
		
		var array = new Array();
		for(var i= 1;i<=blockNum;i++){
			array.push(i*singleBlock)
		};
		//if(!o)return;
		var list = $ul.html();
		


		$ul.append(list).prepend(list); //设置变量o的innerHTML对象为自加;设置为类似123123的队列。当高度大于
		//一般，即经过一半的队列（个数）时，马上设置为margintop=0的初始位置，因为位于第二段的开始，所以没有抖动。
		
		ul.style.marginLeft=-lengthUl+'px'; //o的属性，设置或获取对象的上边距宽度
		
		ul.onmouseover=function(){p=true;} 
		ul.onmouseout=function(){p=false;} 

		function start(){ //“开始”函数
			t=setInterval(scrolling,speed); //给前面定义的变量t赋值=自动（滚动，速度）
			//speed：在间隔短时间（如20ms）移动1像素，模拟速度
			if(!p) ul.style.marginLeft=parseInt(ul.style.marginLeft)-1+"px"; //当P为空，属性o的上边距宽度为数字[把变量o上边距宽度转为integer类型，其中parseInt功能为转换]
			function arrow(){
				$(".arrow_right").on("click",function(){
							
								if(index==blockNum){index=1;ul.style.marginLeft=-lengthUl+'px';}
									else{index+=1}
							
							if(!$ul.is(":animated"))
							$ul.stop(false,true).animate({'margin-left':-(array[index-1]+lengthUl)},{duration:'fast',complete:function(){}})
				});
				$(".arrow_left").on("click",function(){
								if(index==blockNum){index=1;ul.style.marginLeft=-lengthUl+'px';}
									else{index+=1}
							if(!$ul.is(":animated"))										
							$ul.stop(false,true).animate({'margin-left':(array[index-1]-lengthUl)},{duration:'fast',complete:function(){}})
				})
			}
			arrow();
		}	

		function scrolling(){ //“滚动”函数
			var marginLeft = ul.style.marginLeft;
			if(!p)ul.style.marginLeft=parseInt(marginLeft)-1+"px"; //上边距宽度为数字[把变量o上边距宽度转为integer类型，其中parseInt功能为转换]
			if(Math.abs(parseInt(marginLeft)-1)>=ul.scrollWidth/2) ul.style.marginLeft=0; //如果计算出来的上边距宽度大于或者等于滚动的高度除以2 则o的上边距宽度为0
			for(var i = 1;i<=blockNum;i++){
					
				     	if(Math.abs(parseInt(marginLeft)-1+lengthUl)<array[i-1]){index = i;break;}
			};
			
			}

		start();
}
function ui(){
	$(".about_content_l .div03").css({"height":$(".about_content_r").height()-101+'px'})
}
function ScrollImgLeft(){
	var speed=20
	var scroll_begin = document.getElementById("scroll_begin");
	var scroll_end = document.getElementById("scroll_end");
	var scroll_div = document.getElementById("scroll_div");
	if(!(scroll_begin && scroll_end && scroll_div))return;
	if($("#scroll_div img").length < 6)return;
	scroll_end.innerHTML=scroll_begin.innerHTML
	function Marquee(){
		if(scroll_div.scrollLeft > scroll_begin.offsetWidth)
		scroll_div.scrollLeft=0;
	
		else{
		
			scroll_div.scrollLeft++	
		}
		
	}
	var MyMar=setInterval(Marquee,speed)
	scroll_div.onmouseover=function() {clearInterval(MyMar)}
	scroll_div.onmouseout=function() {MyMar=setInterval(Marquee,speed)}
}
var newsImg = function(){
		/*测试数据*/
		
		$(".new_thumb a").click(function(e){
			e.preventDefault();
			$(".new_thumb a").removeClass('active');
			$(this).addClass('active');
			$(".new_pic_title").html($(this).data("title"));

			var href = $(".new_thumb a.active").attr("href");
			var activeImg = $(".new_thumb a.active").find("img").attr("src");
			$(".new_pic_lg a").attr({'href':href});
			$(".new_pic_lg img").attr({"src":activeImg});
		});
		$(".new_thumb a").first().trigger('click');
		
}

function showTime(){ 
            var show_day=new Array('星期一','星期二','星期三','星期四','星期五','星期六','星期日'); 
            var time=new Date(); 
            var year=time.getFullYear(); 
            var month=time.getMonth(); 
            var date=time.getDate(); 
            var day=time.getDay(); 
            var hour=time.getHours(); 
            var minutes=time.getMinutes(); 
            var second=time.getSeconds(); 
            month=month+1; 
            month<10?month='0'+month:month; 
            
            hour<10?hour='0'+hour:hour; 
            minutes<10?minutes='0'+minutes:minutes; 
            second<10?second='0'+second:second; 
            var now_time=year+'年'+month+'月'+date+'日'+' '+show_day[day-1]+' '+hour+':'+minutes+':'+second; 
            document.getElementById('showtime').innerHTML=now_time; 
            setTimeout(showTime,1000); 
        
        };


var glide = $('.slider').glide({
	type: 'carousel',
	startAt: 1,
	touchDistance: 2
});


//加载首页新闻
function loadIndexNews(){
	try{
	$.get(ctx+"/notice/doGetIndexNews", function(obj){
		if(obj.rs){
			var item = obj.datas;
			$("#index_news_title").html(item["NOTICE_TITLE"]);
			if(item["IS_LINK"] == 1){
				$("#index_news_context").html("");
				$("#index_news_url").attr("href", item["LINK_URL"]).attr("target", "_blank");
			}else{
				$("#index_news_context").html(item["NOTICE_CONTENT"]);
				$("#index_news_url").attr("href", (ctx+'/notice/getNotice?pkNotice='+item["PK_NOTICE"]))
			}
			$("#index_news_url").show();
		}else{
			$("#index_news_url").hide();
		}
	});
	}catch(e){}
}

//生产环境特殊要求，直接跳转到 新员工奖励十元的公告 16.03.15 add by syy
function jumpNotice(pkNotice){
	window.location.href=ctx+"/notice/getNotice?pkNotice="+pkNotice;
}