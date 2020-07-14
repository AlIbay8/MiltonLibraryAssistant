//CONSTANTS
var blinkWaitTime = 120;
var eyeTextSize = 14;
var eyeColor = "#ffffff";
var eyeDir = "forward";
var eyeState = "open";

var eye = {};
var eyeClosing = {};

var blinkGate = true;

eye["middle"] = `
                              ...',;;:cccccccc:;,..
                          ..,;:cccc::::ccccclloooolc;'.
                       .',;:::;;;;:loodxk0kkxxkxxdocccc;;'..
                     .,;;;,,;:coxldKNWWWMMMMWNNWWNNKkdolcccc:,.
                  .',;;,',;lxo:...dXWMMMMMMMMNkloOXNNNX0koc:coo;.
               ..,;:;,,,:ldl'   .kWMMMWXXNWMMMMXd..':d0XWWN0d:;lkd,
             ..,;;,,'':loc.     lKMMMNl. .c0KNWNK:  ..';lx00X0l,cxo,.
           ..''....'cooc.       c0NMMX;   .l0XWN0;       ,ddx00occl:.
         ..'..  .':odc.         .x0KKKkolcld000xc.       .cxxxkkdl:,..
       ..''..   ;dxolc;'         .lxx000kkxx00kc.      .;looolllol:'..
      ..'..    .':lloolc:,..       'lxkkkkk0kd,   ..':clc:::;,,;:;,'..
      ......   ....',;;;:ccc::;;,''',:loddol:,,;:clllolc:;;,'........
          .     ....'''',,,;;:cccccclllloooollllccc:c:::;,'..
                  .......'',,,,,,,,;;::::ccccc::::;;;,,''...
                    ...............''',,,;;;,,''''''......
                         ............................`;

eyeClosing["middle"] = `
                               ...'',;;;;::;;;,'..
                          ..,;:cloodddxxxkkkkkkkkxol;..
                       .';codxxkkk000000000000kkkkkkxdoc,..
                     .,codxk0000000000000000000000000kkxddoc,..
                  .':ldxk00000000000000000000000000000000kkxxol:'
               .,:ldxkk000000000K000000000000000K0000000000kkxkkx:.
            ..,coxkk000000000000000kk000000000000000000000000kxxxxl'
           .,;codxxkk00000000kkk0KK0XNWWWWWWWWWNX0kkkkk00000kkxdool;.
         .';::ccldk00KKKK00oc;..,x00KNNXXXXXNNX0000000000kkkkkkxoc:,..
       ..,;,'..,o00000kkxo,       ,lkKKKKKK0K0d,.;ldk000KK0kxxxdoc:'..
      ..,,'.  .,lk0xxxdol:,..       .,ldddl:,.   .,codkk00kxdollc:,...
      ..'.......',;:c::cclccc::;,,,',,;::::;,;;:clodddxdol:;::;'......
         .....  ...''',,,;;;:ccllloooooooooooooolllcccc:;;,....
                  .......'',,,,,,;;;:::ccclllccc:::;;;,''...
                    ..............'''',,;;;;;,,,''''......
                         .............................`;

eye["forward"] = `                                                                                 
                              ...',;;:cccccccc:;,..                            
                          ..,;:cccc::::ccccclloooolc;'.                        
                       .',;:::;;;;:loodxkOkkxxkxxdocccc;;'..                   
                     .,;;;,,;:coxldKNWWWMMMMWNNWWNNKkdolcccc:,.                
                  .',;;,',;lxo:dXWMMMMMMMMWNk.. loOXNNNX0koc:coo;.             
               ..,;:;,,,:ldl'.kWMMMWXXNWMMMMXd..   ':d0XWWN0d:;lkd,            
             ..,;;,,'':loc.  lKMMMNl. .cOKNWNK:     ..';lxO0X0l,cxo,.          
           ..''....'cooc.    cONMMX;   .lOXWNO;          ,ddx0Ooccl:.          
         ..'..  .':odc.      .x0KKKkolcldO00xc.          .cxxxkkdl:,..         
       ..''..   ;dxolc;'      .lxxO0OkkxxO0kc.         .;looolllol:'..         
      ..'..    .':lloolc:,..    'lxkkkkkOkd,      ..':clc:::;,,;:;,'..         
      ......   ....',;;;:ccc::;;,,:loddol:,,.,,;:clllolc:;;,'........          
          .     ....'''',,,;;:cccccclllloooollllccc:c:::;,'..                  
                  .......'',,,,,,,,;;::::ccccc::::;;;,,''...                   
                    ...............''',,,;;;,,''''''......                     
                         ............................`;                    







