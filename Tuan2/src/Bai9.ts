function getEvenNumber():Promise<number[]>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            const numbers = [1,2,3,4,5,6,7,8,9,10];
            const evenNumber = numbers.filter((num) => {
                return num % 2 === 0;
            });
            resolve(evenNumber);
        },1000);
    })
}

getEvenNumber().then((result) =>{
    console.log(result);
    
})