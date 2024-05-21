class Person {
    constructor() {
        this.image = new Image();
    }

    randPerson() {
        const randNum = Math.floor(Math.random() * 6) + 1;
        this.image.src = `person${randNum}.png`;
    }
}
const person = new Person();
person.randPerson();
