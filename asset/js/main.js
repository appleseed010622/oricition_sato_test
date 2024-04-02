$(function(){
 
$(".FAQ_question").on("click",function(){
  console.log('ok');
  $(this).toggleClass("selected");
  $(this).next().slideToggle();
});
    
  var pagetop = $('#scroll_to_top');   
  pagetop.on("click",function () {
          $('body,html').animate({
                  scrollTop: 0
          }, 500); 
          return false;
  });
});
