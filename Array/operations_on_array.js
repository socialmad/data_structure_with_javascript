class MyArray{
    constructor(length, data) {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push (item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop () {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const deletedItem = this.data[index];
        this.shiftItems(index);
        this.length--;
        return deletedItem;
    }

    shiftItems(index) {
        for(var i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
    }


}

const myArray = new MyArray();
myArray.push('Sarfaraj');
myArray.push('!');
myArray.push('&');
myArray.push('Shahista');
myArray.delete(1);

console.log(myArray);