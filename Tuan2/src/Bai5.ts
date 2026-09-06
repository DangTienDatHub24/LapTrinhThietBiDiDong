function similateTask(time: number): Promise<string>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Task done")
        }, time);
    })
}

similateTask(2000).then((result) =>{
    console.log(result);
})