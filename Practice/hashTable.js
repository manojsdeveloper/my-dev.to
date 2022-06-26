class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for(let i=0;i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if(!this.data[address]) {
            this.data[address] = [];
            this.data[address].push([key, value]);
        }
    }
    get (key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            console.log(currentBucket)
            for(let i=0;i<currentBucket.length;i++) {
                if(currentBucket[i][0] == key) {
                    return currentBucket[i][1];
                }
            }
        } // O(n)
        return undefined;
    }
    keys() {
        if(!this.data.length) {
            return undefined;
        }
        let keyArray = [];
        for(let i=0;i<this.data.length;i++) {
            if(this.data[i] && this.data[i].length) {
                if(this.data.length > 1) {
                    for(let j=0;j<this.data[i].length;j++) {
                        keyArray.push(this.data[i][j][0])
                    }
                } else {
                    keyArray.push(this.data[i][0]);
                }
            }
        }
        return keyArray;
    }
}

const myHashTable = new HashTable(1000);
// console.log(myHashTable._hash('test1'))
myHashTable.set('grapes', 100100)
// console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 9)
// console.log(myHashTable.get('apples'))
console.log(myHashTable.keys());