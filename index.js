function repeat(text, count) {
    var result = '';
    for (var i = 0; i < count; i += 1) {
        result += text;
    }
    return result;
}
function getHiddenCard(card, count) {
    if (count === void 0) { count = 4; }
    return '*'.repeat(count) + card.slice(-4);
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function getEvenNumbers(numberArr) {
    if (numberArr === void 0) { numberArr = numbers; }
    return numberArr.filter(function (item) { return item % 2 === 0; });
}
