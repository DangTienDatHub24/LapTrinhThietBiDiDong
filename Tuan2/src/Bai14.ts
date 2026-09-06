function waitOneSecond(): Promise<void> {
    return new Promise((resolve) => {
    setTimeout(resolve, 1000);
    });
    }
    
    async function multiplyByThree(number: number): Promise<number> {
    await waitOneSecond();
    return number * 3;
    }
    
    multiplyByThree(5).then((result) => {
    console.log(result);
    });
    
    export {};