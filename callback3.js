const cards = require(`./data/cards.json`)

let callback = function(id, cb){
    setTimeout(function () {

    return cb(cards[id]);
    }, 2 * 1000);
}

module.exports={callback}

