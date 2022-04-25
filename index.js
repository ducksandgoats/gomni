class Gomni {
    constructor(opts = {}){
        this.id = opts.id ? opts.id : 'id'
    }
    iden(){
        return Date.now() + '-' + Math.random().toString(36).substring(2)
    }
    toProp(data){
        return {[this.iden()]: data}
    }
    toStamp(iden){
        return iden.substring(iden.indexOf('-'), 0)
    }
    toData(data){
        data[this.id] = this.iden()
        return data
    }
    toBoth(data){
        data[this.id] = this.iden()
        return {[this.iden()]: data}
    }
    arrToObj(arr){
        return arr.reduce((acc, item) => {return {...acc, [item.id]: item}}, {})
    }      
    objToArr(indexedObj){
        return Object.values(indexedObj);
    }
}

module.exports = Gomni