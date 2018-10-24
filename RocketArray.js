'use strict';
class Rarray {
    constructor(array){
        if(typeof array === 'object'){
            this.array = array;
        }
    }

    recurrent(nbr = 1){
        let tmp = {};
        this.array.map(x => {
            if(typeof x !== 'object'){
                x = x.toString();
                tmp[x] === undefined ? tmp[x] = 1 : tmp[x]++
            }
        });

        const thekeys = Object.keys(tmp);
        
        if(nbr >= thekeys.length)
            nbr = thekeys.length - 1;
            
        let re = [];

        let best = {number: 0, name: ''};

        for(let i = 0; i < nbr; i++){
            thekeys.map(x=> {
                if(tmp[x] > best.number){
                    best.number = tmp[x];
                    best.name = x;
                }
            });
            re.push(best);

            delete tmp[best.name];
            best = {number: 0, name: ''};
        }

        return re;
    }

    only(type = "string"){
        return this.array.filter(data => typeof data === type);
    }

    removeRecurrents(){
        const rec = this.recurrent(this.array.length - 1);
        rec.map((x, i) => {
            if(x.number !== 1){
                for(let n = 0; n <= x.number - 2; n++){
                    this.array.splice(this.array.indexOf(x.name), 1);
                }
            }
        })

        return this.array;
    }

    get(){
        return this.array;
    }
}

module.exports = Rarray;