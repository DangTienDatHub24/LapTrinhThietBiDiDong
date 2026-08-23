export class User{
    private name: string;

    constructor(name: string){
        this.name = name;
    }

    getName(): string{
        return this.name;
    }

    setName(name: string): void{
        this.name = name;
    }
}

const user = new User("Dat");
console.log(`Name: ${user.getName()}`);
user.setName("Dang Tien Dat");
console.log(`Name: ${user.getName()}`);