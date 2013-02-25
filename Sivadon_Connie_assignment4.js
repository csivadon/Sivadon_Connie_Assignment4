// Connie Sivadon
//SDI 1302
// Project 4
// 20 February 2013

// Telephone String Function
var phoneNumber = "123-456-7890";

var isPhoneNumber = function (phoneNumber) {
        if (phoneNumber == null || phoneNumber.length !== 12) {
          return false;
        }
        if (phoneNumber[3] != "-" || phoneNumber[7] != "-") {
            return false;
        };
        var num1 = phoneNumber[0] + phoneNumber[1] + phoneNumber[2];
        var num2 = phoneNumber[4] + phoneNumber[5] + phoneNumber[6];
        var num3 = phoneNumber[8] + phoneNumber[9] + phoneNumber[10] + phoneNumber[11];
        if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
                return false;
        }
        return true;
};
    
    
// Email String Function
var emailAddress = "csivadon@fullsail.edu";

var isEmailAddress = function (emailAddress) {
        if (emailAddress == null) {
            return false;
            }
        var idxAd = emailAddress.indexOf("@");
        var len = emailAddress.length;
        var idxDot = emailAddress.lastIndexOf(".");
        if (idxAd == null || idxDot == null) {     
            return false;
        }
        if (idxAd == 0){
            return false;
        }
        if (idxAd > idxDot){
            return false;    
        }
        if (len - idxDot < 3 || len - idxDot > 4) {
            return false;
        }
        return true;
};


// URL String Function
var "http://www.abcdefg.com";














// console.log(isPhoneNumber(phoneNumber));
// console.log(isEmailAddress(emailAddress));