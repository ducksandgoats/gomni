class Gomni {
    constructor(){}
    iden(){
        return Date.now() + Math.random().toString(36).substring(2)
    }
    toData(data){
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