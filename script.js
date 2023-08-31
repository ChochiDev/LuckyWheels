let wheel=document.querySelector(".wheel");
let Btn=document.querySelector(".Btn");
let value=Math.ceil(Math.random()*3600)
Btn.onclick=function(){
    wheel.style.transform="rotate("+value+"deg)";
    value+=Math.ceil(Math.random()*3600)
}

