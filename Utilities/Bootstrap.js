'use strict';
/**
 * Created by harekam on 04/09/15.
 */
var mongoose = require('mongoose');
var async = require('async');
var DAO = require('../DAO');
var Config = require('../Config');
var util = require('../Utilities/util');
var log4js = require('log4js');
var logger = log4js.getLogger('[BOOTSTRAP]');

exports.bootstrapAdmin = function (callbackParent) {
    var taskToRunInParallel = [];

    var adminData = [
        {
            email: 'harekamsingh@gmail.com',
            password: util.cryptData("123456"),
            phoneNumber: "7503040410",
            fullName: 'Harekam Singh',
            userType: Config.CONSTANTS.USER_TYPE.ADMIN,
            createdAt: util.getTimestamp()
        },
        {
            email: 'testadmin@gmail.com',
            password: util.cryptData("123456"),
            phoneNumber: "1234567890",
            fullName: 'Test Admin',
            userType: Config.CONSTANTS.USER_TYPE.ADMIN,
            createdAt: util.getTimestamp()
        },
        {
            email: 'data@gmail.com',
            password: util.cryptData("123456"),
            phoneNumber: "9087654390",
            fullName: 'Data',
            userType: Config.CONSTANTS.USER_TYPE.ADMIN,
            createdAt: util.getTimestamp()
        },
        {
            email: 'test@clicklabs.in',
            password: util.cryptData("123456"),
            phoneNumber: "1234567899",
            fullName: 'Test',
            userType: Config.CONSTANTS.USER_TYPE.ADMIN,
            createdAt: util.getTimestamp()
        }
    ];

    adminData.forEach(function (dataObj) {
        taskToRunInParallel.push((function (dataObj) {
            return function (embeddedCB) {
                insertData(dataObj, embeddedCB);
            }
        })(dataObj));
    });
    async.parallel(taskToRunInParallel, function (error) {
        if (error)
            return callbackParent(error);
        return callbackParent(null);
    });
};

function insertData(adminData, callbackParent) {
    DAO.adminDAO.setAdmin(adminData, function (error, ignore) {
        if (error)
            logger.error("Bootstrapping error for " + adminData.phoneNumber);
        else
            logger.warn('Bootstrapping finished for ' + adminData.phoneNumber);
        return callbackParent(null);
    });
}