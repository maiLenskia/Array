function sum(originalArr) {
    let modifieArr = [];

    for (let i = 0; i < originalArr.length; i++) {
        let currentEl = originalArr[i];

        if (currentEl % 2 === 0) {
            modifieArr.push(currentEl + i);
        } else {
            modifieArr.push(currentEl - i);
        }
    }

    console.log(modifieArr);
    let originalArrSum = 0;
    for (const num of originalArr) {
        originalArrSum += num;
    }

    let modifieArrSum = 0;
    for (const num of modifieArr) {
        modifieArrSum += num;
    }

    console.log(originalArrSum);
    console.log(modifieArrSum)
}
sum([5, 15, 23, 56, 35])