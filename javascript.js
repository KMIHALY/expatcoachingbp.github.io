'use strict'

// $(document).ready(function () {
//     $('[data-toggle="tooltip"]').tooltip();
// });

function openImg(imgs) {
    $("#imgtext").text(imgs.alt);
    $("#expandedImg").attr("src", imgs.src);
    $(".containerImg").css("display","block");
}
