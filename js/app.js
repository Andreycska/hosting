let header = $("#header");
    let introH = $("#intro").innerHeight();
    let introW = $("#intro").innerWidth();
    let scrollOffset = $(window).scrollTop();

    // HEADER-FIXED

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });
    
    function checkScroll(scrollOffset) {
        scrollOffset = $(this).scrollTop();
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // BURGER MENU

    $('#burger').click(function(event){
        event.preventDefault();
        let introW = $("#intro").innerWidth();
        if (introW <= 991) {
            $('#burger, #nav').toggleClass('active');
            $('body').toggleClass('lock');
        }
    })

    // SMOOTH SCROLL

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        let blockId = $(this).data("scroll");
        let blockOffset = $(blockId).offset().top;
        let introW = $("#intro").innerWidth();
        if (introW <= 768) {
        $("#nav").toggleClass("active");
        $("#burger").toggleClass("active");

        $("#nav a").removeClass("active");
        
        $(this).addClass("active");
        $('body').toggleClass('lock');
        }
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    });

    // SLIDER

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    // MODAL-BLOCK

    const modalCall = $("[data-modal]"); //сохраняем все кнопки с атрибутом data-modal
    const modalClose = $("[data-close]"); //сохраняем все кнопки close с атрибутом data-close

    modalCall.on("click", function(event) { //Событие по клику на кнопку с атрибутом data-modal

        event.preventDefault();
        // let $this = $(this); //Сохраняем конкрутную кнопку
        // let modalId = $this.data("modal"); //Сохраняем конкретное значение data-modal

        $(".modal").addClass("show"); // показываем модальное окно
        $("body").addClass("lock"); //убираем скролл у body
    });

    modalClose.on("click", function(event) { //Событие по клику на кнопку с атрибутом data-close

        event.preventDefault();
        let $this = $(this); //Сохраняем конкрутную кнопку close
        let modalParent = $this.parents(".modal"); //Ищем родителя с классом modal

        modalParent.removeClass("show"); // Убираем модальное окно
        $("body").removeClass("lock"); //Добывляем скролл к body

    });

    $(".modal").on("click", function(event) { //Событие по клику на фон чтобы закрыть модальное окно

        $(this).removeClass("show"); // Убираем модальное окно
        $("body").removeClass("lock"); //Добывляем скролл к body

    });

    $(".modal__work").on("click", function(event) { //Событие по клику на само содержимое модального окна

        event.stopPropagation(); //Отменяем событие клика по его радителю, тоесть на фоне закрывается окно, а на содержимом 

    });