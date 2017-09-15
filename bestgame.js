/**
    @author Harsha Ravuri (sravuri)
    @file bestGame.js
*/



//2 scenes used because it's easier to choose what to render on what
scene = new THREE.Scene();
scene2 = new THREE.Scene();
camera = new THREE.PerspectiveCamera( 55, window.innerWidth/window.innerHeight, 0.1, 10000 );

renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth -50, window.innerHeight -50 );

document.body.appendChild( renderer.domElement );
var frog;
var dfrog;
var background;
var gameOverSign;

var log;
var log2;
var log3;
var log4;

//If this is 0, frog NOT on log. If this is 1 frog IS on the log.
var isFrogOnLog;


var turtle;

var truck;
var truck2;
var truck3;
var truck4;
var truck5;

function addEssentials(){
    
    //For the board
    var imgLoader = new THREE.TextureLoader();
    var geometry = new THREE.PlaneGeometry(  5, 5, 0 );
    
    //load the board
    imgLoader.load( froggerboard, function (texture){
        background = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({map: texture}));
        texture.minFilter = THREE.LinearFilter;
        scene.add(background)
    });


    //For the frog
    var geometry_frog = new THREE.BoxGeometry( 0.4, 0.4,0  );
    var imgLoader2 = new THREE.TextureLoader();
    imgLoader2.load(frogPic, function (texture){
        var material = new THREE.MeshBasicMaterial({map: texture, transparent:true});
        texture.minFilter = THREE.LinearFilter;
        frog = new THREE.Mesh(geometry_frog, material );
        frog.position.x = 0;
        frog.position.y = -2.2;
        scene2.add(frog)
    });
    
    //For the game over board
    var imgLoader = new THREE.TextureLoader();
    var geometry_over = new THREE.PlaneGeometry(  4, 4, 0 );
    
    //load the board
    imgLoader.load(gameOverPic, function (texture){
	   gameOverSign = new THREE.Mesh(geometry_over, new THREE.MeshBasicMaterial({map: texture, transparent: true}));
	   texture.minFilter = THREE.LinearFilter;
    });
   
}

function addLandItems(){
    //For the truck(s) - x can only be between -2.3 and 2.3
    
    var geometry_truck = new THREE.BoxGeometry( 0.8, 0.3, 0 );
    var imgLoader3 = new THREE.TextureLoader();    
    imgLoader3.load( truckPic, function (texture){
        var material = new THREE.MeshBasicMaterial({map: texture, transparent:true});
        texture.minFilter = THREE.LinearFilter;
        truck = new THREE.Mesh(geometry_truck, material );
        truck.position.x = 1.9;
        truck.position.y = -1.83;
        scene.add(truck)
    });


    var geometry_truck2 = new THREE.BoxGeometry( 0.8, 0.3, 0 );
    var imgLoader3 = new THREE.TextureLoader();
    imgLoader3.load(truckPic, function (texture){
        truck2 = new THREE.Mesh(geometry_truck, new THREE.MeshBasicMaterial({map: texture, transparent:true}));
        texture.minFilter = THREE.LinearFilter;
        truck2.position.x = 0;
        truck2.position.y = -1.49;
        scene.add(truck2)
    });

    var geometry_truck3 = new THREE.BoxGeometry( 0.8, 0.3, 0 );
    var imgLoader3 = new THREE.TextureLoader();
    imgLoader3.load( truckPic, function (texture){
        truck3 = new THREE.Mesh(geometry_truck, new THREE.MeshBasicMaterial({map: texture, transparent:true}));
        texture.minFilter = THREE.LinearFilter;
        truck3.position.x = 1;
        truck3.position.y = -1.16;
        scene.add(truck3)
    });

    var geometry_truck4 = new THREE.BoxGeometry( 0.8, 0.3, 0 );
    var imgLoader3 = new THREE.TextureLoader();
    imgLoader3.load( truckPic, function (texture){
        truck4 = new THREE.Mesh(geometry_truck, new THREE.MeshBasicMaterial({map: texture, transparent:true}));
        texture.minFilter = THREE.LinearFilter;
        truck4.position.x = 1.3;
        truck4.position.y = -0.83;
        scene.add(truck4)
    });

    var geometry_truck5 = new THREE.BoxGeometry( 0.8, 0.3, 0 );
    var imgLoader3 = new THREE.TextureLoader();
    imgLoader3.load( truckPic, function (texture){
        truck5 = new THREE.Mesh(geometry_truck, new THREE.MeshBasicMaterial({map: texture, transparent:true}));
        texture.minFilter = THREE.LinearFilter;
        truck5.position.x = 1.7;
        truck5.position.y = -0.5;
        scene.add(truck5)
    });


    
}

