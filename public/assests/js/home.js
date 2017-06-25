

$(function() {
    var product = $("#products").html();
    $("#product").attr("hidden", "");
    for (var i = 0; i < 12; i++) {
        $("#products").append(product);
    }

});


$('.support-mes #close-support').on('click', function() {
    $('.support-mes').hide();
})