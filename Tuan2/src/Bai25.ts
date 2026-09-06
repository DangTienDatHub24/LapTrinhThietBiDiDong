function downloadFile(): Promise<void> {
    return new Promise((resolve) => {
    setTimeout(() => {
    console.log("Download done");
    resolve();
    }, 3000);
    });
    }
    
    downloadFile();
    
    export {};