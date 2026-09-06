function waitFiveSeconds(): Promise<void> {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve();
    }, 5000);
    });
    }
    
    async function runBai26() {
    console.log("Start waiting...");
    
    await waitFiveSeconds();
    
    console.log("5 seconds done!");
    
    
    }
    
    runBai26();
    
    export {};