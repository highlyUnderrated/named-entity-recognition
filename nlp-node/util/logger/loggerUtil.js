
// IMPORTS
const { createLogger, transports, format } = require("winston");
const properties = require("../propertiesReader/propertiesReaderUtil");

/**
 * Initilize logger
 */
const logger = createLogger({
  format: format.combine(
    format.timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.File({
      filename: properties.get("LOG_FILEPATH"),
      json: false,
      maxsize: 5242880,
      maxFiles: 5,
    }),
    new transports.Console(),
  ]
});

// EXPORT MODULE
module.exports = logger;