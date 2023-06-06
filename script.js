$(document).ready(function(){
//change the images on tech to bigger ones for desktop screen
    if($(window).width() >= 1020){
        $('#tech-img1').attr("src", "style/images/technology/image-launch-vehicle-portrait.jpg");
        $('#tech-img2').attr("src", "style/images/technology/image-spaceport-portrait.jpg");
        $('#tech-img3').attr("src", "style/images/technology/image-space-capsule-portrait.jpg");
    };

    $(window).resize(function(){
        $('#tech-img1').attr("src", "style/images/technology/image-launch-vehicle-portrait.jpg");
        $('#tech-img2').attr("src", "style/images/technology/image-spaceport-portrait.jpg");
        $('#tech-img3').attr("src", "style/images/technology/image-space-capsule-portrait.jpg");
    });

    if($(window).width() < 1020){
        $('#tech-img1').attr("src", "style/images/technology/image-launch-vehicle-landscape.jpg");
        $('#tech-img2').attr("src", "style/images/technology/image-spaceport-landscape.jpg");
        $('#tech-img3').attr("src", "style/images/technology/image-space-capsule-landscape.jpg");
    };

    $(window).resize(function(){
        if($(window).width() < 1020){
            $('#tech-img1').attr("src", "style/images/technology/image-launch-vehicle-landscape.jpg");
            $('#tech-img2').attr("src", "style/images/technology/image-spaceport-landscape.jpg");
            $('#tech-img3').attr("src", "style/images/technology/image-space-capsule-landscape.jpg");
        }
    });

    $('.home-btn').css("border-bottom", "1.5px solid white");
    // button to navigate to home page
    $('.home-btn').click(function(){
        $('.home').show(500);
        $('.destination').hide(500);
        $('.crew').hide(500);
        $('.technology').hide(500);
        $('.home-btn').css("border-bottom", "1.5px solid white");
        $('.dest-btn').css("border-bottom", "");
        $('.crew-btn').css("border-bottom", "");
        $('.tech-btn').css("border-bottom", "");
    });

    // hide content pages from the start
    $('.destination').hide();
    $('.crew').hide();
    $('.technology').hide();

    // click explore button to navigate to content pages
    $('.home-bottom h3').click(function(){
        $('.destination').show(500);
        $('.crew').hide();
        $('.technology').hide();
        $('.home').hide(500);
        $('.dest-btn').css("border-bottom", "1.5px solid white");
        $('.home-btn').css("border-bottom", "");
        $('.crew-btn').css("border-bottom", "");
        $('.tech-btn').css("border-bottom", "");
    })

    //click destination button to navigate to destination page
    $('.dest-btn').click(function(){
        $('.destination').show(500);
        $('.crew').hide(500);
        $('.technology').hide(500);
        $('.home').hide(500);
        $('.dest-btn').css("border-bottom", "1.5px solid white");
        $('.home-btn').css("border-bottom", "");
        $('.crew-btn').css("border-bottom", "");
        $('.tech-btn').css("border-bottom", "");
    })

    //clist crew menu button to nvigate to crew page
    $('.crew-btn').click(function(){
        $('.destination').hide(500);
        $('.crew').show(500);
        $('.technology').hide(500);
        $('.home').hide(500);
        $('.crew-btn').css("border-bottom", "1.5px solid white");
        $('.home-btn').css("border-bottom", "");
        $('.dest-btn').css("border-bottom", "");
        $('.tech-btn').css("border-bottom", "");
    })

    // click technology button to navigate to technology page
    $('.tech-btn').click(function(){
        $('.destination').hide(500);
        $('.crew').hide(500);
        $('.technology').show(500);
        $('.home').hide(500);
        $('.tech-btn').css("border-bottom", "1.5px solid white");
        $('.home-btn').css("border-bottom", "");
        $('.crew-btn').css("border-bottom", "");
        $('.dest-btn').css("border-bottom", "");
    })

    //hide the menus for mobile screens
    if($(window).width() < 768){
        $(".menu").hide();
    };

    $(window).resize(function(){
        if($(window).width() < 768){
            $(".menu").hide();
        } else {
            $(".menu").show();
        };
    });

    //click to show menu on mobile screen
    $(".menu-icon").click(function(){
        $(".menu").show(1000).css('z-index', 10);
    });

    //click to hide menu on mobile screen
    $(".x-div").click(function(){
        $(".menu").hide(1000);
    });

    $('.menu-bar div').click(function(){
        if($(window).width() < 768){
            $(".menu").hide(500);
        }
    })

    // hover effect for explore button
    $(".home-bottom h3").hover(function(){
        $(this).css("transition", "0.5s");
        $(this).css("border-color", "rgba(128, 128, 128, 0.5)");
        $(this).css("border-width", "20px");
        $(this).css("border-style", "solid");
    },
    function(){
        $(this).css("transition", "0.5s");
        $(this).css("border", "inherit");
    });

 //next button for destination
    $(".next-dest").click(function(){
        var currentImg = $(".active-1");
        var nextImg = currentImg.next(500);
        var currentTab = $(".active-div1");
        var nextTab = currentTab.next(500);
        var currentDest = $(".active-dest");
        var nextDest = currentDest.next(500);

        if(nextImg.length){
            currentImg.removeClass('active-1').css('z-index', -10);
            nextImg.addClass('active-1').css('z-index', 9);
        };

        if(nextTab.length){
            currentTab.removeClass('active-div1');
            nextTab.addClass('active-div1');
        }

        if(nextDest.length) {
            currentDest.removeClass('active-dest');
            nextDest.addClass('active-dest');
        };
    });

    //click destination tab to switch destinations
    $('.d-1').click(function(){
        $('.mars').removeClass('active-1').css('z-index', -10);
        $('.europa').removeClass('active-1').css('z-index', -10);
        $('.titan').removeClass('active-1').css('z-index', -10);
        $('.moon').addClass('active-1').css('z-index', 9);

        $(this).addClass('active-div1');
        $('.d-2').removeClass('active-div1');
        $('.d-3').removeClass('active-div1');
        $('.d-4').removeClass('active-div1');

        $('.moon-content').addClass('active-dest');
        $('.mars-content').removeClass('active-dest');
        $('.europa-content').removeClass('active-dest');
        $('.titan-content').removeClass('active-dest');
    });

    $('.d-2').click(function(){
        $('.moon').removeClass('active-1').css('z-index', -10);
        $('.europa').removeClass('active-1').css('z-index', -10);
        $('.titan').removeClass('active-1').css('z-index', -10);
        $('.mars').addClass('active-1').css('z-index', 9);

        $('.d-2').addClass('active-div1');
        $('.d-1').removeClass('active-div1');
        $('.d-3').removeClass('active-div1');
        $('.d-4').removeClass('active-div1');

        $('.mars-content').addClass('active-dest');
        $('.moon-content').removeClass('active-dest');
        $('.europa-content').removeClass('active-dest');
        $('.titan-content').removeClass('active-dest');
    });

    $('.d-3').click(function(){
        $('.mars').removeClass('active-1').css('z-index', -10);
        $('.moon').removeClass('active-1').css('z-index', -10);
        $('.titan').removeClass('active-1').css('z-index', -10);
        $('.europa').addClass('active-1').css('z-index', 9);

        $('.d-3').addClass('active-div1');
        $('.d-2').removeClass('active-div1');
        $('.d-1').removeClass('active-div1');
        $('.d-4').removeClass('active-div1');

        $('.europa-content').addClass('active-dest');
        $('.mars-content').removeClass('active-dest');
        $('.moon-content').removeClass('active-dest');
        $('.titan-content').removeClass('active-dest');
    });

    $('.d-4').click(function(){
        $('.mars').removeClass('active-1').css('z-index', -10);
        $('.europa').removeClass('active-1').css('z-index', -10);
        $('.moon').removeClass('active-1').css('z-index', -10);
        $('.titan').addClass('active-1').css('z-index', 9);

        $('.d-4').addClass('active-div1');
        $('.d-2').removeClass('active-div1');
        $('.d-3').removeClass('active-div1');
        $('.d-1').removeClass('active-div1');

        $('.titan-content').addClass('active-dest');
        $('.mars-content').removeClass('active-dest');
        $('.europa-content').removeClass('active-dest');
        $('.moon-content').removeClass('active-dest');
    });

    // previous button for destination
    $(".prev-dest").click(function(){
        var currentImg = $(".active-1");
        var prevImg = currentImg.prev(500);
        var currentTab = $(".active-div1");
        var prevTab = currentTab.prev(500);
        var currentDest = $(".active-dest");
        var prevDest = currentDest.prev(500);

        if(prevImg.length) {
            currentImg.removeClass('active-1').css('z-index', -10);
            prevImg.addClass('active-1').css('z-index', 9);
        };

        if(prevTab.length){
            currentTab.removeClass('active-div1');
            prevTab.addClass('active-div1');
        }

        if(prevDest.length) {
            currentDest.removeClass('active-dest');
            prevDest.addClass('active-dest');
        };
    });

    // content tab hover effect
    $('.img-tabs div').hover(function(){
        $(this).css('transition', '0.5s');
        $(this).css('background-color', 'gray');
    },
    function(){
        $(this).css('background-color', '');
    })

    // next button for crew
    $(".next-crew").click(function(){
        var currentImg = $(".active-2");
        var nextImg = currentImg.next();
        var currentTab = $(".active-div2");
        var nextTab = currentTab.next();
        var currentCrew = $(".active-crew");
        var nextCrew = currentCrew.next();

        if(nextImg.length){
            currentImg.removeClass('active-2').css('z-index', -10);
            nextImg.addClass('active-2').css('z-index', 9);
        };

        if(nextTab.length){
            currentTab.removeClass('active-div2');
            nextTab.addClass('active-div2');
        }

        if(nextCrew.length) {
            currentCrew.removeClass('active-crew');
            nextCrew.addClass('active-crew');
        };
    });

    //click crew tab to switch crew info
    $('.c-1').click(function(){
        $('.crew-4').removeClass('active-2').css('z-index', -10);
        $('.crew-2').removeClass('active-2').css('z-index', -10);
        $('.crew-3').removeClass('active-2').css('z-index', -10);
        $('.crew-1').addClass('active-2').css('z-index', 9);

        $(this).addClass('active-div2');
        $('.c-2').removeClass('active-div2');
        $('.c-3').removeClass('active-div2');
        $('.c-4').removeClass('active-div2');

        $('.c-1-content').addClass('active-crew');
        $('.c-2-content').removeClass('active-crew');
        $('.c-3-content').removeClass('active-crew');
        $('.c-4-content').removeClass('active-crew');
    });

    $('.c-2').click(function(){
        $('.crew-4').removeClass('active-2').css('z-index', -10);
        $('.crew-1').removeClass('active-2').css('z-index', -10);
        $('.crew-3').removeClass('active-2').css('z-index', -10);
        $('.crew-2').addClass('active-2').css('z-index', 9);

        $(this).addClass('active-div2');
        $('.c-1').removeClass('active-div2');
        $('.c-3').removeClass('active-div2');
        $('.c-4').removeClass('active-div2');

        $('.c-2-content').addClass('active-crew');
        $('.c-1-content').removeClass('active-crew');
        $('.c-3-content').removeClass('active-crew');
        $('.c-4-content').removeClass('active-crew');
    });

    $('.c-3').click(function(){
        $('.crew-4').removeClass('active-2').css('z-index', -10);
        $('.crew-2').removeClass('active-2').css('z-index', -10);
        $('.crew-1').removeClass('active-2').css('z-index', -10);
        $('.crew-3').addClass('active-2').css('z-index', 9);

        $(this).addClass('active-div2');
        $('.c-2').removeClass('active-div2');
        $('.c-1').removeClass('active-div2');
        $('.c-4').removeClass('active-div2');

        $('.c-3-content').addClass('active-crew');
        $('.c-2-content').removeClass('active-crew');
        $('.c-1-content').removeClass('active-crew');
        $('.c-4-content').removeClass('active-crew');
    });

    $('.c-4').click(function(){
        $('.crew-1').removeClass('active-2').css('z-index', -10);
        $('.crew-2').removeClass('active-2').css('z-index', -10);
        $('.crew-3').removeClass('active-2').css('z-index', -10);
        $('.crew-4').addClass('active-2').css('z-index', 9);

        $(this).addClass('active-div2');
        $('.c-2').removeClass('active-div2');
        $('.c-3').removeClass('active-div2');
        $('.c-1').removeClass('active-div2');

        $('.c-4-content').addClass('active-crew');
        $('.c-2-content').removeClass('active-crew');
        $('.c-3-content').removeClass('active-crew');
        $('.c-1-content').removeClass('active-crew');
    });

// previous button for crew
    $(".prev-crew").click(function(){
        var currentImg = $(".active-2");
        var prevImg = currentImg.prev();
        var currentTab = $(".active-div2");
        var prevTab = currentTab.prev();
        var currentCrew = $(".active-crew");
        var prevCrew = currentCrew.prev();


        if(prevImg.length) {
            currentImg.removeClass('active-2').css('z-index', -10);
            prevImg.addClass('active-2').css('z-index', 9);
        };

        if(prevTab.length){
            currentTab.removeClass('active-div2');
            prevTab.addClass('active-div2');
        }

        if(prevCrew.length) {
            currentCrew.removeClass('active-crew');
            prevCrew.addClass('active-crew');
        };

    });

    // next button for technology
    $(".next-tech").click(function(){
        var currentImg = $(".active-3");
        var nextImg = currentImg.next();
        var currentTab = $(".active-div3");
        var nextTab = currentTab.next();
        var currentTech = $(".active-tech");
        var nextTech = currentTech.next();

        if(nextImg.length){
            currentImg.removeClass('active-3').css('z-index', -10);
            nextImg.addClass('active-3').css('z-index', 8);
        };

        if(nextTab.length){
            currentTab.removeClass('active-div3');
            nextTab.addClass('active-div3');
        }

        if(nextTech.length){
            currentTech.removeClass('active-tech');
            nextTech.addClass('active-tech');
        }
    });

    //click crew tab to switch crew info
    $('.t-1').click(function(){
        $('#tech-img2').removeClass('active-3').css('z-index', -10);
        $('#tech-img3').removeClass('active-3').css('z-index', -10);
        $('#tech-img1').addClass('active-3').css('z-index', 9);

        $(this).addClass('active-div3');
        $('.t-2').removeClass('active-div3');
        $('.t-3').removeClass('active-div3');

        $('.tech-content-1').addClass('active-tech');
        $('.tech-content-2').removeClass('active-tech');
        $('.tech-content-3').removeClass('active-tech');
    });

    $('.t-2').click(function(){
        $('#tech-img1').removeClass('active-3').css('z-index', -10);
        $('#tech-img3').removeClass('active-3').css('z-index', -10);
        $('#tech-img2').addClass('active-3').css('z-index', 9);

        $(this).addClass('active-div3');
        $('.t-1').removeClass('active-div3');
        $('.t-3').removeClass('active-div3');

        $('.tech-content-2').addClass('active-tech');
        $('.tech-content-1').removeClass('active-tech');
        $('.tech-content-3').removeClass('active-tech');
    });

    $('.t-3').click(function(){
        $('#tech-img2').removeClass('active-3').css('z-index', -10);
        $('#tech-img1').removeClass('active-3').css('z-index', -10);
        $('#tech-img3').addClass('active-3').css('z-index', 9);

        $(this).addClass('active-div3');
        $('.t-2').removeClass('active-div3');
        $('.t-1').removeClass('active-div3');

        $('.tech-content-3').addClass('active-tech');
        $('.tech-content-2').removeClass('active-tech');
        $('.tech-content-1').removeClass('active-tech');
    });

    // previous button for technology
    $(".prev-tech").click(function(){
        var currentImg = $(".active-3");
        var prevImg = currentImg.prev();
        var currentTab = $(".active-div3");
        var prevTab = currentTab.prev();
        var currentTech = $(".active-tech");
        var prevTech = currentTech.prev();

        if(prevImg.length) {
            currentImg.removeClass('active-3').css('z-index', -10);
            prevImg.addClass('active-3').css('z-index', 8);
        };

        if(prevTab.length){
            currentTab.removeClass('active-div3');
            prevTab.addClass('active-div3');
        }

        if(prevTech.length){
            currentTech.removeClass('active-tech');
            prevTech.addClass('active-tech');
        }
    });
});