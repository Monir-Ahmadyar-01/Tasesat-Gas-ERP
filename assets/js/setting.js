$(function (){
  $('.link_prof').click(function(){
    $(this).css('color','rgb(51 ,103 ,214)');
    $('.password-security-list').css('color','#363636');
    $('.link_theme').css('color','#363636');
    $('.link_help').css('color','#363636');
  });  
  $('.password-security-list').click(function(){
    $(this).css('color','rgb(51 ,103 ,214)');
        $('.link_prof').css('color','#363636');
      $('.link_theme').css('color','#363636');
      $('.link_help').css('color','#363636');
  });
  $('.link_theme').click(function(){
        $(this).css('color','rgb(51 ,103 ,214)');
    $('.password-security-list').css('color','#363636');
    $('.link_help').css('color','#363636');
    $('.link_prof').css('color','#363636');
  });  
  $('.link_help').click(function(){
        $(this).css('color','rgb(51 ,103 ,214)');
    $('.password-security-list').css('color','#363636');
    $('.link_theme').css('color','#363636');
    $('.link_prof').css('color','#363636');
  });
  $('.fa-bars').click(function(){
    $('.back-bg').show();
    $('.setting-sidebar').css({'right':'10px','transition':'.3s'});
  });  
  $('.back-bg').click(function(){
    $('.back-bg').hide();
    $('.setting-sidebar').css({'right':'-100%','transition':'.3s'});
  });
  // $(window).on('resize',()=>{
  //   $('.back-bg').hide();
  // });  
});