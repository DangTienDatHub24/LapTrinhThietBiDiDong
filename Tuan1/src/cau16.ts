class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const numberBox = new Box<number>(100);
const stringBox = new Box<string>("Hello");
const booleanBox = new Box<boolean>(true);

console.log(`Number: ${numberBox.getValue()}`);
console.log(`String: ${stringBox.getValue()}`);
console.log(`Boolean: ${booleanBox.getValue()}`);