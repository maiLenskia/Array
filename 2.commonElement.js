function elements(firstArr, secondArr) {
    for (let index = 0; index < firstArr.length; index++) {
        let currentEl = firstArr[index];

        for (let i = 0; i < secondArr.length; i++) {
            let nextEl = secondArr[i];

            if (currentEl === nextEl) {
                console.log(currentEl)
            }
        }

    }
}
elements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])