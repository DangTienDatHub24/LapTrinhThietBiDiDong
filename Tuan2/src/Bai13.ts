function failTask(): Promise<string> {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    reject("Something went wrong");
    }, 1000);
    });
    }
    
    async function handleError() {
    try {
    const result = await failTask();
    console.log(result);
    } catch (error) {
    console.log("Error:", error);
    }
    }
    
    handleError();

export{};