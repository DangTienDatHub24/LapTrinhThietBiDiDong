async function fetchWithRetry(url: string, retries: number) {
    for (let attempt = 1; attempt <= retries; attempt++) {
    try {
    const response = await fetch(url);
    
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
    
            const data = await response.json();
    
            return data;
        } catch (error) {
            console.log(`Attempt ${attempt} failed`);
    
            if (attempt === retries) {
                throw error;
            }
        }
    }
    
    
    }
    
    async function runBai27() {
    try {
    const result = await fetchWithRetry(
    "https://jsonplaceholder.typicode.com/todos/1",
    3
    );
    
        console.log(result);
    } catch (error) {
        console.log("All attempts failed:", error);
    }
    
    
    }
    
    runBai27();
    
    export {};