function addWaterItems(){
    //For the log(s)
    var geometry_log = new THREE.BoxGeometry( 1, 0.3, 0.00001 );
    var imgLoader3 = new THREE.TextureLoader();
    imgLoader3.load( logPic , function (texture){
        var material =  new THREE.MeshBasicMaterial({map: texture, transparent:true});
        texture.minFilter = THREE.LinearFilter;
        //material.depthWrite = false;
        log = new THREE.Mesh(geometry_log,material);
        log.position.x = 1.9;
        log.position.y = 0.1 ;
        scene.add(log)
    });

    //For the turtle
    var geometry_turtle = new THREE.BoxGeometry( 0.8, 0.4, 0 );
    var imgLoader2 = new THREE.TextureLoader();
    imgLoader2.load(turtlePic, function (texture){
        turtle = new THREE.Mesh(geometry_turtle, new THREE.MeshBasicMaterial({map: texture, transparent:true}));
        texture.minFilter = THREE.LinearFilter;
        turtle.position.x = 1.9 ;
        turtle.position.y = 0.4;
        scene.add(turtle)
    });
    
    //For the log(s)
    var geometry_log = new THREE.BoxGeometry( 1, 0.3, 0.00001 );
    var imgLoader3 = new THREE.TextureLoader();
    imgLoader3.load( logPic , function (texture){
        var material =  new THREE.MeshBasicMaterial({map: texture, transparent:true});
        texture.minFilter = THREE.LinearFilter;
        //material.depthWrite = false;
        log2 = new THREE.Mesh(geometry_log,material);
        log2.position.x = 1.4;
        log2.position.y = 0.7 ;
        scene.add(log2)
    });
    
    //For the log(s)
    var geometry_log = new THREE.BoxGeometry( 1, 0.3, 0.00001 );
    var imgLoader3 = new THREE.TextureLoader();
    imgLoader3.load( logPic , function (texture){
        var material =  new THREE.MeshBasicMaterial({map: texture, transparent:true});
        texture.minFilter = THREE.LinearFilter;
        //material.depthWrite = false;
        log3 = new THREE.Mesh(geometry_log,material);
        log3.position.x = 1;
        log3.position.y = 1.1 ;
        scene.add(log3)
    });
    
    //For the log(s)
    var geometry_log = new THREE.BoxGeometry( 1, 0.3, 0.00001 );
    var imgLoader3 = new THREE.TextureLoader();
    imgLoader3.load( logPic, function (texture){
        var material =  new THREE.MeshBasicMaterial({map: texture, transparent:true});
        texture.minFilter = THREE.LinearFilter;
        //material.depthWrite = false;
        log4 = new THREE.Mesh(geometry_log,material);
        log4.position.x = 1.8;
        log4.position.y = 1.4 ;
        scene.add(log4)
    });
    
}

camera.position.z = 5;

function renderFrogLog(){
    
    if(!(frog.position.y >=0.4 && frog.position.y<= 0.5 )){
        frog.position.x -= 0.01;
        if(frog.position.x<= -2)
            frog.position.x = 1.9;

        renderer.autoClear = false;
        renderer.clear();                     // clear buffers
        renderer.render( scene, camera );     // render scene 1
        renderer.clearDepth();                // clear depth buffer
        renderer.render( scene2, camera );    // render scene 2

    }
    
    
    
}


function renderFrogTurtle(){
    
    if(!(frog.position.y >=0.7 && frog.position.y<= 0.8 )){
    
        frog.position.x += 0.01;
        if(frog.position.x> 2.2)
            frog.position.x = -2.2;
        
        renderer.autoClear = false;
        renderer.clear();                     // clear buffers
        renderer.render( scene, camera );     // render scene 1
        renderer.clearDepth();                // clear depth buffer
        renderer.render( scene2, camera );    // render scene 2

    }
    
    
    
}

function renderFrogLog2(){
    
    if(!(frog.position.y >=0.8 )){
    
        frog.position.x -= 0.004;
        if(frog.position.x<= -2)
            frog.position.x = 1.9;

        renderer.autoClear = false;
        renderer.clear();                     // clear buffers
        renderer.render( scene, camera );     // render scene 1
        renderer.clearDepth();                // clear depth buffer
        renderer.render( scene2, camera );    // render scene 2

    }
    
    
    
}

function renderFrogLog3(){
    if(!(frog.position.y >1.2 )){
    
        frog.position.x -= 0.01;
        if(frog.position.x<= -2)
            frog.position.x = 1.9;

        renderer.autoClear = false;
        renderer.clear();                     // clear buffers
        renderer.render( scene, camera );     // render scene 1
        renderer.clearDepth();                // clear depth buffer
        renderer.render( scene2, camera );    // render scene 2

    }
    
    
    
}

