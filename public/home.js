
// Change navbar Color on Scroll > 150
$(document).ready(function(){
  console.log("chat");
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 150) {
	    $(".home-navbar").addClass("was-darkened");
	  }

	  else{
		  $(".home-navbar").removeClass("was-darkened");
	  }
  })
})
