// Your code here
class Cat{
    constructor(name,sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {return `${this.name} says meow!`}
}

class Dog{
    constructor(name,sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {return `${this.name} says woof!`}
}

class Bird{
    constructor(name,sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        if(this.sex==='male') {
            return `It\'s me!${this.name}, the Parrot!`
        } else {
        return `${this.name} says squawk!`}}
}

const softie = new Cat ('softie', 'female')
const barkie = new Dog('barkie', 'male')
const mosley = new Bird('mosley', 'female')
const weasley = new Bird('weasley', 'male')