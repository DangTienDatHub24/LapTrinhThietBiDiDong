class Product{
    name: string;
    price: number;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }
}

const products: Product[] = [
    new Product("Laptop", 500),
    new Product("Chuột", 50),
    new Product("Bàn phím", 120),
    new Product("Tai nghe", 80),
];

const productFilter =   products.filter(product => product.price > 100);

console.log("Products with price > 100");
productFilter.forEach(p => {
    console.log(`${p.name} : ${p.price}`)
})