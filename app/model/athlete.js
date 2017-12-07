JudoApp.factory("Athlete", function(){
    function Athlete(plainObject) {
        this.firstName = plainObject.firstName;
        this.lastName = plainObject.lastName;
        this.sex = plainObject.sex;
        this.birthdate = plainObject.birthdate;        
        this.status = plainObject.status;
        this.egud = plainObject.egud;
    };

    return Athlete;
});