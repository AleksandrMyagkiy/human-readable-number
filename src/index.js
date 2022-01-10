module.exports = function toReadable (number) {
  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let digit = 0;
    if (number < 20) {
        return units[number];
    }
    if (number === 20) {
        return 'twenty';
    }
    if (number === 30) {
        return 'thirty';
    }
    if (number === 40) {
        return 'forty';
    }
    if (number === 50) {
        return 'fifty';
    }
    if (number === 60) {
        return 'sixty';
    }
    if (number === 70) {
        return 'seventy';
    }
    if (number === 80) {
        return 'eighty';
    }
    if (number === 90) {
        return 'ninety';
    }
    if (number < 100) {
        digit = number % 10;
        return tens[Math.floor(number / 10) - 2] + " " + (digit > 0 ? units[digit] : "");
    }
    if (number === 100) {
        return 'one hundred';
    }
    if (number === 200) {
        return 'two hundred';
    }
    if (number === 300) {
        return 'three hundred';
    }
    if (number === 400) {
        return 'four hundred';
    }
    if (number === 500) {
        return 'five hundred';
    }
    if (number === 600) {
        return 'six hundred';
    }
    if (number === 700) {
        return 'seven hundred';
    }
    if (number === 800) {
        return 'eight hundred';
    }
    if (number === 900) {
        return 'nine hundred';
    }
    if (number < 1000) {
        return units[Math.floor(number / 100)] + " hundred " + (number % 100 > 0 ? toReadable(number % 100) : "");
    }
};
