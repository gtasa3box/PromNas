//product block - navigate
$('.navigate__elem').on('click', function(){
  $('.navigate__elem').removeClass('active')
  $(this).addClass('active')
  $('.product__elem').removeClass('active')
  $($(this).data('target')).addClass('active')
});
//product block - navigate - end

//title-info
$('.title__button-hide').on('click', function(){
  $(this).toggleClass('active')
  $($(this).data('target')).stop(true, false).slideToggle() 
});
//title-info-end

//select
$(document).ready(function(){
  $('.select-sort').select2({
    language: "ru",
    minimumResultsForSearch: -1,
    width: '220px'
  });
});

$(document).ready(function(){
  $('.select-charact').select2({
    language: "ru",
    minimumResultsForSearch: -1,
    width: '100%'
  });
});

$(document).ready(function(){
  $('.select-product').select2({
    language: "ru",
    minimumResultsForSearch: -1,
    width: '352px'
  });
});
//select-end

//view
$('.view-change').on('click', function(){
  $('.view-change').removeClass('active')
  $(this).addClass('active')
});

$('.grid-view').on('click', function(){
  $('.catalog-card').removeClass('active')
});
$('.list-view').on('click', function(){
  $('.catalog-card').addClass('active')
});
//view- navigate - end

//slider



//slider-end

//reviews
$('.product-pads__nav a').on('click', function(){
  $('.product-pads__nav a').removeClass('active')
  $(this).addClass('active')
  $('.product-pads__info, .product-pads__char, .product-pads__reviews').removeClass('active')
  $($(this).data('target')).addClass('active')
});
//reviews-end