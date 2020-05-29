if (document['addEventListener']) {
    document['addEventListener']('DOMContentLoaded', function() {
        loaded()
    })
} else {
    if (document['attachEvent']) {
        document['attachEvent']('onreadystatechange', function() {
            loaded()
        })
    }
};

function loaded() {
    setInterval(loop, 700)
}
var x = 0;
var titleText = [
    'welcome >:D',
    'o',
    'o_',
    'o_O',
    'g',
    'ga',
    'gam',
    'gami',
    'gamin',
    'gaming',
    '</>',
    'gaming',
    '</>',
    'gaming',
    'gamin',
    'gami',
    'gam',
    'ga',
    'g'
];

function loop() {
    document['getElementsByTagName']('title')[0]['innerHTML'] = titleText[x++ % titleText['length']]
}