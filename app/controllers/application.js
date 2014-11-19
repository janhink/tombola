import Ember from 'ember';

export default Ember.ArrayController.extend({
    tickets: Ember.A(['21', '124']),

    actions: {
        add: function() {
            var newTicket = this.get('newTicket');
            if (!Ember.isEmpty(newTicket)) {
                this.get('tickets').pushObject(newTicket);
                this.set('newTicket', '');
            }
        },

        remove: function() {

        }
    }
});