eyeClosing["forward"] = `                                                                                
                               ...'',;;;;::;;;,'..                             
                          ..,;:cloodddxxxkkkkkkkkxol;..                        
                       .';codxxkkkOOOOOOOOOOOOkkkkkkxdoc,..                    
                     .,codxkOOOO00000000OOOO0OOOOOOOOkkxddoc,..                
                  .':ldxkOOOOO00000000000000000000000OOOOkkxxol:'              
               .,:ldxkkOOOOOO000K000000000000000K000000000Okkxkkx:.            
            ..,coxkkOOOOOOOOOOOOOOOkkOOOOO0000OOOO000000000OOkxxxxl'           
           .,;codxxkkOOO0O00Okkk0KK0XNWWWWWWWWWNX0kkkkkOOOOOkkxdool;.          
         .';::ccldkO0KKKK0Ooc;KKKx00KNNXXXXXNNX0OO000O00Okkkkkkxoc:,..         
       ..''..   ;dxolc;'      .lxxO0OkkxxO0kc.         .;looolllol:'..         
      ..'..    .':lloolc:,..    'lxkkkkkOkd,      ..':clc:::;,,;:;,'..         
      ......   ....',;;;:ccc::;;,,:loddol:,,.,,;:clllolc:;;,'........          
          .     ....'''',,,;;:cccccclllloooollllccc:c:::;,'..                  
                  .......'',,,,,,,,;;::::ccccc::::;;;,,''...                   
                    ...............''',,,;;;,,''''''......                     
                         ............................`;              







eye["left"] = `                                                                                 
                              ...'',;;;;:::;;,,'..                             
                          .';:colllloodxxxkxkkkkkdo:,..                        
                       .,:ldxkO0OOOOkxkkO00O0NNNXXKOxdl:,'..                   
                    ..;cdOXNNNWWNO:.        .;cllx0KKKKKkdoc:,..               
                 ..;codOXWMMMMMMMW0;               .,okKNWNKxlccc,.            
              ..;ldxxOXWO:,oNMMMMMWk.                 .'ckKXNKxlcoo,           
            ..;ldxxxONMN;  .OWMMMMMX'                    .cdkKXOlcol'          
          ..;codollONMMWk'.lNMMMMMW0'                     .cxxO0Ooc:,.         
         .,:cllc:cxKNWNWMWWWMMMWNXO;                      .okkxdxdo:'.         
       .':clc:,,cx0K00xkKNNNWWXKkc.                    ..;loooc::ll:,..        
      .,:cc;,...:odxkkkxddl::::,.                 ..';:cc:;:c:;,',''...        
      .';;;,'..',,;:ccccllllc::;,,''''''''',,,,;:ccllllc:;,,'.....   ..        
       ..........''',,,;;;;:::cllllllolllllloolllllcc:::;,'...                 
              ..........',,,;;;;;;;;:cccccccccc::::;;,,''...                   
                   .........''''''''',,;;;;;,,,'''''......                     
                         .............................`;                







