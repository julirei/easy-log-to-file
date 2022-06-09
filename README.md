
# easy-log-to-file

Add simple logging to your Node application to quickly log to file.

![Logo](logo.png)

## Motivation

This package adds hassle-free logging to your application. It is ideal for smaller projects where you need a logger that does just that - log messages to files. Don´t spend your time configuring a logger. Just install the package, create a logger, and log.

## Install
```
$ npm install easy-log-to-file
```

## Usage

### Creating a Logger
The following code creates a new `Logger` with a default configuration that writes log messages to STDOUT:
```
var logger = new Logger();
logger.info('hello to STDOUT');
//=> writes a log message to STDOUT
```

To log directly to a file, pass a custom logger configuration when creating a new `Logger`:
```
var logger = new Logger({
    output: 'development.log'
});
logger.info('hello to file');
//=> writes a log message to development.log
```
New log messages are appended to the file.
Currently, there is no strategy or policy for handling large log files. 

### Logging

The Logger has 3 different logging levels:
```info, warning, error```.
This is how log messages are formatted:
- info: `. <${datetime}> [INF] ${message}` 
- warning: `* <${datetime}> [WRN] ${message}` 
- error: `! <${datetime}> [ERR] ${message}` 

```
logger.info('fetching users');
//=> . <datetime> [INF] fetching users

logger.warning('there are no users to fetch');
//=> * <datetime> [WRN] there are no users to fetch

logger.error('users could not be fetched');
//=> ! <datetime> [ERR] users could not be fetched
```

## Example 

```
import {Logger} from 'easy-log-to-file';

var logger = new Logger({
    output: 'dev.log'
});

logger.info('fetching users ...');
try {
    await fetchUsers();
    logger.info('fetched users');
} catch(err) {
    logger.error('failed to fetch users');
}
```

## Authors

- [@julirei](https://github.com/julirei)
- [@eliasburgstaller](https://github.com/eliasburgstaller)

## Contributing
You are gladly welcomed to contribute to this package to improve it. 

See the [CONTRIBUTING.md](https://github.com/julirei/easy-log-to-file/blob/main/CONTRIBUTING.md) file for more details.

## Support

For support, email easylogtofile@gmail.com.

## Acknowledgements
[Log icons created by juicy_fish - Flaticon](https://www.flaticon.com/free-icons/log) 

 ## License
 Licensed under [MIT](https://github.com/julirei/easy-log-to-file/blob/main/LICENSE).



