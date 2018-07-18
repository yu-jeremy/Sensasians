$(function() {
    // hide all member profiles on load
   
    $(".memberCard").hide();
    $("#backToRoster").hide();
    $("#auditions_page").hide();
    $("#exit_auditions_btn").hide();
});

$(window).bind("load", function() {
    $("#featured").modal();
    $('body').removeClass('faded');
 });

$("#auditions_btn").click(function() {

    if ($("#auditions_page").is(":visible")) {
        $("#auditions_page").hide();
        $("#exit_auditions_btn").hide();
    } else {
        $("#auditions_page").show();
        $("#exit_auditions_btn").show();
    }
   
});

$(window).scroll(function() {
    var element = document.getElementsByClassName("nav");
    var thisScrollTop = $(document).scrollTop();
    if (thisScrollTop > 100) {
      $('.nav').addClass('changeNavColor')
    } else {
      $('.nav').removeClass('changeNavColor')
    }
});

// open member profiles
$(".member_box").click(function() {
    $(".roster").hide();
    $(".footer").hide();
    $("#backToRoster").show();
    $(".banner").hide();
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
    $(".banner").show();
    $(".memberCard").hide();
    $("#backToRoster").hide();
});
