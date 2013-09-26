FormPlus
========

A set of form event modifiers for jQuery that I've found helpful.

Usage
-----
Usage is pretty simple, there are currently two events that can be attached.

1) Form Value Change

This event is triggered anytime there is a value change on an :input element within the form.  This assists with knowing whether or not the form data has been modified.  Attach it like so:

```javascript
$('form').change(function(evt) {
	...
});
```

2) Leaving the Form

This event is triggered anytime the user loses the form's focus.  Perhaps focus() would have been a better name, but I didn't want to collide with existing implementations.  This checks to see if the user has moved focus, and if so, if the focus is outside of the form.   If both conditions are true, the leave() event stack is fired.  Attach it like so:

```javascript
$('form').leave(function(evt) {
	...
});
```

That's it for now.  Use as you like, give me credit if you can, do good things.