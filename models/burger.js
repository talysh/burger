const orm = require("../config/orm");

var burgers = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (burger, cb) {
        orm.insertOne(burger, function (res) {
            cb(res);
        });
    },
    update: function (burgerId, cb) {
        orm.updateOne(burgerId, function (res) {
            cb(res);
        });
    },
    delete: function (burgerId, cb) {
        orm.deleteOne(burgerId, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;