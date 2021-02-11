module.exports = function toReadable(number) {
    const digitConverter = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    function two_digit(param) {
        let output = "";
        if (digitConverter[param]) {
            output += digitConverter[param];
        } else if ((param > 20) & (param < 100)) {
            let decade = (param / 10) | 0;
            output += `${digitConverter[decade * 10]} ${
                digitConverter[param % 10]
            }`;
        }
        return output;
    }

    let result = "";

    if (number) {
        while (number) {
            if ((number < 100000) & (number > 999)) {
                let thousand = (number / 1000) | 0;
                result += `${two_digit(thousand)} thousand `;
                number -= thousand * 1000;
            } else if ((number < 1000) & (number > 99)) {
                let hundred = (number / 100) | 0;
                result += `${two_digit(hundred)} hundred `;
                number -= hundred * 100;
            } else if (number < 100) {
                result += `${two_digit(number)}`;
                break;
            }
        }
    } else {
        result = "zero";
    }

    result = result.trim();

    return result;
};
