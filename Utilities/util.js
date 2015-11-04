/**
 * Created by Click Lab.
 */

var CONFIG = require('../Config');
//var md5 = require('md5');
var models = require('../models');
var DaoManager = require('../DAO/DaoManager');
//var log4js = require('log4js');
//var logger = log4js.getLogger('[UTIL]');
var Joi = require('joi');
var async = require('async');
//var moment = require('moment');
//require('moment-timezone');
//require('moment-range');

var SUCCESS_MESSAGES = CONFIG.RESPONSE_MESSAGES.SUCCESS_MESSAGES;
var ERROR_MESSAGES = CONFIG.RESPONSE_MESSAGES.ERROR_MESSAGES;
var STATUS_CODE = CONFIG.CONSTANTS.STATUS_CODE;

var failActionFunction = function (request, reply, source, error) {
    if (error.isBoom) {

        delete error.output.payload.validation;
        delete error.output.payload.error;
        delete error.output.payload.statusCode;

        if (error.output.payload.message.indexOf("authorization") !== -1) {
            error.output.statusCode = STATUS_CODE.UNAUTHORIZED;
            // error.output.payload.statusCode = STATUS_CODE.UNAUTHORIZED;
            return reply(error);
        }
        var details = error.data.details[0];
        if (details.message.indexOf("pattern") > -1 && details.message.indexOf("required") > -1 && details.message.indexOf("fails") > -1) {
            error.output.payload.message = "Invalid " + details.path;
            return reply(error);
        }
    }
    var customErrorMessage = '';
    if (error.output.payload.message.indexOf("[") > -1) {
        customErrorMessage = error.output.payload.message.substr(error.output.payload.message.indexOf("["));
    } else {
        customErrorMessage = error.output.payload.message;
    }
    customErrorMessage = customErrorMessage.replace(/"/g, '');
    customErrorMessage = customErrorMessage.replace('[', '');
    customErrorMessage = customErrorMessage.replace(']', '');
    error.output.payload.message = customErrorMessage;
    delete error.output.payload.validation;
    delete error.output.payload.error;
    delete error.output.payload.statusCode;
    return reply(error);
};
var createErrorResponse = function (message, statusCode, error) {
    try {
        if (error) {
            if (error.hasOwnProperty('statusCode') && error.hasOwnProperty('response'))
                return error;

            if (typeof error === 'object') {
                if (error.name === 'MongoError') {
                    if (error.code === 11000) {
                        if (error.message.indexOf("phoneNumber") != -1) {
                            message = ERROR_MESSAGES.PHONE_NUMBER_ALREADY_EXISTS;
                        } else if (error.message.indexOf("email") != -1) {
                            message = ERROR_MESSAGES.EMAIL_ALREADY_EXISTS;
                        } else {
                            message = ERROR_MESSAGES.DUPLICATE_ENTRY;
                        }
                        statusCode = STATUS_CODE.ALREADY_EXISTS_CONFLICT;
                    }
                } else if (error.name === 'CastError' && error.kind === 'ObjectId') {
                    message = ERROR_MESSAGES.INVALID_ID;
                }
            }
        }
    } catch (e) {
        logger.trace(e);
        return {
            response: {
                message: message || ERROR_MESSAGES.SOMETHING_WRONG,
                data: null
            },
            statusCode: statusCode || STATUS_CODE.BAD_REQUEST
        };
    }
    return {
        response: {
            message: message || ERROR_MESSAGES.SOMETHING_WRONG,
            data: null
        },
        statusCode: statusCode || STATUS_CODE.BAD_REQUEST
    };

};
var createSuccessResponse = function (message, statusCode, data) {
    return {
        response: {
            message: message || SUCCESS_MESSAGES.ACTION_COMPLETE,
            data: data || null
        },
        statusCode: statusCode || STATUS_CODE.OK
    };
};
module.exports = {
    failActionFunction: failActionFunction,
    createSuccessResponse: createSuccessResponse,
    createErrorResponse: createErrorResponse,

};
