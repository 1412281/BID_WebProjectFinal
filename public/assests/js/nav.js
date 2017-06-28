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
    console.log('show');
    $('#registerForm').on('submit', function() {
        console.log('re');

        $(this).ajaxSubmit({
            error: function(xhr) {
                status('Error: ' + xhr.status);
            },
            success: function(response) {
                console.log(response);

            }

        });
        //Very important line, it disable the page refresh.
        return false;
    });
});