JudoApp.factory("athletes", function(Athlete) {
    var athletes = [];

    var getAll = function () {
        return athletes;
    }

    var getAthleteById = function (index) {
        return athletes[index];
    }

    var addAthlete = function (event) {
        athletes.push(event);
    }

    var update = function(index, event) {
        athletes[index] = event;
    }

    var remove = function(index) {
        athletes.splice(index, 1);
    }

    // var removeAll = function() {
    //     athletes = [];
    // }

    var setAthletes = function (athletesPlain) {
        for (var i = 0; i < athletesPlain.length; i++) {
            athletes.push(new Athlete(athletesPlain[i]))
        }
    }

    return {
        getAll: getAll,
        getAthleteById: getAthleteById,
        addAthlete: addAthlete,
        update: update,
        remove: remove,
        setAthletes: setAthletes
    }
})