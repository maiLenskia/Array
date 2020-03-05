function maxSequence(array) {
    let positionOfBiggest = -1;
    let maxLenght = 0;

    for (let i = 0; i < array.length; i++) {
        let currentEl = array[i];
        let currentSequenceLemght = 1;

        for (let j = i + 1; j < array.length; j++) {
            let nextEl = array[j]

            if (currentEl != nextEl) {
                break;
            }
            currentSequenceLemght++;
        }
        if (currentSequenceLemght > maxLenght) {
            maxLenght = currentSequenceLemght;
            positionOfBiggest = i;
        }
    }
    let element = array[positionOfBiggest];

    console.log(`${element} `.repeat(maxLenght).trim());
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])