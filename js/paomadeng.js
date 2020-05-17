~function(){
    let list = document.getElementsByClassName('goods_list')[0];
    let box = document.getElementsByClassName('nices_recommends')[0];
    let logo =document.getElementsByClassName('nices_logo')[0];
 
   
   let timer = setInterval(fn,10);
   function fn(){
       let curT = parseFloat(list.style.left);
       curT -=0.5;
       // console.log(curT);
       
       // 如果盒子移动超过11850，那么说明最后一张已经完全显示出来了，让当前ul瞬间left变为0；从头开始循环
       if(curT<=-1900){
           curT = -0;
           // list.style.left = '-200px';    
       }
       list.style.left = curT + 'px';
   }
   clearInterval(timer);
   box.onmouseout = function(){
       timer = setInterval(fn,10)
   }
   box.onmousemove = function(){
       clearInterval(timer)
   }
   logo.onmouseout = function(){
       timer = setInterval(fn,10)
   }
   logo.onmousemove = function(){
       clearInterval(timer)
   }
}()