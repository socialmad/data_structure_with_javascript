class Player{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log('Hi I\'m ' + this.name + ' and I\'m ' + this.age + ' old.');
    }
}

const player = new Player('Sarfaraj',23);
player.introduce();
