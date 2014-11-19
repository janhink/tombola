import Ember from 'ember';

export default Ember.TextField.extend({
    attributeBindings: ['type'],
    classNameBindings: ['color'],
    type: 'text',
    color: '',
    colors: { r: "red", g: "green", b: "blue", y: "yellow", w: "white" },

    colorize: function() {
        var newTicket = this.get('value');
        if (!Ember.isEmpty(newTicket)) {
            var str = $.trim(newTicket);
            var regex = /^[RGBYWrgbyw][0-9]*$/;
            if (regex.test(str)) {
                this.set('color', this.colors[str.substr(0,1)]);
            } else {
                this.set('color', '');
            }
        } else {
            this.set('color', '');
        }
    }.observes('value'),

    change: function(e) {
        e.preventDefault();
        this.set('color', '');
    }
});
