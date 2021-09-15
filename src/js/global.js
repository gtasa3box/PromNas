//product block - navigate
$('.navigate__elem').on('click', function(){
  $('.navigate__elem').removeClass('active')
  $(this).addClass('active')
  $('.product__elem').removeClass('active')
  $($(this).data('target')).addClass('active')
});
//product block - navigate - end
    
  
