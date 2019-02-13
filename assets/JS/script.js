$(window).scroll(function () {
    scrollToTop();
    progress();

});
window.onbeforeunload = function () {
    window.scrollTo(0,0);
}
$(document).ready(function(){

    //--------------------
    $(".nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                window.location.hash = hash;
            });
        }
    });

    //-------------------------
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });

    //---------------------------------------
    $("#btn-close").on("click", function(){
        $("#btn-close").toggleClass("active");
        $("#nav").slideToggle("slow");

    });

});


function progress() {
    var x = $('#skill').offset();
    if (document.body.scrollTop >= x.top - 100 || document.documentElement.scrollTop >= x.top - 100) {
        $('.progress-bar').removeClass('width-progress-bar');
    }
}
// ===== Scroll to Top ====
function  scrollToTop(){
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow

    }

}
