const boards = require(`${__dirname}/data/boards.json`)

let callback = function(id, cb){
    let result;
    setTimeout(function () {
        for (let index = 0;index < boards.length; index++){
            if (boards[index]['id'] === id){
                result = boards[index];
            }
        }
    return cb(result);
    }, 2 * 1000);
}

module.exports={callback}

