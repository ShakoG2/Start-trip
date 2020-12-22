$(document).ready(function () {
    const show = 1;
    const w = $('#slider').width() / show;
    const l = $('.slider-1').length;

    $('.slider-1').width(w);

    // $('#slide-container').width(w * l)

    function slider() {
        $('.slider-1:first-child').animate({
                marginLeft: -w,
            } ,
            function () {

                $(this).appendTo($(this).parent()).css({marginLeft: 0});
            }
        );
    }
    const timer = setInterval(slider, 4000);
});

$(document).ready(function () {

    $(".one").click(function (){
        alert("fewfw")
            $('.images:first-child').animate({
                    marginLeft: -670,
                } ,
            );
    }
    )
});
// $(Document).ready(function (){
//     $(".two").click(function (){
//         alert("ewfefewfwfefe")
//             $('.images:first-child').animate({
//
//                     marginLeft: 0,
//                 } ,
//             );
//         }
//
//     )
// })
// $(document).ready(function () {
//
//     $(".navigation").find("i").css({"color":"red"})
// });