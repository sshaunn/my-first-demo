const tasksObject = (arr, key) => {
    return arr.reduce((obj, item) => {
        return {
            ...obj,
            [item[key]]: item,
        };
    }, {});
}
module.exports = tasksObject;
