class Logger {
    private static instance: Logger;

    private constructor() {}

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(message: string): void {
        console.log(message);
    }
}

const logger = Logger.getInstance();

logger.log("Hello World!");
logger.log("This is a singleton logger.");