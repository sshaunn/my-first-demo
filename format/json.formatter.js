//json format function array to object, property = item.id
const arrayToObject = (arr, key) => {
    return arr.reduce((obj, item) => {
        return {
            ...obj,
            [item[key]]: item,
        };
    }, {});
}
module.exports = arrayToObject;
