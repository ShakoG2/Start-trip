$("select").on("click" , function() {

    $(this).parent(".select-box").toggleClass("open");

});


$("select").on("change" , function() {

    const selection = $(this).find("option:selected").text();
    const  labelFor = $(this).attr("id");
    label = $("[for='" + labelFor + "']");

    label.find(".label-desc").html(selection);
});
$("#select-box1").on("click" , function() {
    const selection = $(this).find("option:selected").text();
    // $(this).parent(".select-box1").toggleClass("open1");
    $(".to-city").prepend("<div id='city' class='city' value='' type='text'><i id='closable' class=\"gg-close-o closable \"></i><h id='textcity'></h></div>");

    $('#textcity').text(selection);
    $('#textcity').css({
        "width": "40px",
        "height": "13px",
        "padding-left":"20px",
        "padding-bottom":"50px",
        "text-align": "center",
        "font": "normal normal normal 13px/20px Bahnschrift",
        "letter-spacing": "0px",
        "color": "#4D4D4D",
    })
    $('#city').css({
        // "background-color":"black",
        "width": "130px",
        "height": "61px",
        "background": "#F6F6F6 0% 0% no-repeat padding-box",
        "border": "4px solid #FFFFFF",
        "border-radius": "78px",
        "opacity": "1",
        "border-color": "white",

    });
    $("#closable").css({
        "color":"#F6F6F6",
        "margin-left": "90px",
         "width":"22px",
         "height":"22px"
    })
    $(".city").hover(function (){
       $(this).css({
           "background": "#FFF8E8 0% 0% no-repeat padding-box",
       })
        $(this).find("#closable").css({
            "color":"#FFB300"
        })
    },function (){
        $(this).css({
            "background": "#F6F6F6 0% 0% no-repeat padding-box",
        })
        $(this).find("#closable").css({
            "color":"#F6F6F6"
        })
    });
    $(".city").find(".closable").click(function (){
        $(this).parent().remove();
    })



});


$("select").on("change" , function() {

    const selection = $(this).find("option:selected").text();
    const k="from "+selection;
    const  labelFor = $(this).attr("id");
    label = $("[for='" + labelFor + "']");

    label.find(".label-desc1").html(k);
});