function renderFrogLog4(){
    
    if(!(frog.position.y >1.7 )){
    
        frog.position.x -= 0.016;
        if(frog.position.x<= -2)
            frog.position.x = 1.9;

        renderer.autoClear = false;
        renderer.clear();                     // clear buffers
        renderer.render( scene, camera );     // render scene 1
        renderer.clearDepth();                // clear depth buffer
        renderer.render( scene2, camera );    // render scene 2

    }
    
    
    
}




function render(){
	requestAnimationFrame( render );
    
    if(typeof(truck)!= 'undefined' ){
        truck.position.x -= 0.009;
        if(truck.position.x< -2)
            truck.position.x = 1.9;
    }
    
    if(typeof(truck2)!= 'undefined' ){
        truck2.position.x -= 0.012;
        if(truck2.position.x< -2)
            truck2.position.x = 1.9;

    }
    
    if(typeof(truck3)!= 'undefined' ){
        truck3.position.x -= 0.013;
        if(truck3.position.x< -2)
            truck3.position.x = 1.9;

    }
    
    if(typeof(truck4)!= 'undefined' ){
        truck4.position.x -= 0.01;
        if(truck4.position.x< -2)
            truck4.position.x = 1.9;

    }
    
    if(typeof(truck5)!= 'undefined' ){
     
        truck5.position.x -= 0.01;
        if(truck5.position.x< -2)
            truck5.position.x = 1.9;
    }
    
    if(typeof(log)!= 'undefined' ){
        log.position.x -= 0.01;
        if(log.position.x<= -2)
            log.position.x = 1.9;

    }
    
    if(typeof(turtle)!= 'undefined' ){
        turtle.position.x += 0.01;
        if(turtle.position.x> 2.2)
            turtle.position.x = -2.2;
    }
   
    
    
    if(typeof(log2)!= 'undefined' ){
        log2.position.x -= 0.004;
        if(log2.position.x<= -2)
            log2.position.x = 1.9;
    }
    
    
    if(typeof(log3)!= 'undefined' ){

        log3.position.x -= 0.01;
        if(log3.position.x<= -2)
            log3.position.x = 1.9;   
    }
    
    if(typeof(log4)!= 'undefined' ){
        log4.position.x -= 0.016;
        if(log4.position.x<= -2)
            log4.position.x = 1.9;
        
    }
    
    if(typeof(frog)!= 'undefined' && typeof(truck)!= 'undefined' && typeof(truck2)!= 'undefined' && typeof(truck3)!= 'undefined' && typeof(truck4)!= 'undefined'&& typeof(truck5)!= 'undefined' ){

        var distance = Math.abs( (frog.position.x+0.2) - (truck.position.x-0.4) )
        var roundedDistance = Math.round( distance * 100 ) / 100 ;
        var roundedFrogy = Math.round( frog.position.y * 100 ) / 100 ;
        if(roundedDistance<= 0.02 && roundedFrogy == -1.87)
            killFrog();

        var distance = Math.abs( (frog.position.x+0.2) - (truck2.position.x-0.4) )
        var roundedDistance = Math.round( distance * 100 ) / 100 ;
        var roundedFrogy = Math.round( frog.position.y * 100 ) / 100 ;
        if(roundedDistance<= 0.02 && roundedFrogy == -1.55)
            killFrog();

        var distance = Math.abs( (frog.position.x+0.2) - (truck3.position.x-0.4) )
        var roundedDistance = Math.round( distance * 100 ) / 100 ;
        var roundedFrogy = Math.round( frog.position.y * 100 ) / 100 ;
        if(roundedDistance<= 0.02 && roundedFrogy == -1.22)
            killFrog();

        var distance = Math.abs( (frog.position.x+0.2) - (truck4.position.x-0.4) )
        var roundedDistance = Math.round( distance * 100 ) / 100 ;
        var roundedFrogy = Math.round( frog.position.y * 100 ) / 100 ;
        if(roundedDistance<= 0.02 && roundedFrogy == -0.90)
            killFrog();

        var distance = Math.abs( (frog.position.x+0.2) - (truck5.position.x-0.4) )
        var roundedDistance = Math.round( distance * 100 ) / 100 ;
        var roundedFrogy = Math.round( frog.position.y * 100 ) / 100 ;
        if(roundedDistance<= 0.02 && roundedFrogy == -0.57)
            killFrog();


        var frogY = frog.position.y;
        
        //Check if you're in water
        if(frog.position.y > 0){
            
            //Frog----------------------------------------------
            var frog_left = frog.position.x - 0.2 ;
            var rounded_frogLeft = Math.round( frog_left * 100 ) / 100 ;

            var frog_right = frog.position.x + 0.2 ;
            var rounded_frogRight = Math.round( frog_right * 100 ) / 100 ;
            //--------------------------------------------------
            
            
            //log1----------------------------------------------
            var log_left = log.position.x - 0.5  ;
            var rounded_logLeft = Math.round( log_left * 100 ) / 100 ;

            var log_right =  log.position.x + 0.5  ;
            var rounded_logRight = Math.round( log_right * 100 ) / 100 ;
            //---------------------------------------------------

            //log2----------------------------------------------
            var log2_left = log2.position.x - 0.5  ;
            var log2_right =  log2.position.x + 0.5  ;
            //--------------------------------------------------
            
            
            //log3----------------------------------------------
            var log3_left = log3.position.x - 0.5  ;
            var log3_right =  log3.position.x + 0.5  ;
            //--------------------------------------------------

            
            //log4----------------------------------------------
            var log4_left = log4.position.x - 0.5  ;
            var log4_right =  log4.position.x + 0.5  ;
            //--------------------------------------------------
            
            //turtle----------------------------------------------
            var turtle_left = turtle.position.x - 0.4  ;
            var turtle_right =  turtle.position.x + 0.4  ;
            //----------------------------------------------------

            var roundedFrogy = Math.round( frog.position.y * 100 ) / 100 ;


            if( (frog.position.y >=0.065 && frog.position.y<= 0.12 ) && (frog_left >= log_left && frog_right <= log_right ) ){
                isFrogOnLog = 1;

                frog.position.x = log.position.x;
                frog.position.y = log.position.y;
                renderFrogLog();

            }


            if( (frog.position.y >=0.4 && frog.position.y<= 0.5 ) && (frog_left >= turtle_left && frog_right <= turtle_right ) ){
                //if youre on turtle, live, else die!!!!
                isFrogOnLog = 1;

                frog.position.x = turtle.position.x;
                frog.position.y = turtle.position.y;

                
                renderFrogTurtle();


            }

            if((frog.position.y >0.6 && frog.position.y<= 0.8 ) && (frog_left >= log2_left && frog_right <= log2_right ) ){
                isFrogOnLog = 1;

                frog.position.x = log2.position.x;
                frog.position.y = log2.position.y;

                renderFrogLog2();

            }
            
            if( (frog.position.y >1 && frog.position.y<= 1.2 ) && (frog_left >= log3_left && frog_right <= log3_right )){
                isFrogOnLog = 1;

                frog.position.x = log3.position.x;
                frog.position.y = log3.position.y;
                renderFrogLog3();

            }
            
            if( (frog.position.y >=1.3 && frog.position.y<= 1.7 ) && (frog_left >= log4_left && frog_right <= log4_right )){
                isFrogOnLog = 1;

                frog.position.x = log4.position.x;
                frog.position.y = log4.position.y;
                renderFrogLog4();

            }
            

            else if(isFrogOnLog == 0)
             killFrog();
        }

        renderer.autoClear = false;
        renderer.clear();                     // clear buffers
        renderer.render( scene, camera );     // render scene 1
        renderer.clearDepth();                // clear depth buffer
        renderer.render( scene2, camera );    // render scene 2

        }
}

