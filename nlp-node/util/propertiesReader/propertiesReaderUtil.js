
// IMPORTS
const propertiesReader = require("properties-reader");
const properties = propertiesReader(process.argv[2]);

// EXPORT MODULE
module.exports = properties;
