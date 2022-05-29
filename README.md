
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
The following code creates a new Logger with a default configuration:
```
var logger = new Logger();
```
By default, the Logger writes to STDOUT.  file path ... (STDOUT?)

To log directly to a file, pass a custom logger configuration when creating a new Logger:
```
var logger = new Logger({
    output: 'development.log'
});
```
This TODO ...
For all configuration params see TODO ...

### Logging

The Logger has 3 different logging levels:
```info, warning, error```.

TODO:Format
TODO:Output

```
logger.info('fetching users');
// out: 
```

## Example 
TODO
```
import {Logger} from 'TODO';

var logger = new Logger({
    output: 'dev.log'
});

TODO
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



