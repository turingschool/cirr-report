$(document).ready(function() {

//section-overview-data
  $("#overview-grad-circle").circliful({
      animation: 1,
      animationStep: 5,
      foregroundBorderWidth: 10,
      backgroundBorderWidth: 10,
      foregroundColor: '#f9ae06',
      backgroundColor: '#4d4d4d',
      percentageY: 110,
      percent: 74.65,
      decimals: 2,
      textSize: 28,
      fontColor: '#f9ae06'
  });
  $("#overview-employed-circle").circliful({
      animation: 1,
      animationStep: 5,
      foregroundBorderWidth: 10,
      backgroundBorderWidth: 10,
      foregroundColor: '#ef3852',
      backgroundColor: '#4d4d4d',
      percentageY: 110,
      percent: 80,
      textSize: 28,
      fontColor: '#ef3852'
  });

//section-graduation-data
  $("#grad-data-reg-program-circle").circliful({
      animation: 1,
      animationStep: 5,
      foregroundBorderWidth: 10,
      backgroundBorderWidth: 10,
      foregroundColor: '#0e6574',
      backgroundColor: '#2adbe6',
      percentageY: 110,
      percent: 74.65,
      decimals: 2,
      textSize: 28,
      fontColor: '#0e6574'
  });
  $("#grad-data-long-program-circle").circliful({
      animation: 1,
      animationStep: 5,
      foregroundBorderWidth: 10,
      backgroundBorderWidth: 10,
      foregroundColor: '#0e6574',
      backgroundColor: '#2adbe6',
      percentageY: 110,
      percent: 91.55,
      decimals: 2,
      textSize: 28,
      fontColor: '#0e6574'
  });

//sections-employment
  $("#employment-90-circle").circliful({
      animation: 1,
      animationStep: 5,
      foregroundBorderWidth: 10,
      backgroundBorderWidth: 10,
      foregroundColor: '#2ff1fa',
      backgroundColor: '#e1e1e1',
      percentageY: 110,
      percent: 69,
      textSize: 28,
      fontColor: '#5c5c5c'
  });
  $("#employment-180-circle").circliful({
      animation: 1,
      animationStep: 5,
      foregroundBorderWidth: 10,
      backgroundBorderWidth: 10,
      foregroundColor: '#2ff1fa',
      backgroundColor: '#e1e1e1',
      percentageY: 110,
      percent: 80,
      textSize: 28,
      fontColor: '#5c5c5c'
  });
  $("#employ-position-90-circle").circliful({
      animation: 1,
      animationStep: 5,
      foregroundBorderWidth: 10,
      backgroundBorderWidth: 10,
      foregroundColor: '#2ff1fa',
      backgroundColor: '#e1e1e1',
      percentageY: 110,
      percent: 4,
      textSize: 28,
      fontColor: '#5c5c5c'
  });
  $("#employ-position-180-circle").circliful({
      animation: 1,
      animationStep: 5,
      foregroundBorderWidth: 10,
      backgroundBorderWidth: 10,
      foregroundColor: '#2ff1fa',
      backgroundColor: '#e1e1e1',
      percentageY: 110,
      percent: 4,
      textSize: 28,
      fontColor: '#5c5c5c'
  });
  $("#not-employed-90-circle").circliful({
      animation: 1,
      animationStep: 5,
      foregroundBorderWidth: 10,
      backgroundBorderWidth: 10,
      foregroundColor: '#2ff1fa',
      backgroundColor: '#e1e1e1',
      percentageY: 110,
      percent: 27,
      textSize: 28,
      fontColor: '#5c5c5c'
  });
  $("#not-employed-180-circle").circliful({
      animation: 1,
      animationStep: 5,
      foregroundBorderWidth: 10,
      backgroundBorderWidth: 10,
      foregroundColor: '#2ff1fa',
      backgroundColor: '#e1e1e1',
      percentageY: 110,
      percent: 15,
      textSize: 28,
      fontColor: '#5c5c5c'
  });
  $("#no-response-90-circle").circliful({
      animation: 1,
      animationStep: 5,
      foregroundBorderWidth: 10,
      backgroundBorderWidth: 10,
      foregroundColor: '#2ff1fa',
      backgroundColor: '#e1e1e1',
      percentageY: 110,
      percent: 8,
      textSize: 28,
      fontColor: '#5c5c5c'
  });
  $("#no-response-180-circle").circliful({
      animation: 1,
      animationStep: 5,
      foregroundBorderWidth: 10,
      backgroundBorderWidth: 10,
      foregroundColor: '#2ff1fa',
      backgroundColor: '#e1e1e1',
      percentageY: 110,
      percent: 8,
      textSize: 28,
      fontColor: '#5c5c5c'
  });

  $('#masthead-nav').click(function(e) {
    e.preventDefault();
    $('a').toggleClass('is-active');
  });
});



// collapse the navbar on scroll
// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 20) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
// });
