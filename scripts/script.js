$(function() {
    // hide all member profiles on load
    $(".memberCard").hide();
    $("#backToRoster").hide();
});

$(window).bind("load", function() {
    $('body').removeClass('faded');
 });
 

$(window).scroll(function() {
    var element = document.getElementById("home_nav");
    // from Stack Overflow 
    // https://stackoverflow.com/questions/4326845/how-can-i-determine-the-direction-of-a-jquery-scroll-event
    var thisScrollTop = $(document).scrollTop();
    if (thisScrollTop > 100){
        element.classList.add("bg-dark");
    } else {
        element.classList.remove("bg-dark");
    }
});

// open member profiles
$(".member_box").click(function() {
    $(".roster").hide();
    $(".footer").hide();
    $("#backToRoster").show();
    var thisID = $(this).attr("id");
    if (thisID == "annieBox") {
        $("#annieProfile").show();
    } else if (thisID == "jeffBox") {
        $("#jeffProfile").show();
    } else if (thisID == "dianaBox") {
        $("#dianaProfile").show();
    } else if (thisID == "jeremyBox") {
        $("#jeremyProfile").show();
    } else if (thisID == "kennyBox") {
        $("#kennyProfile").show();
    } else if (thisID == "lukeBox") {
        $("#lukeProfile").show();
    } else if (thisID == "natBox") {
        $("#natProfile").show();
    } else if (thisID == "mackBox") {
        $("#mackProfile").show();
    } else if (thisID == "staceyBox") {
        $("#staceyProfile").show();
    } else if (thisID == "qianBox") {
        $("#qianProfile").show();
    } else if (thisID == "teriBox") {
        $("#teriProfile").show();
    } else if (thisID == "ryanBox") {
        $("#ryanProfile").show();
    } else if (thisID == "nickBox") {
        $("#nickProfile").show();
    } else if (thisID == "meganBox") {
        $("#meganProfile").show();
    } else if (thisID == "milesBox") {
         $("#milesProfile").show();
    } else if (thisID == "meredithBox") {
        $("#meredithProfile").show();
    } else {
        // do nothing
    }
});

$("#backToRoster").click(function() {
    $(".roster").show();
    $(".footer").show();
    $(".memberCard").hide();
    $("#backToRoster").hide();
});





