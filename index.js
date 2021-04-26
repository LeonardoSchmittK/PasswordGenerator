var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var Password = /** @class */ (function () {
    function Password() {
    }
    Password.prototype.generate = function (size, extra, place) {
        try {
            var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
            var upLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            var lowLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            var possibleDigits = __spreadArray(__spreadArray(__spreadArray([], __read(upLetters)), __read(lowLetters)), __read(numbers));
            var shuffleDigits = function (digits) {
                var password = [];
                for (var i = digits.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = digits[i];
                    digits[i] = digits[j];
                    digits[j] = temp;
                    password.push(digits[i]);
                }
                if (extra && extra.length > size)
                    throw extra + " has " + extra.length + " letters and it's bigger than " + size;
                !place && (place = 'beginning');
                place === 'middle' && size++;
                password.length = extra ? size - extra.length : size;
                var middle = Math.floor((password.length - 1) / 2);
                ;
                place === 'beginning' ? password.unshift(extra) : place === 'middle' ? password[middle] = extra : password.push(extra);
                return password.join('');
            };
            return shuffleDigits(possibleDigits);
        }
        catch (err) {
            return new Error(err);
        }
    };
    return Password;
}());
var myPassword = new Password().generate(10, 'Leo', 'beginning');
var mySecondPassword = new Password().generate(10);
var myThirdPassword = new Password().generate(5, 'T');
