const getValueFromListByKey = <T>(list: any[], key: T): T => list.filter(el => {
        return el[0] === key;
    })[0][1];

export const isMap = (
    data: object,
    target: object,
    changeOption: string[] = []
): boolean => {
    const dataList: [string, string][] = Object.entries(data);
    const targetList: [string, string][] = Object.entries(target);
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
