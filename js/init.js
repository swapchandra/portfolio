$('.nav li').click(function(){ 
      $('html,body').animate({ scrollTop: $($(this).children("a").attr("href")).offset().top }, 800);
      return false; 
});
$('.navbar-brand').click(function(){ 
      $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 800);
      return false; 
});