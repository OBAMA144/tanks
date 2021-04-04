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


let imgUrl = './assets/tank.png';

let tank;

fabric.Image.fromURL(imgUrl, function(img) {
  canvas.add(
    img.set({  
      originX: "center",  
      originY: "center", 
      left: 100, 
      top: 100}
      ));
  tank = img
});



window.addEventListener("keydown", keyDown, false);
window.addEventListener("keyup", keyUp, false);


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
    
    
    if($.state.keys.l) {
      tank.angle--;
    };
    if($.state.keys.r) {
      tank.angle++;
    };
    if($.state.keys.d) {
      
        tank.left -= Math.sin(tank.angle * Math.PI / 180);
        tank.top  += Math.cos(tank.angle * Math.PI / 180);
      
      
      };
    if($.state.keys.u) {
      if(tank.left > 15 ){
          tank.left += Math.sin(tank.angle * Math.PI / 180);
          tank.top  -= Math.cos(tank.angle * Math.PI / 180);
      } else{
        tank.left = 16;
      }
      };

    // tank.left += offset_x;
    // tank.top  += offset_y;

    canvas.renderAll();
  
  }

  function tick(){
    updateTankPosition()    
    
    
}

setInterval(function(){
    tick(false)
}, $.settings.timeBetweenTicks)