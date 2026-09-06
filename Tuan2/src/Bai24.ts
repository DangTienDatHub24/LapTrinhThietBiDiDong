async function postData() {
    const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({
    title: "Hello",
    body: "Test data",
    userId: 1
    })
    }
    );
    
    const data = await response.json();
    
    console.log(data);
    
    
    }
    
    postData();
    
    export {};