module.exports = function toReadable (number) {
    const numb = ["zero","one","two","three","four","five","six","seven","eight","nine",];
    const numbtens = ["ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety",];
    const tens = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen",];

    if (number >= 0 && number < 10) {
        return numb[number];
    } else if (number >= 10 && number < 20) {
        return tens[number % 10];
    } else if (number >= 20 && number < 100) {
        if (number % 10 == 0) {
            return numbtens[number / 10 - 1];
        }
        let a = number / 10;
        return numbtens[Math.floor(a - 1)] + " " + numb[number % 10];
    } else if (number >= 100 && number < 1000) {
        let b = number % 100;
        if (number % 100 == 0) {
            return numb[Math.floor(number / 100)] + " hundred";
        } else if (number % 10 == 0) {
            return (
                numb[Math.floor(number / 100)] +
                " hundred " +
                numbtens[Math.floor(b / 10 - 1)]
            );
        } else if (number % 100 > 0 && number % 100 < 10) {
            return (
                numb[Math.floor(number / 100)] + " hundred " + numb[number % 100]
            );
        } else if (number % 100 >= 10 && number % 100 < 20) {
            return (
                numb[Math.floor(number / 100)] +
                " hundred " +
                tens[(number % 100) % 10]
            );
        } else {
            return (
                numb[Math.floor(number / 100)] +
                " " +
                "hundred" +
                " " +
                numbtens[Math.floor(b / 10 - 1)] +
                " " +
                numb[number % 10]
            );
        }
    }
}
