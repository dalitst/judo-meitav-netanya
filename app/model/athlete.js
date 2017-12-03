JudoApp.factory("Athlete", function(){
    function Athlete(firstName, lastName, sex, birthdate, status, egud) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.sex = sex;
        this.birthdate = birthdate;        
        this.status = status;
        this.egud = egud;
    };

    return Athlete;
});