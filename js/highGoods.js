(function(){
    const highGoods_img = document.getElementById('highGoods_img');
    const highGoods_lis = highGoods_img.getElementsByTagName('li');
    const highGoods_leftbtn = document.getElementById("highGoods_leftbtn");
    const highGoods_rightbtn = document.getElementById("highGoods_rightbtn");

    // console.log(highGoods_leftbtn, highGoods_rightbtn);

    let idx=0;
    let lock=true;
    highGoods_rightbtn.onclick=function(){        
        if(!lock) return
        lock=false;
        idx++;   
        if (idx >= 6) {
          idx = 6;
        }      
        highGoods_img.style.transition="transform .5s ease 0s";
        highGoods_img.style.transform="translateX("+idx*-251 +"px)";

        setTimeout(function(){
            lock=true;
        },500)         
    }

    highGoods_leftbtn.onclick=function(){
        if (!lock) return;
        lock = false;        
        idx--; 
        if(idx<=0){
            idx=0;
        }
        highGoods_img.style.transition = "transform .5s ease 0s";
        highGoods_img.style.transform = "translateX(" + idx * -251 + "px)";
        setTimeout(function () {
          lock = true;
        }, 500); 

    }



})()