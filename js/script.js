$(document).ready(function(){
    $(".nav_mobile").click(function(){
        $(".nav_mobile ul").toggleClass("visible");
    });
});

$(document).ready(function(){
$('.burger').on("click", function (event) {
    $('span').toggleClass('rota');
    $('span').toggleClass('rota_reset');
});
    });
