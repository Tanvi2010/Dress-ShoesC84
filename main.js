canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

dress_width=100;
dress_height=90;
dress_x=0;
dress_y=120;

shoes_width=100;
shoes_height=90;
shoes_x=0;
shoes_y=0;

background_image="pinkboutique.gif";
dress_image="dress.jpg";
shoes_image="shoes.jpg";

function add() {
  background_imagetag=new Image();
  background_imagetag.onload=uploadBackground;
  background_imagetag.src=background_image;
  
  dress_imagetag=new Image();
  dress_imagetag.onload=uploadDress;
  dress_imagetag.src=dress_image;

  shoes_imagetag=new Image();
  shoes_imagetag.onload=uploadShoes;
  shoes_imagetag.src=shoes_image;
}

function uploadBackground() {
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}

function uploadDress() {
    ctx.drawImage( dress_imagetag, dress_x, dress_y, dress_width, dress_height);
}

function uploadShoes() {
    ctx.drawImage( shoes_imagetag, shoes_x, shoes_y, shoes_width, shoes_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=="37") {
        //left();
        console.log("left");
    }

    if (keypressed=="38") {
        //up();
        console.log("up");
    }

    if (keypressed=="39") {
        //right();
        console.log("right");
    }

    if (keypressed=="40") {
        //down();
        console.log("down");
    }



    if (keypressed=="65") {
        //left();
        console.log("left");
    }

    if (keypressed=="87") {
        //up();
        console.log("up");
    }

    if (keypressed=="68") {
        //right();
        console.log("right");
    }

    if (keypressed=="83") {
        //down();
        console.log("down");
    }
}