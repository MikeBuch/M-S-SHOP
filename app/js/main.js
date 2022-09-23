$(function () {
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
  });
  $('.star').rateYo({
    starWidth: "13px",
    ratedFill: "#ff9600",
    readOnly: true,
    spacing: "5px",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13px" height="13px" viewBox="0 0 13 13" version="1.1">< g id="surface1" ><path d="M 7.152344 0.457031 C 7.03125 0.179688 6.78125 0 6.503906 0 C 6.226562 0 5.972656 0.179688 5.851562 0.457031 L 4.402344 3.816406 L 1.160156 4.355469 C 0.890625 4.398438 0.664062 4.613281 0.578125 4.90625 C 0.496094 5.199219 0.5625 5.519531 0.757812 5.734375 L 3.109375 8.351562 L 2.554688 12.054688 C 2.507812 12.359375 2.621094 12.667969 2.847656 12.847656 C 3.070312 13.027344 3.363281 13.050781 3.609375 12.90625 L 6.503906 11.167969 L 9.398438 12.90625 C 9.644531 13.050781 9.941406 13.03125 10.164062 12.847656 C 10.386719 12.664062 10.5 12.359375 10.453125 12.054688 L 9.898438 8.351562 L 12.25 5.734375 C 12.441406 5.519531 12.511719 5.199219 12.425781 4.90625 C 12.339844 4.613281 12.117188 4.398438 11.847656 4.355469 L 8.601562 3.816406 Z M 7.152344 0.457031"/></></svg>',
  });
  $('.comparison__star').rateYo({
    starWidth: "13px",
    ratedFill: "#3cb878",
    readOnly: true,
    spacing: "5px",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13px" height="13px" viewBox="0 0 13 13" version="1.1">< g id="surface1" ><path d="M 7.152344 0.457031 C 7.03125 0.179688 6.78125 0 6.503906 0 C 6.226562 0 5.972656 0.179688 5.851562 0.457031 L 4.402344 3.816406 L 1.160156 4.355469 C 0.890625 4.398438 0.664062 4.613281 0.578125 4.90625 C 0.496094 5.199219 0.5625 5.519531 0.757812 5.734375 L 3.109375 8.351562 L 2.554688 12.054688 C 2.507812 12.359375 2.621094 12.667969 2.847656 12.847656 C 3.070312 13.027344 3.363281 13.050781 3.609375 12.90625 L 6.503906 11.167969 L 9.398438 12.90625 C 9.644531 13.050781 9.941406 13.03125 10.164062 12.847656 C 10.386719 12.664062 10.5 12.359375 10.453125 12.054688 L 9.898438 8.351562 L 12.25 5.734375 C 12.441406 5.519531 12.511719 5.199219 12.425781 4.90625 C 12.339844 4.613281 12.117188 4.398438 11.847656 4.355469 L 8.601562 3.816406 Z M 7.152344 0.457031"/></></svg>',
  })

  $('.cart__number-input, .cart-items__select, .checkout-order__payment-radio').styler();

})

var $range = $(".filter-price__input");
var $inputFrom = $(".filter-price__input-from");
var $inputTo = $(".filter-price__input-to");
var instance;
var min = 0;
var max = 50000;
var from = 0;
var to = 0;

$range.ionRangeSlider({
  skin: "round",
  type: "double",
  min: min,
  max: max,
  from: 0,
  to: 50000,
  onStart: updateInputs,
  onChange: updateInputs,
  onFinish: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("change", function () {
  var val = $(this).prop("value");

  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val
  });

  $(this).prop("value", val);

});

$inputTo.on("change", function () {
  var val = $(this).prop("value");

  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val
  });

  $(this).prop("value", val);
});
