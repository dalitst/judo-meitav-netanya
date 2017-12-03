JudoApp.factory("events", function(Event) {
    var events = [];

    var getAll = function () {
        return events;
    }

    var getEventById = function (index) {
        return events[index];
    }

    var addEvent = function (event) {
        events.push(event);
    }

    var update = function(index, event) {
        events[index] = event;
    }

    var remove = function(index) {
        events.splice(index, 1);
    }

    // var removeAll = function() {
    //     events = [];
    // }

    var setEvents = function (eventsPlain) {
        for (var i = 0; i < eventsPlain.length; i++) {
            events.push(new Event(eventsPlain[i].name, eventsPlain[i].city, 
                eventsPlain[i].day, eventsPlain[i].fromDate, eventsPlain[i].toDate))
        }
    }

    return {
        getAll: getAll,
        getEventById: getEventById,
        addEvent: addEvent,
        update: update,
        remove: remove,
        setEvents: setEvents
    }
})