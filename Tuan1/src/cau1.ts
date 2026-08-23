// Cau 1

export class Person{
    name: string;
    age: number;

    constructor (name:string, age: number){
        this.name =  name;  
        this.age = age;
    }

    displayInfo(): void{
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

// const  person = new Person("Dat",21);
// person.displayInfo();

