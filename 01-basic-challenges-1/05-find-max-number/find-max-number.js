function findMaxNumber(arr) {
    if (Array.isArray(arr) == false){
        throw new Error("Man do better")
    }
    var max = Number.MIN_VALUE;
    for (let i = 0 ; i < arr.length ; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

module.exports = findMaxNumber;
