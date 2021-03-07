const $ = {
    container: null,
    canvas: null,
    ctx: null,
  
    settings: {
        timeBetweenTicks:15
      },
  
    state: {
        pos:{
          x: null,
          y: null,
          angle:null
        },
        over: false,
        keys:{
          u:false,
          d:false,
          l:false,
          r:false,
        }
      }
  
}

$.canvas = document.getElementById("myCanvas");
$.ctx = $.canvas.getContext("2d");
$.ctx.fillStyle = "black";
$.ctx.fillRect(0, 0, $.canvas.width, $.canvas.height);
let tankImg = document.getElementById("tank");

window.addEventListener("keydown", keyDown, false);
window.addEventListener("keyup", keyUp, false);

$.state.pos = {x:$.canvas.width /2,y:$.canvas.height /2}


$.state.moveDirection = "S"


function keyUp(e) {
    move(e, false);
    
  }
  
  function keyDown(e) {
    move(e, true);
  }

  function move(e, keyDown) {
    if (e.keyCode === 37  ) $.state.keys.l = keyDown;
    if (e.keyCode === 39)  $.state.keys.r = keyDown;
    if (e.keyCode === 38)  $.state.keys.u = keyDown;
    if (e.keyCode === 40)  $.state.keys.d = keyDown;
  }

  function paintTank(erase){
      if(erase){
        $.ctx.fillStyle = "black";
        $.ctx.fillRect($.state.pos.x,$.state.pos.y ,20 ,37 );
      }else{
        var imgSprite = new Image();
        imgSprite.src = "img/sprite.png";
        $.ctx.drawImage(tankImg, $.state.pos.x, $.state.pos.y);
      }
      
      
  }

  

  
  function update(){
    let offset_x=0,offset_y=0;
    
    if($.state.keys.l) offset_x--;
    if($.state.keys.r) offset_x++;
    if($.state.keys.u) offset_y--;
    if($.state.keys.d) offset_y++;

    $.state.pos.x += offset_x,$.state.pos.y += offset_y;
  
  }

  function tick(){
    paintTank(true);
    update()    
    paintTank(false);
    
}

setInterval(function(){
    tick(false)
}, $.settings.timeBetweenTicks)