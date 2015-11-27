// HAMBURGLERv2

function togglescroll () {
  $('body').on('touchstart', function(e){
    if ($('body').hasClass('noscroll')) {
      e.preventDefault();
    }
  });
}

$(document).ready(function () {
    togglescroll()
    $(".icon").click(function () {
        $(".mobilenav").fadeToggle(300);
        $(".top-menu").toggleClass("top-animate");
        $("html").toggleClass("noscroll");
        $(".container").toggleClass("nudge");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");
    });
});

// PUSH ESC KEY TO EXIT

$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        $(".mobilenav").fadeOut(300);
        $(".top-menu").removeClass("top-animate");
        $("html").removeClass("noscroll");
        $(".mid-menu").removeClass("mid-animate");
        $(".bottom-menu").removeClass("bottom-animate");
    }
});
