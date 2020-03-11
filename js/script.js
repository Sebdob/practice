jQuery(document).ready(function () {

    

    $(window).scroll(function () {
        var ccc = $(window).scrollTop();

        if (ccc < 300) {
            $("#bottom-top").hide();
        } else {
            $("#bottom-top").show();
        }
    });

    $("#bottom-top").click(function () {
        $("html, body").animate({
            'scrollTop': '0'
        }, "slow");

    });

    $("#kontakt i").hover(function(){
        $(this).toggleClass("fa-spin");
    })
    
});
