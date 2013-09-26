// Wireup a jQuery short cut-to define or fire the 'leave' trigger on 
// a given form or set of forms.
$.fn.leave = function(func) {
	var forms = $(this).filter('form');
	if (func !== null) {
		forms.bind('leave', func);
	} else {
		forms.trigger('leave');
	}
};

// Wireup a jQuery short-cut to define or fire the 'change' trigger on
// a given form or set of forms.
$.fn.change = function(func) {
	var forms = $(this).filter('form');
	if (func !== null) {
		forms.bind('change', func);
	} else {
		forms.trigger('change');
	}
};

$(document).ready( function() {
	// Attach to the focusout event on the form, which is fired each time
	// user moves away from an input in the form.
	$('form').focusout(function(evt) {
		// Determine which element the user is moving to.
		var destination = $(evt.relatedTarget);

		// Determine if the destination is outside of the current form.
		var targetIsOffForm = ($(this).find('*').filter(destination).size() === 0);

		// If the destination is outside of the current form, then trigger the
		// 'leave' event.
		if (targetIsOffForm) {
			$(this).trigger('leave');
		}
	});

	// Attach to the change event on all inputs in the form.
	$('form').find(':input').change(function() {
		// Trigger the change event on the form.
		$(this).closest('form').trigger('change');
	});
});