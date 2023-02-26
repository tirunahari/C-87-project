
var canvas = new fabric.Canvas('myCanvas');
block_x =1;
block_y =1;

block_image_width = 300;
block_image_height = 400;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
		
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:block_y,
	left:block_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '82')
    {
        new_image('shinchan-removebg-preview.png');
        block_x = 1;
        console.log("r");
    }
    if(keyPressed == '71')
    {
        block_x = 285;
        new_image('himawari-removebg-preview.png');
        console.log("g");
    }
    if(keyPressed == '89')
    {
        block_x = 399;
        new_image('nohara-removebg-preview (1).png');
        console.log("y");
    }
    if(keyPressed == '80')
    {
        block_x = 610;
        new_image('Mrsnohara-removebg-preview.png');
        console.log("p");
    }
    if(keyPressed == '66')
    {
        block_x = 820;
        new_image('shiro-removebg-preview.png');
        console.log("b");
    }
}
