// **********************************************************************
// * Changelog										
// * All notable changes to this project will be documented in this file.	
// **********************************************************************
// *
// * Author             : Akash Singh
// *
// * Date created       : 25/01/2021
// *
// * Purpose            : API Response Function
// *
// * Revision History	:
// *
// * Date			Author			Jira			Functionality 
// * 
// **********************************************************************

// ERROR RESPONSE FUNCTION
function errorResponse(message) {
    return { "status": "error", "message": message };
}

// SUCCESS RESPONSE FUNCTION
function successResponse(message, data) {
    return { "status": "success", "message": message, "data": data };
}

// EXPORT MODULE
module.exports = {
    errorResponse,
    successResponse
};
