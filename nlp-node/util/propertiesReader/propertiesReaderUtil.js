// **********************************************************************
// * Changelog										
// * All notable changes to this project will be documented in this file.	
// **********************************************************************
// *
// * Author             : Akash Singh
// *
// * Date created       : 27/01/2021
// *
// * Purpose            : Propert Reader utilities
// *
// * Revision History	:
// *
// * Date			Author			Jira			Functionality 
// * 
// **********************************************************************

// IMPORTS
const propertiesReader = require("properties-reader");
const properties = propertiesReader(process.argv[2]);

// EXPORT MODULE
module.exports = properties;
