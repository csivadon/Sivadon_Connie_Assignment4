// Connie Sivadon
//SDI 1302
// Project 4
// 20 February 2013


// Main Library
var sivadonLibrary = function () {

    // Telephone String Function

    var checkPhoneNumber = function (phoneNumber) {
        if (phoneNumber.length !== 12) {
          return false;
        }
        if (phoneNumber[3] !== "-" || phoneNumber[7] !== "-") {
            return false;
        }
        
        var num1 = phoneNumber[0,1,2];
        var num2 = phoneNumber[4,5,6];
        var num3 = phoneNumber[8,9,10,11];
        
        if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
            return false;
        }
        return true;
    }
    
    // Email String Function

    var checkEmailAddress = function (emailAddress) {
        
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
    }

    // URL String Function

    var checkUrl = function (url) {
        
        if (url == null) {
            return false;
        }   
        
        var idxUrl1 = url.indexOf("http://");
        var idxUrl2 = url.indexOf("https://");
        
        if (idxUrl1 !== 0 && idxUrl2 !== 0) {
            return false;
        }
        return true;   
    }

    // 



    return {
        
    "checkPhoneNumber":     checkPhoneNumber,
    "checkEmailAddress":    checkEmailAddress,
    "checkUrl":             checkUrl
    }



}



var newLib = new sivadonLibrary;

console.log("Is this a phone number? " + newLib.checkPhoneNumber("123-456-7890"));
console.log("Is this an email address? " + newLib.checkEmailAddress("csivadon@fullsail.edu"));
console.log("Is this a website? " + newLib.checkUrl("http://wwww.mywebsite.com"));