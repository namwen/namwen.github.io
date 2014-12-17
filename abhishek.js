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
