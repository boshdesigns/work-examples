$(function(){

  // Fade out the page title image as user scrolls
  var fadeStart = 0; // 0 scroll or less will equiv to 1 opacity
  var fadeUntil = 100; // 100px scroll or more will equiv to 0 opacity
  var fading = $('.bg-img');

  // bind a function to scroll
  $(window).bind('scroll', function(){

  // Get the window offset value
   var offset = $(window).scrollTop();
   // Set the opacity to 0
   var opacity = 0;

   // Based of the values of the offset, fadeStart + fadeUntil
   // Calculate the opacity
   if( offset<=fadeStart ) {
      opacity = 1;
   } else if( offset<=fadeUntil ) {
      opacity = 1 - offset/fadeUntil;
   }

   // apply the inline opcity to the element
   fading.css('opacity',opacity);
  });

});
