

$(function() {
    var product = $("#products").html();
    $("#product").attr("hidden", "");
    for (var i = 0; i < 12; i++) {
        $("#products").append(product);
    }

});

$('#loginModal').on('shown.bs.modal', function() {
    $('#loginModal #username').focus();
    $('#loginModal #password').on('keydown', function() {
        $(document).keypress(function(e) {
            if (e.which == 13) {
                console.log('login');
            }
        });
    });
    $('#loginModal .btn.btn-primary').on('click', function() {
        window.location.replace("./index-member.html")
    });
});
$('#regModal').on('shown.bs.modal', function() {
    $('#regModal #username').focus();
    $('#regModal #email').on('keydown', function() {
        $(document).keypress(function(e) {
            if (e.which == 13) {
                console.log('reg');
            }
        });
    });
    $('#regModal .btn.btn-primary').on('click', function() {
        console.log('reg');
    });
});

$('.support-mes #close-support').on('click', function() {
    $('.support-mes').hide();
})