function simulateTask(time: number, name: string): Promise<string> {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve(`${name} done`);
    }, time);
    });
    }
    
    async function batchProcess() {
    const results = await Promise.all([
    simulateTask(1000, "Task 1"),
    simulateTask(2000, "Task 2"),
    simulateTask(1500, "Task 3"),
    simulateTask(1000, "Task 4"),
    simulateTask(2500, "Task 5")
    ]);
    
    console.log(results);
    
    
    }
    
    batchProcess();
    
    export {};