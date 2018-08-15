'use strict'

$(document).ready(function () {
     $('[data-toggle="tooltip"]').tooltip();
 });

function openImg(imgs) {
    $("#imgtext").text(imgs.alt);
    $("#expandedImg").attr("src", imgs.src);
    $(".containerImg").css("display", "block");
}

$(document).ready(toggleBrand);

$(window).resize(toggleBrand);

function toggleBrand() {
    if ($(window).width() < 400) {
        $("#brand").hide();
    } else {
        $("#brand").show();
    }
};