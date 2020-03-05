function maxNum(array) {
    let topInt = [];

    for (let i = 0; i < array.length; i++) {
        let currentEl = array[i];
        let isTopInt = true;

        for (let j = i + 1; j < array.length; j++) {
            let nextEl = array[j]

            if (currentEl <= nextEl) {
                isTopInt = false;
                break;
            }
        }

        if (isTopInt) {
            topInt.push(currentEl)
        }
    }

    console.log(topInt.join(' '))

}
maxNum([1, 4, 3, 2])