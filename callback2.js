const lists = require(`./data/lists.json`)

let callback = function(id, cb){
    setTimeout(function () {

    return cb(lists[id]);
    }, 2 * 1000);
}

module.exports={callback}

