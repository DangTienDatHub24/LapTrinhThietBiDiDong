function doTask(): Promise<string> {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve("Task success");
    }, 1000);
    });
    }
    
    doTask()
    .then((result) => {
    console.log(result);
    })
    .catch((error) => {
    console.log(error);
    })
    .finally(() => {
    console.log("Done");
    });