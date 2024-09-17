function sumOfArray(list1: Array<number>): number {
    let result: number = list1[0];
    for ( let i: number = 1; i < list1.length; i ++ ) {
        result += list1[i];
    }
    return result;
};

console.log(sumOfArray([1, 2, 3, 4]));