eyeClosing["left"] = `                                                                                 
                               ...'',;;;;::;;;,'..                             
                          ..,;:cloodddxxxkkkkkkkkxol;..                        
                       .';codxxkkkOOOOOOOOOOOOkkkkkkxdoc,..                    
                     .,codxkOOOO00000000OOOO0OOOOOOOOkkxddoc,..                
                  .':ldxkOOOOO00000000000000000000000OOOOkkxxol:'              
               .,:ldxkkOOOOOO000K000000000000000K000000000Okkxkkx:.            
            ..,coxkkOOOOOOOOOOOOOOOkkOOOOO0000OOOO000000000OOkxxxxl'           
           .,;codxxkkOOO0O00Okkk0KK0XNWWWWWWWWWNX0kkkkkOOOOOkkxdool;.          
         .';::ccldkO0KKKK0OoccKKKK00KNNXXXXXNNX0OO000O00Okkkkkkxoc:,..         
       .':clc:,,cx0K00xkKNNNWWXKkc.OKNNX               ..;loooc::ll:,..        
      .,:cc;,...:odxkkkxddl::::,.                 ..';:cc:;:c:;,',''...        
      .';;;,'..',,;:ccccllllc::;,,''''''''',,,,;:ccllllc:;,,'.....   ..        
       ..........''',,,;;;;:::cllllllolllllloolllllcc:::;,'...                 
              ..........',,,;;;;;;;;:cccccccccc::::;;,,''...                   
                   .........''''''''',,;;;;;,,,'''''......                     
                         .............................`;                     




eye["far right"] = `                                                                                                                                      
                              ...',,;:::cccc::;,'..                            
                          ..,;:cllllloooooooddxxxdol;'.                        
                       .',:cccc:cc:lloooxxxdxxkkkkkxodlc;,.                    
                     .';:;;,,;:cddccdxxdxkOO0XWWWWWNXK0Okxdl:,.                
                  ..'',,,'';ldl:,.         .'dNMMMMMMWMMWWKkdxx:.              
               ...''.....;cl;.               oKWMMMMMWKOOKNWKkO0x;.            
             ....... ..,c:'                 .ONNWMMMWO. .oOKWN0K0d,.           
           ......   .';,.                   .xKXNWMWMNl',k0KXXK0Oxc'.          
         ..'..  ..;::,..                     .lk0KXWMMWNNNKO0000kl;..          
       ..''..   ;ol:;,'..                     .lOKXWWMWNKkkkkOkxdl,..          
      .....    .coc;;::::,..                   .o0XXXKOxoooooxkxoc,..          
      ....     ...',,,;;:ccc::;;,'''''''''',,,;:lddddoocc:;;:ooc:,...          
                ....'''',,,;;::cccclllllooooooooolccccc:;,''',,,....           
                  ........'',,,,,,;;;:::cccccccccc:;;,,''........              
                    ...............''',,;;;;,,,',,,'........                   
                         .............................`;                  







eyeClosing["far right"] = `                                                                                 
                               ...'',;;;;::;;;,'..                             
                          ..,;:cloodddxxxkkkkkkkkxol;..                        
                       .';codxxkkkOOOOOOOOOOOOkkkkkkxdoc,..                    
                     .,codxkOOOO00000000OOOO0OOOOOOOOkkxddoc,..                
                  .':ldxkOOOOO00000000000000000000000OOOOkkxxol:'              
               .,:ldxkkOOOOOO000K000000000000000K000000000Okkxkkx:.            
            ..,coxkkOOOOOOOOOOOOOOOkkOOOOO0000OOOO000000000OOkxxxxl'           
           .,;codxxkkOOO0O00Okkk0KK0XNWWWWWWWWWNX0kkkkkOOOOOkkxdool;.          
         .';::ccldkO0KKKK0Ooc;KKKx00KNNXXXXXNNX0OO000O00Okkkkkkxoc:,..         
       ..''..   ;ol:;,'..                     .lOKXWWMWNKkkkkOkxdl,..          
      .....    .coc;;::::,..                   .o0XXXKOxoooooxkxoc,..          
      ....     ...',,,;;:ccc::;;,'''''''''',,,;:lddddoocc:;;:ooc:,...          
                ....'''',,,;;::cccclllllooooooooolccccc:;,''',,,....           
                  ........'',,,,,,;;;:::cccccccccc:;;,,''........              
                    ...............''',,;;;;,,,',,,'........                   
                         .............................`;               



