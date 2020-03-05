function magicSum(array, num) {
    for (let i = 0; i < array.length; i++) {
        let currentEl = array[i];

        for (let j = i + 1; j < array.length; j++) {
            let nextEl = array[j];

            if (currentEl + nextEl === num) {
                console.log(`${currentEl} ${nextEl}`);

            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8)