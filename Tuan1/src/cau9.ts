interface Animal{
    name: string;
    sound(): void;
}

const dog: Animal = {
    name: "Ben",

    sound(): void{
        console.log("Gaau gaau");
    }
};

console.log(`Animal: ${dog.name}`);
dog.sound();