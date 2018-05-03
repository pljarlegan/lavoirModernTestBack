'use strict';

const fs = require('fs');

class DefaultModel {
    constructor() {
        this.name = "";
        this.value = "";
    }
}

class Default {
    constructor() {
        this.DefaultList = [];

        let rawdata = fs.readFileSync(__base + '/datasets/default.json');
        let jsonArray = JSON.parse(rawdata);

        jsonArray.forEach(function(element) {
            let defaultData = new DefaultModel();
            let empty = true;

            if (element.hasOwnProperty('name')) {
                defaultData.name = element.name;
                empty = false;
            }
            if (element.hasOwnProperty('value')) {
                defaultData.value = element.value;
                empty = false;
            }
            if (!empty) {
                this.DefaultList.push(defaultData);
            }
        }, this);
    }

    find(array, callback) {
        let err = null;
        let list = this.DefaultList;

        for (let property1 in array) {
            if (array.hasOwnProperty(property1)) {
                list = list.filter(function (element) {
                    return element[property1] === array[property1];
                });
            }
        }

        callback(err, list);
    }
}

module.exports = new Default();