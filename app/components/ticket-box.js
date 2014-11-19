import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    classNames: ['ticket'],
    classNameBindings: ['color'],
    color: function() {
        return this.get('ticket').color;
    }.property('ticket'),
    ticket: undefined,

    click: function() {
        this.sendAction('action', this.get('ticket'));
    }
});
