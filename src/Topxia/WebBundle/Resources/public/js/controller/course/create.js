define(function(require, exports, module) {

	var Validator = require('bootstrap.validator');

    exports.run = function() {
        var validator = new Validator({
            element: '#course-create-form',
            triggerType: 'change',
            onFormValidated: function(error){
                if (error) {
                    return false;
                }
                $('#course-create-btn').button('submiting').addClass('disabled');
            }
        });

        validator.addItem({
            element: '[name="course[title]"]',
            required: true
        });
        
    };

});