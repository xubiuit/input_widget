odoo.define('int_range_widget.form_widgets', function (require) {
"use strict";

	var core = require('web.core');
	var FormWidget = require('web.form_widgets');
	var FieldIntRange = FormWidget.FieldFloat.extend({
		template: 'FieldIntRange',
		widget_class: 'oe_form_field_int_range',
		init: function (field_manager, node) {
	        this._super(field_manager, node);
	        var self = this;
	        this.max_value = parseInt(this.options && this.options.max_value) || 100,
			this.min_value = parseInt(this.options && this.options.min_value) || 0;

	        if (this.max_value < this.min_value) {
	        	this.widget_disable = true;
			}
	    },
	    
	    start: function() {
	        return this._super();
	    },

		events: {
        	'keypress input': 'on_keypress_value',
			'change input': 'on_change_value',
    	},

		on_keypress_value: function(e) {
			if (this.widget_disable != true) {
				var value = $(e.currentTarget).val();
				if(value.match(/\D/))
					$(e.currentTarget).val(value.replace(/\D/g,''));
			}
		},

		on_change_value: function(e) {
			if (this.widget_disable != true) {
				var value = $(e.currentTarget).val();
				if (parseInt(value) > this.max_value) {
					$(e.currentTarget).val(this.max_value);
				}
				if (parseInt(value) < this.min_value) {
					$(e.currentTarget).val(this.min_value);
				}
			}
		}
	});

	core.form_widget_registry
    .add('int_range', FieldIntRange);
	
});
