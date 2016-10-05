

$('.carousel').carousel({
    interval: false
}); 


//jQuery scroll-nav
$(window).scroll(function() {
    if ($(".nav").offset().top > 50) {
        $(".nav").addClass("top-nav");
    } else {
        $(".nav").removeClass("top-nav");
    }
});


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


//SHOW MORE button
$(document).ready(function () {
    $('#ourWorks img').hide();
    $('#ourWorks img:lt(6)').show();
    $('#more .btn').click(function () {
        $('#ourWorks img:not(:visible):lt(3)').show();
        if ($('#ourWorks img:not(:visible)').length == 0)
            $(this).hide();
        return false;
    });

});


//MENU

$(".cross" ).hide();
$(".menu" ).hide();
$(".hamburger" ).click(function() {
$(".menu" ).slideToggle( "slow", function() {
$(".hamburger" ).hide();
$(".cross" ).show();
$(".nav").addClass("top-nav1");
});
});

$(".cross" ).click(function() {
$(".menu" ).slideToggle( "slow", function() {
$(".cross" ).hide();
$(".hamburger" ).show();
});
});



//carousel page6 
$(document).ready(function() {
    $('#myCarousel').carousel({
      interval: 10000
  })
});


//OUR TEAM
$(".Box1").hover(
    function(){ // Mouse Over
        $(this).find('img:first').attr("src", 'img/team11.png');
    },
    function(){ // Mouse Out
        $(this).find('img:first').attr("src", 'img/team1.jpg');
    }
);

$(".Box2").hover(
    function(){ // Mouse Over
        $(this).find('img:first').attr("src", 'img/team22.png');
    },
    function(){ // Mouse Out
        $(this).find('img:first').attr("src", 'img/team22.png');
    }
);

$(".Box3").hover(
    function(){ // Mouse Over
        $(this).find('img:first').attr("src", 'img/team33.png');
    },
    function(){ // Mouse Out
        $(this).find('img:first').attr("src", 'img/team3.jpg');
    }
);

$(".Box4").hover(
    function(){ // Mouse Over
        $(this).find('img:first').attr("src", 'img/team44.png');
    },
    function(){ // Mouse Out
        $(this).find('img:first').attr("src", 'img/team4.jpg');
    }
);

