$(document).ready(function() {
    $(".btn--animated").click(function() {
        console.log("clicked")
         $('html, body').animate({
             scrollTop: $(".main-container").offset().top
         }, 1500);
     });
    });

    console.log("ashraf")
    