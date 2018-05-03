'use strict';

const Default = model('Default');

class DefaultHelper {
    default(params, callback) {
        Default.find(params, function (err, result) {
            if (err) return callback(err);
            callback(err, result);
        });
    }
}

module.exports = new DefaultHelper();