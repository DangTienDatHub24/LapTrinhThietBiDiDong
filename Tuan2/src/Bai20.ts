async function fetchUser(id: number): Promise<{ id: number; name: string }> {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve({
    id: id,
    name: `User ${id}`
    });
    }, 3000);
    });
    }
    
    async function fetchUserWithTimeout(id: number) {
    const timeout = new Promise<never>((_, reject) => {
    setTimeout(() => {
    reject(new Error("API call timed out"));
    }, 2000);
    });
    
    return Promise.race([
        fetchUser(id),
        timeout
    ]);
    
    
    }
    
    async function runBai20() {
    try {
    const user = await fetchUserWithTimeout(1);
    console.log(user);
    } catch (error) {
    console.log("Error:", error);
    }
    }
    
    runBai20();
    
    export {};