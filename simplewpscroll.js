    //If set to false, mouse wheel listener is removed.
    var scroll = true;
    //Init waypoints.
    var prevWaypnt = undefined;
    var nxtWaypnt = $('.waypoint:first').next();
    
    //Add listeners to mouse wheel event.
    document.onmousewheel = zoom_handler;
    if (window.addEventListener) { document.addEventListener('DOMMouseScroll', zoom_handler, false); }
    document.onmousewheel = zoom_handler;
    
    //Here scroll events are determined, and the page scroll is activated.
    function zoom_handler(event) {
        //+tive for scroll up, -tive for scroll down.
        var delta = 0;
        
        //Init event.
        if (!event) event = window.event;
        //Normalise delta based on browser.
        if (event.wheelDelta) {
            // Opera and IE.
            delta = event.wheelDelta / 60;
        } else if (event.detail) {
            // W3C.
            delta = -event.detail / 2;
        }
        //Scroll up.
        if (delta > 0) {
            if (prevWaypnt.exists()) {
                var offset = prevWaypnt.data("offset");
                if (offset == undefined) {
                    offset = 0;
                }
                $('html,body').animate({
                    scrollTop: prevWaypnt.offset().top - offset
                }, 1000);
                nxtWaypnt = prevWaypnt.next();
                prevWaypnt = prevWaypnt.prev();
            }
        }
        //Scroll down.
        else if (delta < 0) {

            if (nxtWaypnt.exists()) {
                var offset = nxtWaypnt.data("offset")
                if (offset == undefined) {
                    offset = 0;
                }

                $('html,body').animate({
                    scrollTop: nxtWaypnt.offset().top - offset
                }, 1000);

                prevWaypnt = nxtWaypnt.prev();
                nxtWaypnt = nxtWaypnt.next();
            }

        }
    }

  //Optional code to remove scrolling.
    function removeScroll()
    {
        $('#power-to-the-user').fadeOut()
        document.onmousewheel = false;
    }
    
    
    //Extend jQuery.
$.fn.exists = function () {
    return this.length !== 0;
  }
