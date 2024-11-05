(function ($) {
    
  $(document).ready(function () {
    console.log("hello");

    // Add margin top with navbar height
    var navbarHeight = $(".navbar").outerHeight(); // Adjust selector if needed
    $(".pk-margin-top").css("margin-top", navbarHeight + "px");
  });
})(jQuery);
