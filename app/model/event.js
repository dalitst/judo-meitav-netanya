JudoApp.factory("Event", function(){
    function Event(plainObject) {
        this.name = plainObject.name;
        this.location = plainObject.location;
        this.address = plainObject.address;
        this.city = plainObject.city;        
        this.fromDate = plainObject.fromDate;
        this.toDate = plainObject.toDate;
        this.day = plainObject.day;
        this.type = plainObject.type;
        this.status = plainObject.status;
    };

    return Event;
});