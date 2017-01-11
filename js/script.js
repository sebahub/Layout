$(document).ready(function(){
    $(".nav_mobile").click(function(){
        $(".nav_mobile ul").toggleClass("visible");
    });


    $('.nav_mobile').on("click", function (event) {
    $('span').toggleClass('rota');
    $('span').toggleClass('rota_reset');
});



    });
