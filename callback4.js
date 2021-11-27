const board = require('./callback1.js');
const list = require('./callback2.js');
const card = require('./callback3.js');

let boardFun = function(name){
    setTimeout(() => {
        board.callback(name,function cb(boardValue){
            console.log(boardValue);
            list.callback(boardValue.id, (list)=>{
                let listId;
                console.log(list);
                for (let index = 0 ; index < list.length; index++){ 
                    if (list[index]['name'] =='Mind'){
                        listId = list[index].id;
                        break;
                    }
                }
                card.callback(listId, (cards)=>{
                    console.log(cards);
                    
                });
            })
        
        })
    }, 2 * 1000)
}
        
        
module.exports = {boardFun};