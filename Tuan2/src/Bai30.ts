async function fetchData(url: string) {
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }
    
    return await response.json();
    
    
    }
    
    async function runBai30() {
    const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/invalid-url"
    ];
    
    const results = await Promise.allSettled(
        urls.map((url) => fetchData(url))
    );
    
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`API ${index + 1}: Success`);
            console.log(result.value);
        } else {
            console.log(`API ${index + 1}: Failed`);
            console.log(result.reason.message);
        }
    });
    
    
    }
    
    runBai30();
    
    export {};