async function fetchTodo(id: number) {
    const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    
    const data = await response.json();
    
    console.log(data);
    
    
    }
    
    async function runBai22() {
    await fetchTodo(1);
    await fetchTodo(2);
    await fetchTodo(3);
    }
    
    runBai22();
    
    export {};
