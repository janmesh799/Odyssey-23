$('#lead-down span').click(function () {
    var scrollDistance =
        $('#lead').next().offset().top - $('header').height() + 5;
    $('html, body').animate(
        {
            scrollTop: scrollDistance + 'px',
        },
        500
    );
});

$(window).resize(function () {
    logo_visibility_toggler();
});

$(document).scroll(function () {
    logo_visibility_toggler();
});

function logo_visibility_toggler() {
    if ($(document).scrollTop() + 49 > $('#lead-content img').offset().top)
        $('.topnav').addClass('show-logo');
    else $('.topnav').removeClass('show-logo');
}
