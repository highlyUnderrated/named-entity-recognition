
// IMPORTS
const axios = require("axios");
const path = require('path');
// UTILITIES
const logger = require("../../util/logger/loggerUtil");
const properties = require("../../util/propertiesReader/propertiesReaderUtil");
const { errorResponse, successResponse } = require("../../util/response/responseUtil");
// ROUTER INITIALIZATION
const router = require("express").Router();
// URLS
const englishNLPUrl = properties.get("EngNLPUrl");
const englishTestUrl = properties.get("EngTestUrl");
const koreanNLPUrl = properties.get("KorNLPUrl");
const koreanTestUrl = properties.get("KorTestUrl");

// English NLP API
router.post('/en', async (request, response) => {
    //HANDLE BAD REQUEST
    if (!request.body.messages) {
        logger.error("Bad Request, Messages Not Found - English ");
        return response.status(400).json(errorResponse("Messages Not Found"));
    }
    var englishNLPData = { "messages" : request.body.messages }
    await axios({
        method: 'post',
        url: englishNLPUrl,
        data: englishNLPData,
        })
        .then((res) => {
            //HANDLE SUCCESS
            logger.info("Returned Response - English");
            return response.status(200).json(successResponse("Performed Extraction Successfully",res.data));
        })
        .catch((err) => {
            //HANDLE INTERNAL SERVER ERROR
            logger.error("Internal Server Error - English " + err);
            return response.status(500).json(errorResponse("Internal Server Error"));
        });
})

// English NLP TEST API
router.post('/test/en', async (request, response) => {
    //HANDLE BAD REQUEST
    if (!request.body.messages) {
        logger.error("Bad Request, Messages Not Found - English ");
        return response.status(400).json(errorResponse("Messages Not Found"));
    }
    var englishTestData = { "messages" : request.body.messages }
    await axios({
        method: 'post',
        url: englishTestUrl,
        data: englishTestData,
        })
        .then((res) => {
            //HANDLE SUCCESS
            logger.info("Returned Response - English");
            return response.status(200).json(successResponse("Performed Extraction Successfully",res.data));
        })
        .catch((err) => {
            //HANDLE INTERNAL SERVER ERROR
            logger.error("Internal Server Error - English " + err);
            return response.status(500).json(errorResponse("Internal Server Error"));
        });
})

// Korean NLP API
router.post('/ko', async (request, response) => {
    //HANDLE BAD REQUEST
    if (!request.body.messages) {
        logger.error("Bad Request, Messages Not Found - Korean ");
        return response.status(400).json(errorResponse("Messages Not Found"));
    }
    var koreanNLPData = { "messages" : request.body.messages }
    await axios({
        method: 'post',
        url: koreanNLPUrl,
        data: koreanNLPData,
        })
        .then((res) => {
            //HANDLE SUCCESS
            logger.info("Returned Response - Korean");
            return response.status(200).json(successResponse("Performed Extraction Successfully",res.data));
        })
        .catch((err) => {
            //HANDLE INTERNAL SERVER ERROR
            logger.error("Internal Server Error - Korean " + err);
            return response.status(500).json(errorResponse("Internal Server Error"));
        });
})

// Korean NLP TEST API
router.post('/test/ko', async (request, response) => {
    //HANDLE BAD REQUEST
    if (!request.body.messages) {
        logger.error("Bad Request, Messages Not Found - Korean ");
        return response.status(400).json(errorResponse("Messages Not Found"));
    }
    var koreanTestData = { "messages" : request.body.messages }
    await axios({
        method: 'post',
        url: koreanTestUrl,
        data: koreanTestData,
        })
        .then((res) => {
            //HANDLE SUCCESS
            logger.info("Returned Response - Korean");
            return response.status(200).json(successResponse("Performed Extraction Successfully",res.data));
        })
        .catch((err) => {
            //HANDLE INTERNAL SERVER ERROR
            logger.error("Internal Server Error - Korean " + err);
            return response.status(500).json(errorResponse("Internal Server Error"));
        });
})

// Korean NLP PRECISION API
router.get('/precision/ko', async (request,response) => {
    return response.status(200)
    .sendFile(path.join(__dirname, '../../resource', 'precision.txt'));
})

// EXPORT MODULE
module.exports = router;