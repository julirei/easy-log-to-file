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

export class FsLogWriter implements LogWriter {
    /**
     * The path to the file to which this writer should 
     * write log messages.
     */
    filePath: string;

    private stream: fs.WriteStream;

    constructor(filePath: string) {
        this.filePath = path.normalize(filePath);
        this.stream = fs.createWriteStream(this.filePath); // TODO
        this.stream.write('\n');
    }

    async write(message: string): Promise<void> {
        this.stream.write(message + '\n', (error) => {
            // TODO: Handle error.
        });
    }
}