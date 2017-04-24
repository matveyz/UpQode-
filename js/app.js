var options = {
    offset: 50
}

var header = new Headhesive('.header', options);

$(document).ready(function() {
    $("#menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});

$('.content-block1').on({
    'mouseenter': function() {
        $('.normal-content1').css("display", "none");
        $('.hover-content1').fadeIn();
    },
    'mouseleave': function() {
        $('.normal-content1').fadeIn();
        $('.hover-content1').css("display", "none");
    }
});

$('.content-block2').on({
    'mouseenter': function() {
        $('.normal-content2').css("display", "none");
        $('.hover-content2').fadeIn();
    },
    'mouseleave': function() {
        $('.normal-content2').fadeIn();
        $('.hover-content2').css("display", "none");
    }
});

$('.content-block3').on({
    'mouseenter': function() {
        $('.normal-content3').css("display", "none");
        $('.hover-content3').fadeIn();
    },
    'mouseleave': function() {
        $('.normal-content3').fadeIn();
        $('.hover-content3').css("display", "none");
    }
});

$('.content-block4').on({
    'mouseenter': function() {
        $('.normal-content4').css("display", "none");
        $('.hover-content4').fadeIn();
    },
    'mouseleave': function() {
        $('.normal-content4').fadeIn();
        $('.hover-content4').css("display", "none");
    }
});

$('.content-block5').on({
    'mouseenter': function() {
        $('.normal-content5').css("display", "none");
        $('.hover-content5').fadeIn();
    },
    'mouseleave': function() {
        $('.normal-content5').fadeIn();
        $('.hover-content5').css("display", "none");
    }
});

$('.hover-circle1').on({
    'mouseenter': function() {
        $('.hover-circle1 img').attr("src", "img/link-purple.png");
    },
    'mouseleave': function() {
        $('.hover-circle1 img').attr("src", "img/link-white.png");
    }
});

$('.hover-circle2').on({
    'mouseenter': function() {
        $('.hover-circle2 img').attr("src", "img/search.png");
    },
    'mouseleave': function() {
        $('.hover-circle2 img').attr("src", "img/search-white.png");
    }
});

