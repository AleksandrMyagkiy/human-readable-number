module.exports = function toReadable (number) {
  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let digit = 0;
    if (number < 20) {
        return units[number];
    }
    
    if (number < 100) {
        digit = number % 10;
        if (digit == 0) {
            return tens[Math.floor(number / 10) - 2];
        } else {
            return tens[Math.floor(number / 10) - 2] + " " + (digit > 0 ? units[digit] : "");
        }
    }

    if (number < 1000) {
        let rem = number % 100;
        if (rem == 0) {
            return units[Math.floor(number / 100)] + " hundred";
        } else {
            return units[Math.floor(number / 100)] + " hundred " + (number % 100 > 0 ? toReadable(number % 100) : "").trim();
        }
    }
};
