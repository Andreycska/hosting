let header = $("#header");
    let introH = $("#intro").innerHeight();
    let introW = $("#intro").innerWidth();
    let scrollOffset = $(window).scrollTop();

    // HEADER-FIXED

    // checkScroll(scrollOffset);

    // $(window).on("scroll", function() {
    //     scrollOffset = $(this).scrollTop();

    //     checkScroll(scrollOffset);
    // });
    
    // function checkScroll(scrollOffset) {
    //     scrollOffset = $(this).scrollTop();
    //     if (scrollOffset >= introH) {
    //         header.addClass("fixed");
    //     } else {
    //         header.removeClass("fixed");
    //     }
    // }

    // BURGER MENU

    $('#burger').click(function(event){
        event.preventDefault();
        let introW = $("#intro").innerWidth();
        if (introW <= 991) {
            $('#burger, #nav').toggleClass('active');
            $('body').toggleClass('lock');
        }
    })