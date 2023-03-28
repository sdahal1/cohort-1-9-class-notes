const lodash = require("lodash");

// Object.entries(data) - convert the object to array [[key, value], [key2, value2]]
// arr.reduce((prev, current) => , {})
// lodash.set - creates a new key if it does not already exist in the obj

function mapProperties(configuration) {
    return (data) => {
        if (data) {
            return Object.entries(data).reduce((accumulator, [key, value]) => {
                return lodash.set(accumulator, configuration[key] || key, value);
            }, {});
        }
        return data;
    };
}

module.exports = mapProperties;
