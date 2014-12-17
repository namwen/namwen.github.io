$('.abhishek').click(function(){
    $('.abhishek').animate({  borderSpacing: -1080 }, {
        step: function(now,fx) {
        $(this).css('-webkit-transform','rotate('+now+'deg)'); 
        $(this).css('-moz-transform','rotate('+now+'deg)');
        $(this).css('transform','rotate('+now+'deg)');
        },
        duration:'slow'
    },'linear');
});

$(document).ready(function(){
    var abhishek="<div class='abhishek'><p>Random<br />Box</p></div>";
    var numAbhisheks=Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    for(var x=1;x<=numAbhisheks;x++){
        $(abhishek).appendTo("body");
    }
    // get window dimentions
    var ww = $(window).width();
    var wh = $(window).height();
    $(".abhishek").each(function(i){
        var rotationNum=Math.round((Math.random()*360)+1);
        var rotation="rotate("+rotationNum+"deg)";
        var posx = Math.round(Math.random() * ww)-20;
        var posy = Math.round(Math.random() * wh)-20;
        $(this).css("top", posy + "px").css("left", posx + "px").css("transform",rotation).css("-ms-transform",rotation).css("-webkit-transform",rotation);
    });
});
