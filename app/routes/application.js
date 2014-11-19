import Ember from 'ember';

export default Ember.Route.extend({
    setupController: function(controller, model) {
        if (window.localStorage.getItem('tickets')) {
            var tickets = window.localStorage.getItem('tickets');
            controller.set('tickets', Ember.A(JSON.parse(tickets)));
        }
    }
});