eye["right"] = `                                                                                 
                              ...',;;:cccccccc:;,..                            
                          ..,;:cccc::::ccccclloooolc;'.                        
                       .',;:::;;;;:loodxkOkkxxkxxdocccc;;'..                   
                     .,;;;,,;:cox  ...WWMMMMWNNWWNNKkdolcccc:,.                
                  .',;;,',;lxo:   ...kMMMMMMMWNKKLlXNNkkdkoc:coo;.             
               ..,;:;,,,:ldl'    ...kkWXXNWMMMMXMMddkk.XWWN0d:;lkd,            
             ..,;;,,'':loc.      ..lKMMMNl.  .cOKNWNKKK;lxO0X0l,cxo,.          
           ..''....'cooc.         .cONMMX;   .lOXWNOKMk. ,ddx0Ooccl:.          
         ..'..  .':odc.            .x0KKKkolcldO00WNMk.  cxxxkkdl:,..          
       ..''..   ;dxolc;'            .lxxO0OkkxxO0WKKc. .;looolllol:'..         
      ..'..    .':lloolc:,..          'lxkkkkkOkd,..':clc:::;,,;:;,'..         
      ......   ....',;;;:ccc::;;,    ''',:lokdol:clllolc:;;,'........          
          .     ....'''',,,;;:cccccclllloooollllccc:c:::;,'..                  
                  .......'',,,,,,,,;;::::ccccc::::;;;,,''...                   
                    ...............''',,,;;;,,''''''......                     
                         ............................`;                       







eyeClosing["right"] = `                                                                                 
                               ...'',;;;;::;;;,'..                             
                          ..,;:cloodddxxxkkkkkkkkxol;..                        
                       .';codxxkkkOOOOOOOOOOOOkkkkkkxdoc,..                    
                     .,codxkOOOO00000000OOOO0OOOOOOOOkkxddoc,..                
                  .':ldxkOOOOO00000000000000000000000OOOOkkxxol:'              
               .,:ldxkkOOOOOO000K000000000000000K000000000Okkxkkx:.            
            ..,coxkkOOOOOOOOOOOOOOOkkOOOOO0000OOOO000000000OOkxxxxl'           
           .,;codxxkkOOO0O00Okkk0KK0XNWWWWWWWWWNX0kkkkkOOOOOkkxdool;.          
         .';::ccldkO0KKKK0Ooc;KKKx00KNNXXXXXNNX0OO000O00Okkkkkkxoc:,..         
       ..''..   ;dxolc;'            .lxxO0OkkxxO0WKKc. .;looolllol:'..         
      ..'..    .':lloolc:,..          'lxkkkkkOkd,..':clc:::;,,;:;,'..         
      ......   ....',;;;:ccc::;;,    ''',:lokdol:clllolc:;;,'........          
          .     ....'''',,,;;:cccccclllloooollllccc:c:::;,'..                  
                  .......'',,,,,,,,;;::::ccccc::::;;;,,''...                   
                    ...............''',,,;;;,,''''''......                     
                         ............................`;                   



var eyeShut = `  
                               ...'',;;;;;;;,,...                              
                          ..,:loxkkOOO000KKKKKK0Oxdc,..                        
                       .,coxO00KXXXXXXXXXXXXXXXXXXXK0Oxo:,..                   
                    ..;lxO00KKKKK000000000000000KKKKXXXXK0Oxl;..               
                 ..,:oxkO0OO0OOOOOOOOOOOOOOOOOOOOOOO0000KKKKKKOd:.             
              ..;codxkkOOOkkkkkkkxxxxxxxxxxxxxxxxkkkkkkOOOO00KK0kl'            
            ..;ldxkkkkkkxxxxxddddddddddddddddddddddddxxxxxxkkkOOOxc.           
          ..,:oxxkkkkkxxxxdddddddddddddddddddddddddddddddddxxkkkkxl;.          
        ..,;codxxkkkxxddddddddddddddddddddddddddddddddxdxxxkOOOkxdo:..         
       .';::::cldkOOOkkkxxxxxxdddddddddddddddddddddxxxxxkkOOOOkxddl;..         
      .';:;,..,ckXXXKKK0KK00OkxkOdoddxxdddddddxxxxxxkkOOOOkkkkkxdoc,..         
      .',,''..,:oxxxxxxxkkxkkxkOOxxk000OOO000000KKKKKKK00Okxdllll:,..          
       .........',,,:ccllllooooxkxxxO0Okk000O0000000O00OOkxdoc,'...            
               ......',;;::cc::clllloddooxOxdxxkxxxxddollllc:'.                
                    .....'',,,,,,,;;;;;::cllc::ccc::;;,,,'...                  
                        ..................'''..'''......`;                