function killFrog(){
    scene.remove(frog);
    scene2.remove(frog);
    scene2.add(gameOverSign);
}
			
function main(){
    addEssentials();
    addLandItems();
    addWaterItems();
    
    document.addEventListener('keydown', function (e) {
            if (!e.ctrlKey && !e.shiftKey) {
                
                if(e.which == 38){
                //frog should move up
                    
                    if(frog.position.y < 2.02)
                        frog.position.y += 0.3255;
                    isFrogOnLog = 0;
                    
                    if(frog.position.y >= 1.7){
                        //Frog has finally survived and won!
                
                        isFrogOnLog = 1;
                        alert("You won! Congratulations! ");
                    }
                    
                    
                }
                
                if(e.which == 39){
                    //frog should move right
                    
                    if(frog.position.x < 2.19)
                        frog.position.x += 0.3255;
                    isFrogOnLog = 0;
                }
                if(e.which == 37){
                    //frog should move left
                    
                    if(frog.position.x > -2.19)
                        frog.position.x -= 0.3255;
                    isFrogOnLog = 0;
                }
                if(e.which == 40){
                    //frog should move down
                    if(frog.position.y > -2.19 )
                        frog.position.y -= 0.3255;
                    isFrogOnLog = 0;
                }
                
                //Console Statement to see frog's position everytime it jumps
                //console.log("frog's pos = "+frog.position.x + " "+ frog.position.y);
                
                
    }});
    
    
    // Audio File!
    /**
    var audio = document.createElement('audio');
    var source = document.createElement('source');
    source.src = './before_I_forget.mp3';
    audio.appendChild(source);
    audio.play();
    */
    
    render();    
    
    
}