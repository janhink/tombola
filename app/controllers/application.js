import Ember from 'ember';

export default Ember.ArrayController.extend({
    tickets: Ember.A([]),
    validation: '',
    showInput: true,
    inputClass: '',
    inputTitle: 'První písmeno je anglický název barvy (r, g, b, y) a zbytek je číslo. Např. r21 je červená 21, y212 je žlutá 212',

    colors: { r: "red", g: "green", b: "blue", y: "yellow", w: "white" },
    counter: 0,
    chance: new Chance(),

    save: function() {
        window.localStorage.setItem('tickets', JSON.stringify(this.get('tickets')));
    }.observes('tickets.@each'),

    actions: {
        add: function() {
            var newTicket = this.get('newTicket');
            if (!Ember.isEmpty(newTicket)) {
                var str = $.trim(newTicket);
                var regex = /^[RGBYWrgbyw][0-9]+$/;
                if (regex.test(str)) {
                    if (!this.tickets.findBy('code', str)) {
                        var ticket = {
                            id: this.chance.hash({length: 8}),
                            code: str,
                            number: str.substr(1),
                            color: this.colors[str.substr(0,1)]
                        };
                        this.get('tickets').pushObject(ticket);
                        this.set('validation', '');
                    } else {
                        this.set('validation', 'Lístek už existuje');
                    }
                } else {
                    this.set('validation', 'Nedokážu rozpoznat barvu a číslo.');
                }
                
                this.set('newTicket', '');
            }
        },

        remove: function(ticketToRemove) {
            var ticket = this.tickets.findBy('id', ticketToRemove.id);
            this.tickets.removeObject(ticket);
        },

        clear: function() {
            this.get('tickets').clear();
        },

        toggleInput: function() {
            this.set('showInput', !this.get('showInput'));
        }
    }
});
