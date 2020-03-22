module.exports = function toReadable (number) {
    if (number == 0) {return "zero";}
    
    function first (f) {
        if (f == "0") {return "";}
        if (f == "1") {return "one";}
        if (f == "2") {return "two";}
        if (f == "3") {return "three";}
        if (f == "4") {return "four";}
        if (f == "5") {return "five";}
        if (f == "6") {return "six";}
        if (f == "7") {return "seven";}
        if (f == "8") {return "eight";}
        if (f == "9") {return "nine";}
    }
    
    function second(s, s2) {
        if (s == "0") {return "";}
        if (s == "1") {
            if (s2 == "0") {return "ten";}
            if (s2 == "1") {return "eleven";}
            if (s2 == "2") {return "twelve";}
            if (s2 == "3") {return "thirteen";}
            if (s2 == "4") {return "fourteen";}
            if (s2 == "5") {return "fifteen";}
            if (s2 == "6") {return "sixteen";}
            if (s2 == "7") {return "seventeen";}
            if (s2 == "8") {return "eighteen";}
            if (s2 == "9") {return "nineteen";}
        }
        if (s == "2") {return "twenty";}
        if (s == "3") {return "thirty";}
        if (s == "4") {return "forty";}
        if (s == "5") {return "fifty";}
        if (s == "6") {return "sixty";}
        if (s == "7") {return "seventy";}
        if (s == "8") {return "eighty";}
        if (s == "9") {return "ninety";}
    }
    
    let convertNumber = number + '';
    
    if (convertNumber.length == 1) {
        return first(convertNumber[0]);
    }
    
    if (convertNumber.length == 2) {
        if (convertNumber[0] == 1) {
            return second(convertNumber[0], convertNumber[1]);
        } else if(convertNumber[1] == 0) {
            return second(convertNumber[0], convertNumber[1]);
        } else {
            return second(convertNumber[0], convertNumber[1]) + " " + first(convertNumber[1]);
        }
    }
    
    if (convertNumber.length == 3) {
        if (convertNumber[1] == 1) {
            return first(convertNumber[0]) + " " + "hundred" + " " + second(convertNumber[1], convertNumber[2]);
        } else if (convertNumber[1] == 0 && convertNumber[2] == 0) {
            return first(convertNumber[0]) + " " + "hundred";
        } else if (convertNumber[2] == 0) {
            return first(convertNumber[0]) + " " + "hundred" + " " + second(convertNumber[1], convertNumber[2]) + first(convertNumber[2]);
        } else if (convertNumber[1] == 0) {
            return first(convertNumber[0]) + " " + "hundred" + " " + first(convertNumber[2]);
        } else {
            return first(convertNumber[0]) + " " + "hundred" + " " + second(convertNumber[1], convertNumber[2]) + " " + first(convertNumber[2]);
        }
    }
    };
