var hitnumber="";
var varun="";
var r;
var score=0;

function bubble(){
  varun=""
for(var i=0;i<=153;i++){
   var r= Math.floor(Math.random()*10);
 varun +=  `<div class="bubble">${r}</div>`
}
document.querySelector(".content").innerHTML=varun
}
function runtimer(){
timer=60;
setInterval(function(){
  if(timer>0){
  timer--
  document.querySelector("#t").textContent=timer
  }
  if(timer===0){
    document.querySelector(".content").innerHTML=`<h1>GAME OVER</h1><br><h1> SCORE:</h1><h1>${+score}</h1>`;
  }

}, 1000);
}
function Incscore(){

/*var a= document.querySelector(".content")
a.addEventListener("click",function(){*/
  score += 10;
  document.querySelector("#s").textContent=score;
}

function hit(){
hitnumber=Math.floor(Math.random()*10);
document.querySelector("#h").textContent=hitnumber
}
document.querySelector(".content").addEventListener("click",function(a){
      var clickednumber= Number(a.target.textContent)
       if(clickednumber === hitnumber){
        Incscore();
        hit();
         bubble();
       }
})


bubble();
runtimer();
Incscore();
hit();