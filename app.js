const $ = {
    container: null,
    canvas: null,
    ctx: null,
  
    settings: {
        timeBetweenTicks:15
      },
  
    state: {
        over: false,
        keys:{
          u:false,
          d:false,
          l:false,
          r:false,
        }
      }
  
}




var canvas = this.__canvas = new fabric.StaticCanvas('c');

let imgElement = new Image();
imgElement.src = './assets/tank.png';
let tankObj = new fabric.Image(imgElement, {
  left: 50,
  top: 50,
  angle: 90
});

canvas.add(tankObj);


window.addEventListener("keydown", keyDown, false);
window.addEventListener("keyup", keyUp, false);

//$.state.pos = {x:$.canvas.width /2,y:$.canvas.height /2}


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

   

  
  function updateTankPosition(){
    let offset_x=0,offset_y=0;
    
    if($.state.keys.l) offset_x--;
    if($.state.keys.r) offset_x++;
    if($.state.keys.u) offset_y--;
    if($.state.keys.d) offset_y++;

    tankObj.left += offset_x;
    tankObj.top  += offset_y;
    $.state.pos.x += offset_x,$.state.pos.y += offset_y;
  
  }

  function tick(){
    updateTankPosition()    
    
    
}

setInterval(function(){
    tick(false)
}, $.settings.timeBetweenTicks)