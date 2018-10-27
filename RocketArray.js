'use strict';
class Rarray {
    constructor(array){
        let tmp = Object.assign([], array);
        if(typeof tmp === 'object'){
            this.array = tmp;
        } else {
            throw new Error("That's not a array");
        }
    }

    search(array, string, params, valueIfNotObject = false, del = false) {
        let tmp = [];
        array.forEach((x) => {
            typeof x === "object" ? (this.subSearch(x, string, params, del) ? tmp.push(x) : false) : valueIfNotObject ? tmp.push(x) : false
        });
        return tmp;
    }
    
    subSearch(json, string, params, del = false){
        if(!/\./.test(string)) {
            let end = true;
            
            if(params.regex && end)
                end = params.regex.test(json[string]);

            if(params.morethan && end)
                end = json[string] > params.morethan;

            if(params.lessthan && end)
                end = json[string] < params.lessthan;

            if(params.type && end)
                end = typeof json[string] === params.type;

            return del ? !end : end;
        } else {
            let spl = string.split(/\./g);
            return this.subSearch(json[spl[0]], spl.slice(1).join('.'), params, del);
        }
    }

    import(data){
        let decode = "";
        if(typeof string === "string")
            decode = JSON.parse(data);
        else
            throw new Error("The param must be a string")
        
        this.array = decode;
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

    add(value){
        this.array.push(value);

        return this.array;
    }

    addBefore(value){
        this.array.unshift(value);

        return this.array;
    }

    remove(i = 0, number = 1){
        this.array.splice(i, number);

        return this.array;
    }
    
    length(human = true){
        return human ? this.array.length : this.array.length - 1;
    }

    edit(array){
        if(typeof array === "object"){
            this.array = Object.assign([], array);
            return true;
        } else {
            return false;
        }
    }

    find(params){
        let tmp = this.array;
        if(params.regex)
            tmp = tmp.filter(x => params.regex.test(x))

        if(params.morethan)
            tmp = tmp.filter((x, i) => {
                if(typeof x !== "object"){
                    if(!isNaN(x)){
                        return Number(x) > params.morethan;
                    } else {
                        return false;
                    }
                } else {
                    return true
                }
            })

        if(params.lessthan)
            tmp = tmp.filter((x, i) => {
                if(typeof tmp[i] !== "object"){
                    if(!isNaN(x)){
                        return Number(x) < params.lessthan;
                    } else {
                        return false;
                    }
                } else {
                    return true
                }
            })

        if(params.type)
            tmp = tmp.filter(x => typeof x === params.type)

        return tmp;
    }

    findJSON(params){
        return this.search(this.array, params.where, params, false);
    }

    findAndRemove(params){
        let tmp = this.array;

        if(params.regex)
            tmp = tmp.filter((x, i) => typeof x === "object" ? true : !params.regex.test(x))
            
        if(params.morethan)
            tmp = tmp.filter((x, i) => {
                if(typeof x !== "object"){
                    if(!isNaN(x)){
                        return !(Number(x) > params.morethan);
                    } else {
                        return true;
                    }
                } else {
                    return true
                }
            })

        if(params.lessthan)
            tmp = tmp.filter((x, i) => {
                if(typeof tmp[i] !== "object"){
                    if(!isNaN(x)){
                        return !(Number(x) < params.lessthan);
                    } else {
                        return true;
                    }
                } else {
                    return true
                }
            })

        if(params.type)
            tmp = tmp.filter((x, i) => !(typeof x === params.type))

        this.array = tmp;
        return tmp;
    }

    findAndRemoveInJSON(params){
        this.array = this.search(this.array, params.where, params, true, true);
        return this.array;
    }

    mufindJSON(params){
        let tmp = Object.assign([], this.array);

        params.forEach(x => {
            tmp = this.search(tmp, x.where, x, false);
        });
        
        return tmp;
    }

    mufindAndRemoveInJSON(params){
        let tmp = Object.assign([], this.array);

        params.forEach(x => {
            tmp = this.search(tmp, x.where, x, true, true);
        });
        
        this.array = tmp;
        return tmp;
    }

    text(){
        return JSON.stringify(this.array);
    }
}

module.exports = Rarray;