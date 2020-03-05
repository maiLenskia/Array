function rotation(arr, rotations) {
    while (rotations > 0) {
        let firstEle = arr[0];

        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];

        }
        arr[arr.length - 1] = firstEle;

        rotations--;
    }
    console.log(arr.join(' '));
}
rotation([51, 47, 32, 61, 21], 2)