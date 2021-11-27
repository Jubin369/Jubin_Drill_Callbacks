const boards = require(`${__dirname}/data/boards.json`)

let callback = function(id, cb){
    let result;
    setTimeout(function () {
        for (let index = 0;index < boards.length; index++){
            for (let boardsKey in boards[index]){
                if (boards[index][boardsKey] === id){
                    result = boards[index];
                }
            }
        }
    return cb(result);
    }, 2 * 1000);
}

module.exports={callback}

