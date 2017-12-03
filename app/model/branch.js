// Shared Branch Constructor
JudoApp.factory("Branch", function(){
    function Branch(name, address, city, phone, coach,urlGoMap) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.phone = phone;        
        this.coach = coach;
        this.urlGoMap = urlGoMap;
    };

    return Branch;
});