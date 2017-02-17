$(document).foundation()

//-------Hamburger menu ------
$('.nav-icon').on('click', function(e){
        e.preventDefault();
        $('.top-bar-right ul').slideToggle();
    });


$(window).on('resize', function(){
    var windowWidth = $(window).width(); //return the size of the window
    
    if (windowWidth > 639 ) {
        $('.top-bar-right ul').show();
    } else {
        $('.top-bar-right ul').hide();
    }
});


//-------Typewriting effect-------
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };


// -------video-------

$(function(){
  var $refreshButton = $('#refresh');
  var $results = $('#css_result');
  
  function refresh(){
    var css = $('style.cp-pen-styles').text();
    $results.html(css);
  }

  refresh();
  $refreshButton.click(refresh);
  
  // Select all the contents when clicked
  $results.click(function(){
    $(this).select();
  });
});




//--------------prompt message----------------

// (function() {  
//     var dialog = document.getElementById('window');  
//     document.getElementById('show').onclick = function() {  
//         dialog.show();  
//     };  
//     document.getElementById('exit').onclick = function() {  
//         dialog.close();  
//     };  
// })();





// //-------one page scroll - swipe effect on iPhone-------
// $(".main").onepage_scroll({
//    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
//    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
//                                     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
//    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
//    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
//    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
//    beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
//    afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
//    loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
//    keyboard: true,                  // You can activate the keyboard controls
//    responsiveFallback: 1024,        // You can fallback to normal page scroll by defining the width of the browser in which
//                                     // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
//                                     // the browser's width is less than 600, the fallback will kick in.
//    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
// });


 