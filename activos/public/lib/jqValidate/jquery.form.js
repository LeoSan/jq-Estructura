/**
 * @name        jQuery Form
 * @description A jQuery form handling and validation plugin
 * 
 * @p
 *     jQuery Form is designed with flexibility in mind, however, it still
 *     caters to those who need a plugin to work out of the box.
 * @p
 *     By default, it will append error messages wrapped in x/html label tags
 *     after the form element with a class of error when the form is submitted.
 *     However, it can be customized through options so that it will wrap 
 *     messages in a different element, give it a different className and
 *     validate on blur.
 * @p
 *     It allows even more behavioral cusomization through error handlers and
 *     submit handlers. Other customization options include being able to set
 *     dependecies on certain elements. That is, making one element depend
 *     on the validity of certain, custom rules that are not set as validators.
 * 
 * @version     1.0b
 * @date        2008-12-07
 * 
 * @copyright
 *     Copyright (c) 2008 Trey Shugart (shugartweb.com/jquery/)
 * 
 * @license
 *     Dual licensed under: 
 *         MIT - (http://www.opensource.org/licenses/mit-license.php) 
 *         GPL - (http://www.gnu.org/licenses/gpl.txt)
 */
;(function($) {
	
	$.form                 = {};
	$.form.handlers        = {};
	$.form.handlers.errors = {};
	$.form.handlers.submit = {};
	$.form.validators      = {};
	
	/**
	 * @name jQuery.form.addErrorHandler
	 * @description
	 *     Sets an error handler and gives it a name so it can be referenced. The callback handles
	 *     the appending and showing of errors. Two parameters are passed to the callback. The first
	 *     is the form object and the second is an array of objects containing object.field and 
	 *     object.message. The former is the field in which the error occurred, and the latter 
	 *     is the error message.
	 * @param {String}   name     The name of the error handler
	 * @param {Function} callback The callback to handle the errors
	 * @return The error handler that was just set
	 * 
	 * @example
	 *  $.form.addErrorHandler('myCustomHandler', function(form, errors) {
	 *  	$(form).find('label.error').remove();
	 *  	$.each(errors, function(i, el) {
	 *  		$field = $(el.field);
	 *  		$field.after('<label for="' + $field.attr('id') + '" class="error">' + el.error + '</label>');
	 *  	});
	 *  });
	 */
	$.form.addErrorHandler = function(name, callback) {
		return _addHandler('errors', name, callback);
	};
	
	/**
	 * @name jQuery.form.addSubmitHandler
	 * @description
	 *     Sets a submit handler and gives it a name so it can be referenced. The callback handles
	 *     how the form is submitted and whether it is submitted (by returning true or false). The
	 *     only parameter passed to the callback is the form object.
	 * @param {String} name       The name of the submit handler
	 * @param {Function} callback The callback to handle the submission
	 * @return The submit handler that was just set
	 * 
	 * @example
	 *  $.form.addSubmitHandler('myCustomHandler', function(form) {
	 *  	return true;
	 *  });
	 */
	$.form.addSubmitHandler = function(name, callback) {
		return _addHandler('submit', name, callback);
	};
	
	/**
	 * @name jQuery.form.addValidator
	 * @description 
	 *     Adds a validation callback for a certain type of field and gives
	 *     it an optional default message. Two parameters are passed to the
	 *     callback. The first is the form object and the second is the
	 *     field being validated.
	 * @param {String}   type           The type/name of the validator being added
	 * @param {Function} callback       The callback performed to perform validation. Returns true or false indicating pass or failure respectively.
	 * @param {String}   defaultMessage The default message to be displayed upon error if no other error messages are set.
	 * @return The validator that was just set
	 * @chainable false
	 * 
	 * @example
	 *  $.form.addValidator('required', function(form, field) {
	 *  	$field = $(field);
	 *  	return $field.val() !== ''; // true or false
	 *  });
	 */
	$.form.addValidator = function(type, callback, defaultMessage) {
		$.form.validators[type]              = {};
		$.form.validators[type]['validator'] = callback;
		$.form.validators[type]['message']   = defaultMessage;
		return $.form.validators[type];
	};
	
	/**
	 * @name jQuery.form.removeValidator
	 * @description 
	 *     Globlly removes a validatior of the specified type and returns the resulting
	 *     object set of validators.
	 * @param {String} type The type of validator to remove
	 * @return A collection of all of the validators after removal
	 * @chainable false
	 * 
	 * @example
	 *  $.form.removeValidator('required');
	 */
	$.form.removeValidator = function(type) {
		$.form.validators = $($.form.validators).filter(function() {
			$(this).get(0).type !== 'type';
		});
		return $.form.validators;
	};
	
	/**
	 * @name jQuery.fn.form
	 * @description 
	 *     Shortcut for initializing and validating all in one call. This is
	 *     generally how jQuery.form will be used. This utilizes custom submit
	 *     handlers, error handlers, dependencies and settings while also 
	 *     providing default behavior if nothing is set.
	 *     
	 *     By Default, errors will be appended after the form element and wrapped
	 *     in a &lt;label&gt; element with the for attribute the same as the 
	 *     field's id attribute.
	 * @param {Object} options The opitions to be used with this form
	 * @return {Object}
	 * @chainable false
	 * 
	 * @example
	 *  $('form').form();
	 * 
	 * @example
	 *  $('form').form({
	 *  	useClassAsType  : true,
	 *  	useTitleAsError : true,
	 *  	filter          : ':enabled',
	 *  	ignore          : '',
	 *  	errorHandler    : 'default',
	 *  	submitHandler   : 'default'
	 *  });
	 */
	$.fn.form = function(options) {
		return $(this).each(function() {
			var $form   = _getForm.apply(this).formSetOptions(options);
			var options = $form.formGetOptions();
			
			if (!options.validateOnBlurAfterSubmit)
				_setBlurHandler.apply(this);
			
			$form.submit(function() {
				if (options.validateOnBlurAfterSubmit)
					_setBlurHandler.apply(this);
				
				if ($form.formValidate().formHasErrors()) {
					$form.formHandleErrors();
					return false;
				}
				return $form.formHandleSubmit();
			});
			
			function _setBlurHandler() {
				if (options.blurHandler) {
					_getFields.apply(this).each(function() {
						var $field = $(this);
						
						if (!$field.data('form.hasBlurHandler'))
							$field.data('form.hasBlurHandler', true).blur(function() {
								$(this).formValidate().formHandleErrors(options.blurHandler);
							});
					});
				}
			}
		});
	};
	
	/**
	 * @name jQuery.fn.formHandleErrors
	 * @description
	 *     This method as well as being used internally, can also be used for more
	 *     ways to customize form error handling. This invokes the proper error
	 *     handler for the selected form. Usually, in situations such as this,
	 *     formValidate() will be called prior to calling formHandleErrors since it 
	 *     validates the form and attaches the errors to their respective fields.
	 * @param {String|Function} name The name of the handler to invoke. If unspecified, the handler is taken from the options attached to the selected form.
	 * 
	 * @example
	 *  $('button#check-form').click(function() {
	 *  	$('form')
	 *  		.formValidate()
	 *  		.formHandleErrors('default');
	 *  });
	 */
	$.fn.formHandleErrors = function(name) {
		var $form   = _getForm.apply(this);
		var $fields = _getFields.apply(this);
		var func    = typeof name !== 'undefined' ? name : $form.formGetOptions().errorHandler;
		var errors  = $fields.formGetErrors();
		return $.isFunction(func) ? func($form, $fields) : $.form.handlers['errors'][func]($form, $fields);
	};
	
	/**
	 * @name jQuery.fn.formHandleSubmit
	 * @description
	 *     The same as formHandleErrors, but invokes form submission.
	 * @param {String|Function} name Behaves the same way as formHandleErrors
	 * 
	 * @example
	 *  $('form').formHandleSubmit('default');
	 */
	$.fn.formHandleSubmit = function(name) {
		var $form   = _getForm.apply(this);
		var $fields = _getFields.apply(this);
		var func    = typeof name !== 'undefined' ? name : $form.formGetOptions().submitHandler;
		return $.isFunction(func) ? func($form, $fields) : $.form.handlers['submit'][func]($form, $fields);
	};
	
	/**
	 * @name jQuery.fn.formFields
	 * @description 
	 *     Builds a form object from the specified form's fields. If arguments are
	 *     passed, they are expected to be strings of each form elements name that
	 *     you want to return. If the first argument is an array, then that is
	 *     expected to contain all of the names of the fields you want to return.
	 * @param {String|Array} String or Array of field names to return
	 * @return Collection of jQuery form field objects
	 * @chainable true
	 * 
	 * @example
	 *  $('form').formFields('inputName');
	 * 
	 * @example
	 *  $('form').formFields(['inputName1', 'inputName2', 'inputName3']);
	 */
	$.fn.formFields = function(filterBy) {
		var $form      = _getForm.apply(this);
		var filterBy   = typeof filterBy === 'string' ? [filterBy] : filterBy;
		var selectors  = [];
		$.each(filterBy, function(i, el) {
			selectors[selectors.length] = ':input[@name="' + el + '"]';
		});
		return $form.find(selectors.join(', '));
	};
	
	/**
	 * @name jQuery.fn.formSetTypes
	 * @description
	 *     Sets the type or types (depending on if a string or array is passed)
	 *     of the fields in the collection. If a type already exists, this will 
	 *     then be an additional type. If this type exists then it will be 
	 *     overwritten.
	 * @param {String|Array} types A string or array of types to set the field to
	 * @return {Object}
	 * @chainable true
	 * 
	 * @example
	 *  $('form').formFields(['input1', 'input2']).formSetTypes('required');
	 */
	$.fn.formAddTypes = function(types) {
		return $(this).each(function(i, field) {
			var types = typeof types === 'string' ? [types] : types;
			$.each(types, function(ii, type) {
				_add(field, 'type', type);
			});
		});
	};
	
	/**
	 * @name jQuery.fn.formRemoveType
	 * @description
	 *     Removes the passed type(s) from the selected fields
	 * @param {String|Array} types A string or array of types to remove from the field
	 * @return {Object}
	 * @chainable true
	 * 
	 * @example
	 *  $('#input1').formRemoveType('required');
	 */
	$.fn.formRemoveTypes = function(str) {
		return $(this).each(function(i, field) {
			var types = typeof types === 'string' ? [types] : types;
			$.each(types, function(ii, type) {
				_remove(field, 'type', type);
			});
		});
	};
	
	/**
	 * @name jQuery.fn.formGetTypes
	 * @description
	 *     Returns the type of a single field
	 * @return Array of types
	 * @chainable false
	 * 
	 * @example
	 *  $('#input1').formGetTypes();
	 */
	$.fn.formGetTypes = function() {
		return _get(this, 'type');
	};
	
	/**
	 * @name jQuery.fn.formIsType
	 * @description
	 *     Checks to see if the passed field is a given type
	 * @param {String} type The type to check the field against
	 * @return {Boolean}
	 * @chainable false
	 * 
	 * @example
	 *  $('#input1').formIsType('required');
	 */
	$.fn.formIsType = function(type) {
		var arr = $(this).eq(0).data('form.type');
		return typeof arr !== 'undefined' && $.inArray(type, arr) !== -1;
	};
	
	/**
	 * @name jQuery.fn.formFilterByType
	 * @description
	 *     Filters any fields that don't match the given type
	 * @param {String} type The type to filter by
	 * @return {Object}
	 * @chainable true
	 * 
	 * @example
	 *  $('form :input').formFilterByType('required');
	 */
	$.fn.formFilterByType = function(type) {
		return $(this).filter(function() {
			return $(this).formIsType(type);
		});
	};
	
	/**
	 * @name jQuery.fn.formGetErrors
	 * @description
	 *     Retrieves all error messages associated with the specified form and returns
	 *     an array.
	 * @return Array of Objects that contain the field object and error messages array
	 * @chainable false
	 * 
	 * @example
	 *  $('form').formGetErrors();
	 */
	$.fn.formGetErrors = function() {
		var errors = [];
		_getFields.apply(this).each(function(i, field) {
			var fieldErrors = _get(field, 'errors') || [];
			if (typeof fieldErrors !== 'undefined') {
				$.each(fieldErrors, function(ii, error) {
					errors[errors.length] = {
						field   : $(field),
						message : error
					};
				});
			}
		});
		return errors;
	};
	
	/**
	 * @name jQuery.fn.formHasErrors
	 * @description
	 *     Checks to see if the current form has any errors
	 * @return {Boolean}
	 * @chainable true
	 * 
	 * @example
	 *  $('form').formHasErrors();
	 */
	$.fn.formHasErrors = function() {
		return $(this).formGetErrors().length > 0 ? true : false;
	};
	
	/**
	 * @name jQuery.fn.formSetErrorMessage
	 * @description
	 *     Sets an error message for a field with a specific type
	 * @param {String} type    The type of error to attach the message to
	 * @param {String} message The message to set
	 * @return {Object}
	 * @chainable true
	 * 
	 * @example
	 *  $('#input1').formSetErrorMessage('required', 'Please enter a value for this field');
	 */
	$.fn.formSetErrorMessage = function(type, message) {
		return _getFields.apply(this).each(function(index, field) {
			var $field = $(field);
			if ($field.formIsType(type))
				_add($(field), 'errorMessages.' + type, message);
		});
	};
	
	/**
	 * @name jQuery.fn.formGetErrorMessage
	 * @description
	 *     Retrieves error messages for a given type on the given field. Error
	 *     messages are defined manually using formSetErrorMessage, in the
	 *     elements title attribute (or specified attribute), or by using the
	 *     default message supplied by the validator.
	 * @param {String} type
	 * @chainable false
	 * 
	 * @example
	 *  $('#input1').formGetErrorMessage('required');
	 */
	$.fn.formGetErrorMessage = function(type) {
		var $field = _getFields.apply(this).eq(0);
		var msg    = _get($field, 'errorMessages.' + type),
		    msg    = typeof msg !== 'undefined' && msg !== '' ? msg : $field.formGetOptions().useTitleAsError ? $field.attr('title') : undefined,
		    msg    = typeof msg !== 'undefined' && msg !== '' ? msg : $.form.validators[type].message;
		return msg;
	};
	
	/**
	 * @name jQuery.fn.formIs
	 * @description
	 *     Checks to see if a form element is valid but only of the specified type
	 * @param {Object} type The name of the validator to use to check the passed field
	 * @return {Boolean}
	 * @chainable false
	 * 
	 * @example
	 *  $('#input1').formIs('required');
	 */
	$.fn.formIs = function(type) {
		if (typeof $.form.validators[type] !== 'undefined') {
			var $form = _getForm.apply(this);
			var o     = $form.formGetOptions();
			return $.form.validators[type].validator($form.get(0), this);
		}
		return true;
	};
	
	/**
	 * @name jQuery.fn.formValidate
	 * @description
	 *     Checks the validity of a form, sets error messages, checks dependencies
	 *     and returns whether the form contains any errors.
	 * @return {Boolean}
	 * @chainable false
	 * 
	 * @example
	 *  $('form').formIsValid();
	 * 
	 * @example
	 *  $(':input[name="field1"], :input[name="field2"]').formValidate();
	 */
	$.fn.formValidate = function() {
		var errors  = 0;
		var $this   = $(this);
		var form    = _getForm.apply(this);
		var fields  = _getFields.apply(this);
		var options = form.formGetOptions();
		// check types and classes against validators
		fields.filter(options.filter).each(function(i, field) {
			$(field).removeData('form.errors');
			var curerrors = 0;
			for (ii in $.form.validators) {
				if ((form.formGetOptions().useClassAsType && $(field).hasClass(ii)) || $(field).formIsType(ii)) {
					if (!$(field).formIs(ii)) {
						var msg = $(field).formGetErrorMessage(ii);
						_add(field, 'errors', msg);
						curerrors++;
						errors++;
					}
				}
			}
		});
		// check dependencies if the current field is valid
		fields.each(function(i, field) {
			var dependencies = _get(field, 'dependencies');
			if (typeof dependencies !== 'undefined' && $(field).formGetErrors().length === 0) {
				$.each(dependencies, function(ii, dependency) {
					if ($.isFunction(dependency.callback) && !dependency.callback(form.get(0), field)) {
						var msg = typeof dependency.errorMessage !== 'undefined' ? dependency.errorMessage : $(field).formGetErrorMessage(ii);
						_add(field, 'errors', msg);
						errors++;
					}
				});
			}
		});
		return fields;
	};
	
	
	
	// DEPENDENCIES
	
	/**
	 * @name jQuery.fn.formSetDependency
	 * @description
	 *    Sets a dependency callback (or callbacks) to be executed when and if the specified field
	 *    passes all previous validation rules. The call back must return a boolean value. True
	 *    is a pass, false triggers an error using the passed msg.
	 * @param {Function} fn  The callback that determines whether or not to trigger an error
	 * @param {String}   msg The message to display if fn returns false
	 * @return {Object}
	 * @chainable true
	 * 
	 * @example
	 *  $('#input1').formSetDependency(function() {
	 *  	if ($('#your-name').val() === '')
	 *  		return true;
	 *  	return false;
	 *  }, 'This field is required if your name is entered');
	 */
	$.fn.formAddDependency = function(fn, msg) {
		return _getFields.apply(this).each(function(i, field) {
			_add(field, 'dependencies', {callback: fn, errorMessage: msg});
		});
	};
	
	/**
	 * @name jQuery.fn.formRemoveDependency
	 * @description
	 *    Removes a dependency callback from a field. Only works with
	 *    named callbacks.
	 * @param {Function} fn
	 * @return {Object}
	 * @chainable true
	 * 
	 * @example
	 *  $('#input1').formRemoveDependency(namedCallbackToRemove);
	 */
	$.fn.formRemoveDependency = function(fn) {
		return _getFields.apply(this).each(function(i, field) {
			if (typeof fn === 'undefined') {
				$(field).removeData('form.dependencies');
			} else {
				_remove(field, 'dependencies', fn);
			}
		});
	};
	
	
	
	// OPTIONS
	
	/**
	 * @name jQuery.fn.formGetOptions
	 * @description
	 *    Returns the options for the form, or field's parent form
	 * @return {Object}
	 * @chainable false
	 * 
	 * @example
	 *  $('form').formGetOptions();
	 */
	$.fn.formGetOptions = function() {
		var options = _getForm.apply(this).data('form.options');
		return typeof options === 'undefined' ? {
			useClassAsType            : true,
			useTitleAsError           : true,
			validateOnBlurAfterSubmit : true,
			filter                    : ':enabled',
			ignore                    : ':hidden',
			errorHandler              : 'default',
			blurHandler               : 'default',
			submitHandler             : 'default',
			errorWrapper              : 'label',
			errorClass                : 'error'
		} : options;
	};
	
	/**
	 * @name jQuery.fn.formSetOptions
	 * @description
	 *    Sets options for the form, or field's parent form
	 * @param {Object} options
	 * @return {Object}
	 * @chainable true
	 * 
	 * @example
	 *  $('form').formSetOptions({
	 *  	ignore        : 'input[type="select"]',
	 *  	errorHandler  : 'custom1',
	 *  	submitHandler : 'custom1'
	 *  });
	 */
	$.fn.formSetOptions = function(options) {
		var $form = _getForm.apply(this);
		return $form.data('form.options', $.extend($form.formGetOptions(), options));
	};
	
	
	
	// INTERNALS
	
	function _add(el, key, val) {
		return $(el).each(function(index, field) {
			var $field  = $(field);
			var c       = $field.data('form.' + key);
			c           = typeof c === 'undefined' ? [] : c;
			c[c.length] = val;
			$field.data('form.' + key, c);
		});
	};
	
	function _remove(el, key, val) {
		return $(el).each(function(index, field) {
			var $field       = $(field);
			var currentTypes = $field.data('form.' + key);
			
			if (typeof currentTypes === 'object') {
				var filtered = currentTypes.filter(function(t, i, arr) {
					return t !== val;
				});
				
				$field.data('form.' + key, filtered);
			}
		});
	};
	
	function _get(el, key) {
		return $(el).eq(0).data('form.' + key);
	};
	
	function _addHandler(type, name, callback) {
		$.form.handlers[type][name] = {};
		$.form.handlers[type][name] = callback;
		
		return $.form.handlers[type][name];
	};
	
	function _isForm() {
		return $(this).get(0).tagName.toLowerCase() === 'form';
	}
	
	function _getForm() {
		return _isForm.apply(this) ? $(this).eq(0) : $(this).parents('form').eq(0);
	}
	
	function _getFields(el) {
		var options = _getForm.apply(this).formGetOptions();
		
		$fields = _isForm.apply(this) ? $(this).find(':input') : $(this).filter(':input');
		
		if (options.ignore)
			$fields = $fields.not(options.ignore);
		
		if (options.filter)
			$fields = $fields.filter(options.filter);
		
		return $fields;
	}
	
	
	
	// ERROR HANDLERS
	
	$.form.addErrorHandler('default', function($form, $fields) {
		var options = $form.formGetOptions();
		var errors  = $fields.formGetErrors();
		
		$fields.removeClass(options.errorClass);
		$fields.next(options.errorWrapper + '.' + options.errorClass).remove();
		
		for (var i in errors) {
			var $field  = errors[i].field;
			var forAttr = options.errorWrapper === 'label' ? ' for="' + $field.attr('id') + '"' : '';
			
			$field.after('<' + options.errorWrapper + forAttr + ' class="' + options.errorClass + '">' + options[i].message + '</' + options.errorWrapper + '>');
		}
	});
	
	
	
	// SUBMIT HANDLERS
	
	$.form.addSubmitHandler('default', function($form, $fields) {
		var options = $form.formGetOptions();
		
		$form.find(options.errorWrapper + '.' + options.errorClass).remove();
		$fields.removeClass(options.errorClass);
		
		return true;
	});
	
	
	
	// VALIDATORS
	
	$.form.addValidator('required', function(form, field) {
		var $form  = $(form),
			$field = $(field);
		
		if ($field.is($form.formGetOptions().ignoreSelector))
			return false;
		
		if (/^\s*$/g.test(($field.val() || '').toString()))
			return false;
		
		if ($field.is(':checkbox') && !$field.is(':checked'))
			return false;
		
		return true;
	}, 'This field is required');
	
	$.form.addValidator('email', function(form, field) {
		var $form  = $(form),
		    $field = $(field);
		
		return 
			$field.is($form.formGetOptions().ignoreSelector)
				|| $field.val() === '' 
				|| /[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-\.]+\.[a-zA-Z]+/.test($field.val());
	}, 'Please enter a valid email address');
	
	/**
	 * Checks to see if the value is a number
	 */
	$.form.addValidator('number', function(form, field) {
		var $field = $(field);
		
		return $field.val() === '' || /\d/.test($field.val());
	}, 'Value must contain a number');
	
	/**
	 * Validates a minimum value
	 */
	$.form.addValidator('min', function(form, field) {
		var $field = $(field);
		var val    = parseFloat(($field.val() || '').toString().replace(/[^\.^\-\d]/g, '') || 0);
		var min    = $field.data('form.validators.min.min');
		    min    = parseFloat(typeof min === 'number' ? min : $(min).val());
		
		return val >= min;
	}, 'Value is too small');
	
	/**
	 * Validates a maximum value
	 */
	$.form.addValidator('max', function(form, field) {
		var $field = $(field);
		var val    = parseFloat(($field.val() || '').toString().replace(/[^\.^\-\d]/g, '') || 0);
		var max    = $field.data('form.valiators.max.max');
		max        = parseFloat(typeof max === 'number' ? max : $(max).val());
		
		return val <= max;
	}, 'Value is to large');

})(jQuery);