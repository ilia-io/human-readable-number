module.exports = function toReadable(number) {
    const ns = number.toString();
    const numbers = {
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
        20: "twenty",
        100: "hundred",
    };

    if (number >= 21 && number <= 99) {
        if (ns[1] == 0) {
            return `${numbers[ns]}`;
        } else {
            return `${numbers[ns[0] + "0"]} ${numbers[ns[1]]}`;
        }
    } else if (number >= 100 && number <= 999) {
        if (ns.slice(ns.length - 2) <= 20) {
            if (ns[1] == 0) {
                return `${numbers[ns[0]]} ${numbers[100]}${
                    ns[2] == "0" ? "" : " " + numbers[ns[2]]
                }`;
            } else {
                return `${numbers[ns[0]]} ${numbers[100]} ${
                    numbers[ns.slice(ns.length - 2)]
                }`;
            }
        } else if (ns[2] != 0) {
            return `${numbers[ns[0]]} ${numbers[100]} ${numbers[`${ns[1]}0`]} ${
                numbers[ns[2]]
            }`;
        } else {
            return `${numbers[ns[0]]} ${numbers[100]} ${
                numbers[ns.slice(ns.length - 2)]
            }`;
        }
    } else {
        return numbers[ns];
    }
};
