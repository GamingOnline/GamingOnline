if (document['addEventListener']) {
    document['addEventListener']('DOMContentLoaded', function () {
        loaded()
    })
} else {
    if (document['attachEvent']) {
        document['attachEvent']('onreadystatechange', function () {
            loaded()
        })
    }
};

function loaded() {
    setInterval(loop, 800)
}
var x = 0;
var titleText = [
    'ｗｅｌｃｏｍｅ 😏',
    '𝙤',
    '𝙤_',
    '𝙤_𝙊',
    'ｇ',
    'ｇａ',
    'ｇａｍ',
    'ｇａｍｉ',
    'ｇａｍｉｎ',
    'ｇａｍｉｎｇ',
    '💩',
    'ｇａｍｉｎｇ',
    '💩',
    'ｇａｍｉｎｇ',
    'ｇａｍｉｎ',
    'ｇａｍｉ',
    'ｇａｍ',
    'ｇａ',
    'ｇ'
];

function loop() {
    document['getElementsByTagName']('title')[0]['innerHTML'] = titleText[x++ % titleText['length']]
}