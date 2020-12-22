function openCity(evt, Name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(Name).style.display = "flex";
    document.getElementById(Name).style.justifyContent = "space-between";
    evt.currentTarget.className += " active";
}
$(".btnnavigation").hover(function (){
    $(this).css({
        "background":"#FFB300 0% 0% no-repeat padding-box"
    })
    $(this).find("p").css({
        "color":"#FFFFFF"
    })

},function (){
    $(this).css({
        "background":"#F6F6F6 0% 0% no-repeat padding-box"
    })
    $(this).find("p").css({
        "color":"#4D4D4D"
    })
})