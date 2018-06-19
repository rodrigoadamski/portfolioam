$(document).ready(function(){
  var $portfolio = $(".portfolio-grid .portfolio-wrap");
  $portfolio.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }});
  $('button').click(function(e){
  var filterValue = $(this).attr("data-filter");
  $portfolio.isotope({
            filter: filterValue,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
  
});
  
// Parallax effect
  
$(window).scroll(function(){
  var $scrollPos = $(window).scrollTop();
  $(".page-header").css("backgroundPosition", "50% -" + $scrollPos/2 + "px");
});
  
});