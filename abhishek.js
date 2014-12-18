

$(document).ready(function(){
    var abhishek="<div class='abhishek'> </div>";
    var numAbhisheks=Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    for(var x=1;x<=numAbhisheks;x++){
        $(abhishek).appendTo("body");
    }
    // get window dimentions
    var ww = $(window).width();
    var wh = $(window).height();
    $(".abhishek").each(function(i){
        var rotationNum=Math.round((Math.random()*720)+1);
        var rotation="rotate("+rotationNum+"deg)";
        var posx = Math.round(Math.random() * ww)-20;
        var posy = Math.round(Math.random() * wh)-20;
        $(this).css("top", posy + "px").css("left", posx + "px").css("transform",rotation).css("-ms-transform",rotation).css("-webkit-transform",rotation);
    });
    window.onload = function() {
        // try to create a WebGL canvas (will fail if WebGL isn't supported)
        try {
            var canvas = fx.canvas();
        } catch (e) {
            alert(e);
            return;
        }

        // convert the image to a texture
        var image = document.getElementById('image');
        var texture = canvas.texture(image);

        // apply the ink filter
        canvas.draw(texture).ink(0.25).update();

        // replace the image with the canvas
        image.parentNode.insertBefore(canvas, image);
        image.parentNode.removeChild(image);

        // Note: instead of swapping the <canvas> tag with the <img> tag
        // as done above, we could have just transferred the contents of
        // the image directly:
        //
        //     image.src = canvas.toDataURL('image/png');
        //
        // This has two disadvantages. First, it is much slower, so it
        // would be a bad idea to do this repeatedly. If you are going
        // to be repeatedly updating a filter it's much better to use
        // the <canvas> tag directly. Second, this requires that the
        // image is hosted on the same domain as the script because
        // JavaScript has direct access to the image contents. When the
        // two tags were swapped using the previous method, JavaScript
        // actually doesn't have access to the image contents and this
        // does not violate the same origin policy.
    };
    //they spinnin' baby
    $('.abhishek').click(function(){
        $('.abhishek').animate({  borderSpacing: -1080 }, {
            step: function(now,fx) {
            $(this).css('-webkit-transform','rotate('+now+'deg)');
            $(this).css('-moz-transform','rotate('+now+'deg)');
            $(this).css('transform','rotate('+now+'deg)');
            },
            duration:'slow'
        },'linear');
        play()
    });
    function play(){
         var audio = document.getElementById("audio");
         audio.play();
    }
});
