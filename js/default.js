$(document).ready(function(){
  var aChildren = $(".side-nav li");

  var aArray = []; // create the empty aArray
  for (var i=0; i < aChildren.length; i++) {
      var aChild = $(aChildren[i]).children('a')[0];
      var ahref = $(aChild).attr('href');
      aArray.push(ahref);
  }

  $(window).scroll(function(){
      var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
      var windowHeight = $(window).height(); // get the height of the window
      var docHeight = $(document).height();

      for (var i = 0; i < aArray.length; i++) {
        var currentDivPosition = $(aArray[i]).offset().top;
        if ( i === 0 ) {
          currentDivPosition = 0;
        }
        var nextDivPosition = windowPos + windowHeight;
        if (i < aArray.length - 1) {
          nextDivPosition= $(aArray[i+1]).offset().top;
        }

        if (windowPos >= currentDivPosition && windowPos < nextDivPosition) {
          var $parent = $("a[href='" + aArray[i] + "']").parent();
          $parent.addClass("on");

          var $grandParent = $parent.parent().parent();
          if ($grandParent.is('li')) {
            $grandParent.addClass('on');
          }
        } else {
          $("a[href='" + aArray[i] + "']").parent().removeClass("on");
        }
      }
  });
});
