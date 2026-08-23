import { Person } from "./cau1";

class Student extends Person {
    grade: number;

    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }

    displayAllInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
    }
}

const student = new Student("Dang Tien Dat", 20, 8.5);

student.displayAllInfo();