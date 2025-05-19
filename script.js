$(document).ready(function(){
    $(".menu-icon").click(function(){
        $(".nav-items").toggleClass("on");
        $(".menu-icon i").toggleClass("fa-bars fa-xmark");
    });
});


