export const isMap = (data, target, changeOption = []) => {
    const dataList = Object.entries(data);
    const targetList = Object.entries(target);
    let isEqual = true;

    dataList.forEach(item => {
        const key = item[0];
        if (changeOption.length !== 0 && !changeOption.includes(key)) {
            return;
        }
        if (!(key in target)) {
            return false;
        }
        const value = item[1];
        const targetValue = getValueFromListByKey(targetList, key);
        if (value !== targetValue) {
            isEqual = false;
        }
    });
    return isEqual;
};

const getValueFromListByKey = (list, key) => list.filter(el => {
        return el[0] === key;
    })[0][1];
