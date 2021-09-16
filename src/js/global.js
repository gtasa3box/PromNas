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
//select-end

//view
$('.view-change').on('click', function(){
  $('.view-change').removeClass('active')
  $(this).addClass('active')
  // $('.product__elem').removeClass('active')
  // $($(this).data('target')).addClass('active')
});
//view- navigate - end

    
  
