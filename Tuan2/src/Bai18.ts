async function fetchUser(id: number): Promise<{ id: number; name: string }> {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve({
    id: id,
    name: `User ${id}`
    });
    }, 1000);
    });
    }
    
    async function runBai18() {
    const user = await fetchUser(1);
    console.log(user);
    }
    
    runBai18();
    
    export {};