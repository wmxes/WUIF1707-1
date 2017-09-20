window.onload=function() {
	let banner=$('.banner')[0];
	let xiaomi=$('.xiaomi')[0];
	let lis=$('li',xiaomi);
	let btn_list=$('.btn-list')[0];
	let btns=$('li',btn_list);
	// console.log(btns);
	let left=$('.banner-left')[0];
	let right=$('.banner-right')[0];
	let num=0;
	let t;


	//////////////////////////////////////////封装$
	function $(select,ranger){
			ranger=ranger?ranger:document;
			var fir=select.charAt(0);
			if(fir=='.'){
				return ranger.getElementsByClassName(select.substring(1),ranger);
			}else if(fir=='#'){
				return document.getElementById(select.substring(1));
			}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
				return ranger.getElementsByTagName(select);
			}

	}

	//////////////////////////////////////////
	t=setInterval(move,1000);
	//////////////////////////////////////////////
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,1000);
	}
	//////////////////////////////////////////////
	for(let i=0;i<btns.length;i++){
		console.log(btns);
		btns[i].onclick=function(){
			for(let j=0;j<lis.length;j++){
				animate(lis[j],{opacity:0});
				// lis[j].style.display='none';
				btns[j].style.background='lightblue';
				
			}
			animate(lis[i],{opacity:1});
			// lis[i].style.display='block';
			btns[i].style.background='#fff';
			
			num=i;
		}		
	}
	//////////////////////////////////////////////
	right.onclick=function(){
		move();
	}
	left.onclick=function(){
		moveL();
	}




	//////////////////////////////////////////////
	function move(){
		num++;
		if(num==lis.length){
			num=0;
		}
		for(let i=0;i<lis.length;i++){
			animate(lis[i],{opacity:0});
			// lis[i].style.display='none';
			btns[i].style.background='lightblue';
		}
		animate(lis[num],{opacity:1});
		// lis[num].style.display='block';
		btns[num].style.background='#fff';
		
	}
	//////////////////////////////////////////////
	function moveL(){
		num--;
		if(num<0){
			num=lis.length-1;
		}
		for(let i=0;i<lis.length;i++){
			animate(lis[i],{opacity:0});
			// lis[i].style.display='none';
			btns[i].style.background='lightblue';
		}
		// lis[num].style.display='block';
		animate(lis[num],{opacity:1});
		btns[num].style.background='#fff';
		
	}
}










