Simple Way Point Scroll
====================

Some simple JavaScript that allows you to dynamically scroll to way points you specify.

Use
---------------------

There are two parts to this "plugin". If you just want a simple scroll between waypoints, specify elements you want as waypoints.

This is done by setting the class of an element to "waypoint", additionally for this to work ensure there are no siblings between elements with the "waypoint class.

The second part is user interation. Add a an element with an ID of "power-to-the-user", and add some form of control. This control must make a call to the removeScroll() function. This will then fade out the div, and remove waypoint scrolling from the page.
