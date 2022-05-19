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
// Mir kam heute hiob wieder in den sinn sbahn: es wird alles gut werden ... d amusste ich Gott danken ... es wird alles gut werden
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