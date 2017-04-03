function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).ready(function() {
  $(window).scroll(function() {
    if(isScrolledIntoView($("svg"))) {
      $("ul.progress")[0].classList.add("animate");
    }
    if(isScrolledIntoView($("#experience div"))) {
      $("#experience div").first()[0].classList.add("slideRight");
    }
    if(isScrolledIntoView($("#education div"))) {
      $("#education div").first()[0].classList.add("slideRight");
    }
    if(isScrolledIntoView($("#skills div"))) {
      $("#skills div").first()[0].classList.add("slideLeft");
    }
    if(isScrolledIntoView($("#contacts div"))) {
      $("#contacts div").first()[0].classList.add("slideLeft");
    }
  });
});
