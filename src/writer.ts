import * as fs from 'fs';
import * as path from 'path';

/**
 * Writes log messages to an output medium.
 */
 export interface LogWriter {
     /**
      * Writes a new line.  
      * @param message 
      */
    write(message: string): Promise<void>;
}

export class StdoutLogWriter implements LogWriter {
    async write(message: string): Promise<void> {
        process.stdout.write(message);
    }
}

export class FsLogWriter implements LogWriter {
    /**
     * The path to the file to which this writer should 
     * write log messages.
     */
    filePath: string;

    private stream: fs.WriteStream;

    constructor(filePath: string) {
        this.filePath = path.normalize(filePath);
        this.stream = fs.createWriteStream(this.filePath, {
            flags: 'a', 
            encoding: 'utf8'
        });
        this.stream.write('\n');
    }

    async write(message: string): Promise<void> {
        this.stream.write(message + '\n', (error) => {
            console.error(error);
        });
    }
}