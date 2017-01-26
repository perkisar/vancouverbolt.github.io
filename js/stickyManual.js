function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
        $('#sticky-anchor').addClass('space');
    } else {
        $('#sticky').removeClass('stick');
        $('#sticky-anchor').removeClass('space');
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});