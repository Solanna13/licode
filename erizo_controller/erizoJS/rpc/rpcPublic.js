var roomController = require('./../roomController');
var logger = require('./../../common/logger').logger;

/*
 * This function is called remotely from Erizo Controller.
 */

// Here we extend RoomController API with functions to manage ErizoJS.
var controller = roomController.RoomController();

exports = controller;

exports.keepAlive = function(callback) {
    logger.info("KeepAlive from ErizoController");
    callback('callback', true);
};