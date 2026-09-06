function simulateTask(time: number, name: string): Promise<string> {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve(`${name} done`);
    }, time);
    });
    }
    
    async function runTasks() {
    const results = await Promise.all([
    simulateTask(1000, "Task 1"),
    simulateTask(2000, "Task 2"),
    simulateTask(3000, "Task 3")
    ]);
    
    console.log(results);
    
    
    }
    
    runTasks();
    
    export {};