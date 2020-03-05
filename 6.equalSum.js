function equalSum(array) {
    let positionEl = -1;

    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = i - 1; j >= 0; j--) {
            leftSum += array[j];
        }
        for (let z = i + 1; z < array.length; z++) {
            rightSum += array[z]
        }
        if (rightSum === leftSum) {
            positionEl = i;
        }
    }
    if (positionEl != -1) {
        console.log(positionEl);
    } else {
        console.log('no')
    }
}
equalSum([1, 2])