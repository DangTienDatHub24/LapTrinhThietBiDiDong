class Employee{
    name: string;
    salary: number;

    constructor(name: string, salary: number){
        this.name = name;
        this.salary = salary;
    }

    showInfo(): void{
        console.log(`Name: ${this.name}`);
        console.log(`Salary: ${this.salary}`);
    }
}

class Manager extends Employee{
    manageTeam(): void{
        console.log(`${this.name} is manager`)
    }
}

class Developer extends Employee{
    dev(): void{
        console.log(`${this.name} is coding`);
    }
}

const e1 = new Manager("Dat", 10000);
const e2 = new Developer("Tien", 5000);
e1.showInfo();
e1.manageTeam();
e2.showInfo();
e2.dev();