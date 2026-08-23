interface Flyable{
    fly(): void;
}

interface Swimmable{
    swim(): void;
}

class Bird implements Flyable{
    fly(): void {
        console.log("Chim đang bay ");
    }
}

class Fish implements Swimmable{
    swim(): void {
        console.log("Cas ddang boiw");
    }
}

const bird = new Bird();
const fish = new Fish();

bird.fly();
fish.swim();