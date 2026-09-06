function createTask(time: number, name: string): Promise<string> {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve(`${name} done`);
    }, time);
    });
    }
    
    async function runTasks() {
    const tasks = [
    createTask(1000, "Task 1"),
    createTask(2000, "Task 2"),
    createTask(3000, "Task 3")
    ];
    
    for await (const result of tasks) {
        console.log(result);
    }
    
    
    }
    
    runTasks();
    
    export {};