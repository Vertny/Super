 var  canvas = new fabric.Canvas("myCanvas");
 var imge_width = 35;
 var imge_height = 35;
 var playerx = 20;
 var playery = 20;
 var player_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img) {
player_object = Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:playery,
    left:playerx
});
canvas.add(player_object)
    });
}

function Tarana(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object.scaleToWidth(imge_width);
        block_image_object.scaleToHeight(imge_height);
        block_image_object.set({
            top:playery,
            left:playerx
        });
        canvas.add(block_image_object)
    });
 }