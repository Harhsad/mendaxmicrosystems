$('.solutions_carousel').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('.usp-boxes').owlCarousel({
    loop:false,
    dots:false,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('.testimonial_carousel').owlCarousel({
    loop:false,
    margin:10,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
$('.partner_carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:3,
            margin:30,
            autoplay:true
        },
        600:{
            items:3,
           margin:30,
            autoplay:true
        },
        1000:{
            items:6
        }
    }
})
$('.hero_carousel').owlCarousel({
    items:1,
    margin:10,
    dots:true,
    nav:false,
    autoHeight:true
})
$('.products_carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        },
        1400:{
            items:8
        },
        1700:{
            items:10
        }
    }
})

/**
     * Replace all SVG images with inline SVG
     */
jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, (data) => {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

});
$(document).ready(function(){
$("button.hamburger").click(function(){
    $(".menubar").addClass("active");
  });
  $("button.close-btn").click(function(){
    $(".menubar").removeClass("active");
  });
  $("h5").click(function(){
    $(this).toggleClass("active");
  });

//product slider
$("#thumb1").click(function(){
    $("#large1").addClass("active");
    $("#large2, #large3, #large4").removeClass('active');
  }); 
  $("#thumb2").click(function(){
    $("#large2").addClass("active");
    $("#large1, #large3, #large4").removeClass('active');
  }); 
  $("#thumb3").click(function(){
    $("#large3").addClass("active");
    $("#large1, #large2, #large4").removeClass('active');
  }); 
  $("#thumb4").click(function(){
    $("#large4").addClass("active");
    $("#large1, #large2, #large3").removeClass('active');
  }); 
 });
 