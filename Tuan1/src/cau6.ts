class Book{
    title: string;
    author: string;
    year: number;

    constructor(title:string, author:string, year:number){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    showBookInfo(): void{
        console.log(`Title: ${this.title}`)
        console.log(`Author: ${this.author}`)
        console.log(`Year: ${this.year}`)
    }
}

const book = new Book("Tuyen tap truyen Nguyen Du", "NXB Kim Dong", 2012);

book.showBookInfo()