var beepWavBase64 = "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";					 
var audio = new Audio("data:audio/wav;base64," + beepWavBase64);

var c = document.getElementById("myCanvas");
var context = c.getContext('2d');
context.font = "Source Sans Pro";

//AutoResize Canvas
function resize() {
  c.width = window.innerWidth - 62;
  c.height = window.innerHeight - 10;

  //Define textSize based on width
  eyeTextSize = Math.min(Math.floor(c.width / 60), Math.floor(c.height / 40));
  openEye();
  drawLeftDots();
}
window.addEventListener("resize", resize);
resize();

c.onmousemove = function(evt) {
  var x = evt.clientX;
  var before = eyeDir;

  //Split screen into 4 sections
  if (x < c.width/5) {
    eyeDir = "left";
  } else if (x < (2.3*c.width/5)) {
    eyeDir = "forward";
  } else if (x < (3.3*c.width/5)) {
    eyeDir = "middle";
  } else if (x < (4.3*c.width/5)){
    eyeDir = "right";
  } else {
    eyeDir = "far right";
  }

  if(eyeDir != before) {
    drawAll();
    if (blinkGate == true) {
      var frequencyBeep = Math.floor(Math.random()*300)+200;
      playSound('triangle',frequencyBeep,.14)
    }
  }
};

function beep() {
  var frequencyBeep = Math.floor(Math.random()*300)+200;
  playSound('triangle',frequencyBeep,.15)
};

function wrappingText(text,textSize) {
  var lines = text.split("\n");
  context.font = textSize + "px monospace";
  context.fillStyle = eyeColor;

  //Calculate character width of canvas window
  var middleWidth = (c.width / 2) - textSize * 20
  var middleHeight = (c.height /2) - textSize * 10

  for (var i = 0; i < lines.length; i++) {
    context.fillText(lines[i],middleWidth, middleHeight + i*(textSize));
  }

};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};


function drawLeftDots() {
  for (var i = 0; i < 19; i++) {
    context.fillText(".",10, 10 + i * c.height/19);
  }
};

function drawEye() {
  if(eyeState == "open") {
    wrappingText(eye[eyeDir],eyeTextSize);

  } else if (eyeState == "closing") {
    wrappingText(eyeClosing[eyeDir],eyeTextSize);

  } else if (eyeState == "closed") {
    wrappingText(eyeShut,eyeTextSize);
  }
}

function drawAll() {
  clearCanvas();
  drawLeftDots();
  drawEye();
}

function clearCanvas() {
  context.clearRect(0, 0, c.width, c.height);
};

function openEye() {
  eyeState = "open";
  drawAll();
};

function halfEye() {
  eyeState = "closing";
  drawAll();
};

function closedEye() {
  eyeState = "closed";
  drawAll();
};



//async function blink() {
function blink() {
  blinkGate = false;
  halfEye();
  sleep(blinkWaitTime).then(() => {
    blink2();
  });
};

//async function blink2() {
function blink2() {
  closedEye();
  beep();
  sleep(blinkWaitTime+100).then(() => {
    blink3();
  });
};

//async function blink3() {
function blink3() {
  halfEye();
  sleep(blinkWaitTime).then(() => {
    beep();
    waitToBlink();
  });
  blinkGate = true;
};

//async function waitToBlink() {
function waitToBlink() {
  openEye();
  sleep((Math.random() * 40 + 10) * 300).then(() => {
    blink();
  });
};

$(document).ready(function() {
  document.focus;
  blink();
});
