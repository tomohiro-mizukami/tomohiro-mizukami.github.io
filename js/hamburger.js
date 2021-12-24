$(".openbtn").click(() => {
  $(".openbtn").toggleClass('active');
  $("#g-nav").toggleClass('panelactive');
  $(".circle-bg").toggleClass('circleactive');
});

$("#g-nav a").click(() => {
  $(".openbtn").removeClass('active');
  $("#g-nav").removeClass('panelactive');
  $(".circle-bg").removeClass('circleactive');
});
