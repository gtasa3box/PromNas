//product block - navigate
$('.navigate__elem').on('click', function(){
  $('.navigate__elem').removeClass('active')
  $(this).addClass('active')
  $('.product__elem').removeClass('active')
  $($(this).data('target')).addClass('active')
});
//product block - navigate - end

//title-info
// $('.title__button-hide').on('click', function(){
//   $(this).toggleClass('active')
//   $($(this).data('target')).toggleClass('active')
// });

$('.title__button-hide').on('click', function(){
  $(this).toggleClass('active')
  $($(this).data('target')).stop(true, false).slideToggle()
  
});

//title-info-end
    
  
