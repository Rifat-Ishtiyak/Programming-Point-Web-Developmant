// $('button').click(function(){
//     $('#head').hide();
// })


$(document).ready(function(){
    // $('button').click(function(){
    //     $('#head').toggle();
    // });

    $('button').click(function(){
        $('#head').addClass('heading');
    })

    // $('.box1').click(function(){
    //     $('.box2').toggle();
    // })

    // $('.box1').click(function(){
    //     $('.box2').fadeToggle();
    // })

    $('.box1').click(function(){
        $('.box2').slideToggle();
    })


    //! slick slider code
    $('.slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 1000,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
})