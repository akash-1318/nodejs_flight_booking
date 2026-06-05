const {createLogger, format, transports} = require('winston');
const {combine, timestamp, printf, label} = format;

const logFormat = printf(({level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
    format: combine(
        label({label: 'flight-booking-app'}),
        timestamp(),
        logFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: 'app.log'})
    ]
});

module.exports = logger;