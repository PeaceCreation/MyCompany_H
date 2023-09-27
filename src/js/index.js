import '@laylazi/bootstrap-rtl/dist/js/bootstrap';
import '../../node_modules/@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import '../../node_modules/jquery/dist/jquery.min';
import '../../node_modules/popper.js/dist/popper';
import '../sass/style.scss';
import '../../node_modules/@fortawesome/fontawesome-free/js/all.min';





$(document).ready(function() {
    "use strict";
    $('.thumnails2').hover(function() {
      $(this).find('.project-category').hide();
      $(this).find(".caption2").slideDown(250);
    },
        function(){
            "use strict";
            $(this).find(".project-category").show();
            $(this).find(".caption2").slideUp(250);
        }
    );


    var pathname = window.location.pathname;
    console.log(pathname);

    $('.navbar-nav > li a[href="'+pathname+'"]').parent().addClass("active");
    if(pathname == "/blog-details.html" || pathname == "/add-blog.html"){
      $('.navbar-nav > li > a[href="/blog.html"]').parent().addClass("active");
    }

    if(pathname == "/project-details.html"){
      $('.navbar-nav >li > a[href="/projects.html"]').parent().addClass("active");
    }
  });



  // Get date 

  const date = document.getElementById("year").innerHTML =  new Date().getFullYear();




  // Gallery 

  let modalId = $('#image-gallery');

  $(document)
    .ready(function () {
  
      loadGallery(true, 'a.thumbnail');
  
      //This function disables buttons when needed
      function disableButtons(counter_max, counter_current) {
        $('#show-previous-image, #show-next-image')
          .show();
        if (counter_max === counter_current) {
          $('#show-next-image')
            .hide();
        } else if (counter_current === 1) {
          $('#show-previous-image')
            .hide();
        }
      }
  
      /**
       *
       * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
       * @param setClickAttr  Sets the attribute for the click handler.
       */
  
      function loadGallery(setIDs, setClickAttr) {
        let current_image,
          selector,
          counter = 0;
  
        $('#show-next-image, #show-previous-image')
          .click(function () {
            if ($(this)
              .attr('id') === 'show-previous-image') {
              current_image--;
            } else {
              current_image++;
            }
  
            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
          });
  
        function updateGallery(selector) {
          let $sel = selector;
          current_image = $sel.data('image-id');
          $('#image-gallery-title')
            .text($sel.data('title'));
          $('#image-gallery-image')
            .attr('src', $sel.data('image'));
          disableButtons(counter, $sel.data('image-id'));
        }
  
        if (setIDs == true) {
          $('[data-image-id]')
            .each(function () {
              counter++;
              $(this)
                .attr('data-image-id', counter);
            });
        }
        $(setClickAttr)
          .on('click', function () {
            updateGallery($(this));
          });
      }
    });
  //  Gallery

  // Add a file 
  // Add the following code if you want the name of the file appear on select
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

// 

