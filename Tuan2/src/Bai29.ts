function processTask(name: string): Promise<string> {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve(`${name} completed`);
    }, 1000);
    });
    }
    
    async function queueProcess() {
    const tasks = [
    "Task 1",
    "Task 2",
    "Task 3",
    "Task 4",
    "Task 5"
    ];
    
    for (const task of tasks) {
        const result = await processTask(task);
        console.log(result);
    }
    
    
    }
    
    queueProcess();
    
    export {};