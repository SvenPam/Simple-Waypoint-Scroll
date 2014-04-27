Simple Way Point Scroll (SWPS)
====================

Some simple JavaScript that allows you to dynamically scroll to way points you specify. Additionally, you can specify a user control to remove scrolling.

Technology
---------------------

SWPS uses JavaScript and vanilla jQuery to run.


Use
---------------------

There are two parts to this SWPS.

####Simple
If you just want a simple scroll between waypoints, specify elements you want as waypoints.

This is done by setting the class of an element to "waypoint", additionally for this to work ensure there are no siblings between elements with the "waypoint class:



```HTML
<div>
  <div id="a" class="waypoint"></div>
  <div id="b" class="waypoint"></div>
  <div id="c" class="waypoint"></div>
  <div id="d" class="waypoint"></div>
</div>
```

ID's are not needed, they are noyl used for example.


#####Offset

If you want to offset the scroll -- say place a heading halfway in the page -- you can add a `data-offset` attribute.

```HTML
<div>
  <div id="a" class="waypoint"></div>
  <div data-offset="200" id="b" class="waypoint"></div>
  <div id="c" class="waypoint"></div>
  <div data-offset="500" id="d" class="waypoint"></div>
</div>
```

####User Interaction

The second part is user interation. Add a an element with an ID of "power-to-the-user", and add some form of control. This control must make a call to the removeScroll() function. This will then fade out the div, and remove waypoint scrolling from the page.

```HTML
<div id="power-to-the-user">
  <input type="checkbox" name="checkbox" id="checkbox" onclick="removeScroll();"/>
  <label for="checkbox" style="background: #E0EAFF;">Let me Scroll!</label>
</div>
```

Not everone likes pages to scroll for them, so this is a simple soultion to that problem. The removescroll function is not needed idf you don't want that funtionality.

Compatibility
---------------------

Not tested in legacy browsers. Only tested with jQuery 1.10.2.

Limitations
---------------------

If a browser full caches the page, the user will naturally be brought back to window position they were last at, this will break the UX. This is because SWPS intializes at the first element.
