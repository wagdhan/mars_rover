canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
images_array=["img2.jpg","im3.jpg","img4.jpg","img5.jpg"];
random_number=Math.floor(Math.random()*4);

background_image=images_array[random_number];
rover_image="rover.png";

rover_X=10;
rover_Y=10;
rover_width=100;
rover_height=90;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
        rover_imgTag.src=rover_image;

}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_X,rover_Y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed=='38'){
        console.log("up");
        up();
    }
    if(keyPressed=='40'){
        console.log("down");
        down();
    }
    if(keyPressed=='39'){
        console.log("right");
        right();
    }
    if(keyPressed=='37'){
        console.log("left");
        left();
    }
}

function up(){
    if(rover_Y>=0){
        rover_Y=rover_Y-10;
        uploadBackground();
        uploadRover();
    }

}
function down(){
    if(rover_Y<=500){
        rover_Y=rover_Y+10;
        uploadBackground();
        uploadRover();
    }

}
function left(){
    if(rover_X>=0){
        rover_X=rover_X-10;
        uploadBackground();
        uploadRover();
    }

}
function right(){
    if(rover_X<=700){
        rover_X=rover_X+10;
        uploadBackground();
        uploadRover();
    }

}