let ce=document.getElementsByClassName('ce')[0];
let lis=ce.getElementsByTagName('li');
let item=document.getElementsByClassName('item');		
			for(let i=0;i<lis.length;i++){
				
				// console.log(lis[i]);
				lis[i].onmouseover=function(){
					item[i].style.display='block';
					// item[i].className='item block';
				}
				lis[i].onmouseout=function(){
					item[i].style.display='none ';
					// item[i].className='item none';
				}
			}


let bigimg_ul=document.getElementsByClassName('xiaomi')[0];
	// let imgs=bigimg_ul.getElementsByTagName('img');
	let btns=document.getElementsByClassName('btn-list');
	let les=btns[0].getElementsByTagName('li');
			for(let i=0;i<les.length;i++){
				// let asd=lies[i].getElementsByTagName('img')[0];
				les[i].onmouseover=function(){
					for(let j=0;j<les.length;j++){
						les[j].style.display='lightblue';
					}
					// console.log(asd);
					les[i].style.display='#fff';
					// asd.className='block';

				}
				
			}