module.exports = function toReadable (number) {
    var units = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
    
        if (number < 20) return units[number];
        var num = number % 10;
        if (number < 100) return tens[~~(number / 10) -2] + (num ? " " + units[num] : "");
        if (number < 1000) return units[~~(number / 100)] + " hundred" + (number % 100 == 0? "" : " " + toReadable(number % 100));
        return toReadable(~~(number / 1000)) + " thousand" + (number % 1000 != 0? " " + toReadable(number % 1000) : "");
    }