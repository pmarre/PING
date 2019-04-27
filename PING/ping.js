$(document).ready(function(){

    var regex = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;;
    var email = $('.email').val();

    $('#submit').click(function(e){
        
        if (!regex.test(email)) {
            e.preventDefault();
            $('.email').addClass('error');
            $('#errorMessage').css('display', 'block');
        } else if ($('#email').val().length > 1) {
            $('#email').removeClass('error');
            $('#errorMessage').css('display', 'none');
        }
    });
});