// *****************************************************************************
// * Changelog										
// * All notable changes to this project will be documented in this file.	
// *****************************************************************************
// *
// * Author             : Akash Singh
// *
// * Date created       : 19/01/2021
// *
// * Purpose            : NLP Node Layer Logger
// *
// * Revision History	:
// *
// * Date			      Author			    Jira			        Functionality 
// * 27/01/2021   Akash Singh      EC-694       Property Reader for Logger
// *****************************************************************************

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