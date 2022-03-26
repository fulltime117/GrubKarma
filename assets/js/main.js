

    /*------------------
        Preloader
    --------------------*/

    $(window).on('load', function () {
        // alert()
        $(".rotate").delay(1000).fadeOut();
        $("#preloder").delay(1000).fadeOut("slow");
        $("#Loadingpage").delay(1000).fadeOut("slow");
        
        setTimeout(function(){ 
            $(".overal-part").css("opacity", '1');
        }, 300);
    });

  
    $(document).ready(function(){
    // ssssssssssssssssssssssssssssssssssssssssssssssssssssss

        $("#featureOneNext").click(function(){
            $(".page-section-wrapper-index").css("transform", 'translateX(-100vw)');
        });

        $("#featureTwoNext").click(function(){
            $(".page-section-wrapper-index").css("transform", 'translateX(-200vw)');
        });

        $(".mealnav").click(function(){
            $('.mealnav').removeClass("navActive")
            $(this).addClass("navActive");
        });

       
        

    //sssssssssssssssssssssssssssssssssssssssssssssssssss
    });

