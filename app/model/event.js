JudoApp.factory("Event", function(){
    function Event(name, location, address, city, fromDate, to_date, day, type, status) {
        this.name = name;
        this.location = location;
        this.address = address;
        this.city = city;        
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.day = day;
        this.type = type;
        this.status = status;
    };

    return Event;
});