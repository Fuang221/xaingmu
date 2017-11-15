window.onload=function(){
	//logo
	(function(){
		var dw=document.getElementById('dw');
		var topP=document.getElementById('topP');
		var topA=topP.getElementsByTagName('a')[0];
		var chq1=topP.getElementsByTagName('span')[0];
		var dizhi=document.getElementById('dizhi');
		var dzA=dizhi.getElementsByTagName('a');
		dw.onmouseover=function(){
			dizhi.style.display="block";
			chq1.style.backgroundPosition='0 -46px';
			
		}
		dw.onmouseleave=function(){
			dizhi.style.display="none";
			chq1.style.backgroundPosition='0 -31px';
		}
		for(var i=0;i<dzA.length;i++){
			dzA[i].onclick=function(){
				topA.innerHTML=this.innerHTML;
				dizhi.style.display="none";
			}
		}
	})();
	//手机扫码
	(function(){
		var a6=document.getElementById('a6');
		var img=document.getElementById('img');
		a6.onmouseenter=function(){
			img.style.display="block"
		}
		a6.onmouseleave=function(){
			img.style.display="none"
		}
	})();	
	//轮播图 
	var lunbo=document.getElementById('lunbo');
	//ul1
	var oUl1 = document.getElementById('ul1');
	var aLi1 = oUl1.getElementsByTagName('li');

	// ul2
	var oUl2 = document.getElementById('ul2');
	var aLi2 = oUl2.getElementsByTagName('li');
	//下标
	var iNow=0;
	//boxD
	var arr=['pink','#073d79','rgb(222, 204, 167)','rgb(34, 34, 34)','#000','rgb(154, 2, 242)'];
	var boxD=document.getElementById('boxD');
	for (var i = 0;i < aLi1.length;i++) {
		aLi1[i].index = i;
		aLi1[i].onmouseenter = function () {
			iNow=this.index;
			clearAdd();
		}
	}
	//开启定时器
	var timer=setInterval(next,3000);
	//清除定时器
	lunbo.onmouseenter=function(){
		clearInterval(timer);
	}
	lunbo.onmouseleave=function(){
		timer=setInterval(next,3000);
	}
	function clearAdd(){
		for (var j = 0;j < aLi1.length;j++) {
				aLi1[j].className = '';
				aLi2[j].style.display = 'none';
			}
			aLi1[iNow].className = 'active';
			aLi2[iNow].style.display = 'block';
			boxD.style.background=arr[iNow];
	}
	//定时器
	function next(){
		iNow++;
		if(iNow==aLi1.length){
			iNow=0;
		}
		clearAdd();
	}
	//侧边选项卡
	$(function () {
		$('#boxLul li').mouseenter(function () {
			// 移出所有
			$('#boxLul li').removeClass('ogg');
			$('#boxLul1').hide();
			$('#boxLul1 li').hide();
			// 给自己添加
			$('#boxLul li').eq($(this).index()).addClass('ogg');
			$('#boxLul1').show();
			$('#boxLul1 li').eq($(this).index()).show();
		})
		$('#boxL').mouseleave(function () {
			// 移出所有
			$('#boxLul li').removeClass('ogg');
			$('#boxLul1').hide();
		})
	})
	//倒计时
	setInterval(function () {
			var dayL = document.getElementById('dayL');
			var Span=dayL.getElementsByTagName('span');
			var oDate = new Date();
			// 当前的时间戳
			var nowTime = oDate.getTime();
			
			// 目的时间戳
			// 设置时间
			oDate.setHours(20,0,0);
			var targetTime = oDate.getTime();
			//倒计时的总时间(秒)
			var distance = parseInt((targetTime - nowTime) / 1000);
			//时
			var hover = parseInt(distance / 3600);
			// 剩下的秒数
			var a = distance % 3600;
			// 分
			var mintues = parseInt(a / 60);
			// 剩下的秒数
			var b = a % 3600;
			//秒数
			var seconds = b % 60;
			Span[0].innerHTML = hover;
			Span[1].innerHTML = '时';
			Span[2].innerHTML = mintues;
			Span[3].innerHTML = '分';
			Span[4].innerHTML = seconds;
			Span[5].innerHTML = '秒';
		},1000);
	//选项卡
	$(function(){
		//下标
		var now=0;	
		var _this=null;
		$('.dayR1 li').mouseenter(function () {
			now=$(this).index();
			 _this = this;
			add();
		});
		//上一个
		$('#pre').click(function () {
			now--;
			if(now<0){
				now=6;
			}
			add();
		});
		//下一个
		$('#next').click(function () {
			now++;
			if(now>6){
				now=0;
			}
			add();
			console.log(now);
		});
		
		function add(){
			// 移出所有
			$('.dayR1 li').removeClass('coor');
			$('.dayR2 .dayR2u').hide();
			// 给自己添加
			$('.dayR1 li').eq(now).addClass('coor');
			$('.dayR2 .dayR2u').eq(now).show();
		}
	});
	// 楼层选项卡
	$(function () {
		$('#top1 li').mouseenter(function () {
			// 移出所有
			$('#top1 li').removeClass('asd');
			$('#fMiddle1 #xxx').hide();
			// 给自己添加
			$(this).addClass('asd');
			$('#fMiddle1 #xxx').eq($(this).index()).show();
		})
		$('#top2 li').mouseenter(function () {
			// 移出所有
			$('#top2 li').removeClass('asd');
			$('#fMiddle2 #fff').hide();
			// 给自己添加
			$(this).addClass('asd');
			$('#fMiddle2 #fff').eq($(this).index()).show();
		})
		$('#top3 li').mouseenter(function () {
			// 移出所有
			$('#top3 li').removeClass('asd');
			$('#fMiddle3 #eee').hide();
			// 给自己添加
			$(this).addClass('asd');
			$('#fMiddle3 #eee').eq($(this).index()).show();
		})
		$('#top4 li').mouseenter(function () {
			// 移出所有
			$('#top4 li').removeClass('asd');
			$('#fMiddle4 #ttt').hide();
			// 给自己添加
			$(this).addClass('asd');
			$('#fMiddle4 #ttt').eq($(this).index()).show();
		})
		$('#top5 li').mouseenter(function () {
			// 移出所有
			$('#top5 li').removeClass('asd');
			$('#fMiddle5 #iii').hide();
			// 给自己添加
			$(this).addClass('asd');
			$('#fMiddle5 #iii').eq($(this).index()).show();
		})
		$('#top6 li').mouseenter(function () {
			// 移出所有
			$('#top6 li').removeClass('asd');
			$('#fMiddle6 #kkk').hide();
			// 给自己添加
			$(this).addClass('asd');
			$('#fMiddle6 #kkk').eq($(this).index()).show();
		})
	});
	// 公益轮播
	$(function(){
		var n=0;
		var lis=$('#botMidR li');
		var liW=lis.width();
		console.log(liW);
		$('#bLeft').click(function(){			
			n--;
			if(n<=0){
				n=0;
			}			
			$('#botMidR').stop().animate({left: -n * 186},100);
			
		});
		$('#bRight').click(function(){
			n++;
			if(n>=7){
				n=7;
			}
			$('#botMidR').stop().animate({left: -n * 186},100);
			
		});		
	});
	//定位滚轮事件
	$(function(){
		var wel = document.getElementById('wel');
		var dayZ = document.getElementById('dayZ');
		var s=getPos(wel).top + 200;
		var z=getPos(dayZ).top - 350;
		console.log(z);
		$(document).scroll(function(){
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			console.log(scrollTop);
			if(scrollTop>s || scrollTop<z){
				$('#fixed').css({display:'none',position:'static'});
			}else{
				$('#fixed').css({display:'block',position:'fixed'});
			}					
		})
	})
}

	

