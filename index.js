// Object
var shopper = {
    firstname : "Robert",
    lastname : "Barber",
    age : 42,
    hair : "brown",
    eyes : "brown",
    isalive : true,
    fullname : function() {
        return this.lastname + ", " + this.firstname;
    }
 };

 console.log(shopper)
console.log(shopper.fullname())