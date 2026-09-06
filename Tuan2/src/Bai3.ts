function rejectPromise():Promise<string>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            reject("Some thing went wrong");
        },1000)
    });
}

rejectPromise().catch((err)=>{
    console.log(err);
})