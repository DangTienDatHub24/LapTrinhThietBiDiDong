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
    
    async function fetchUsers(ids: number[]) {
    const users = await Promise.all(
    ids.map((id) => fetchUser(id))
    );
    
    return users;
    
    
    }
    
    async function runBai19() {
    const users = await fetchUsers([1, 2, 3]);
    console.log(users);
    }
    
    runBai19();
    
    export {};