function Numbers() {
    const arr = [0, null, 8, 2, 15, 99]

    let even_value = 0,
        not_an_even_value = 0,
        zero = 0

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                zero += 1;
            } else if (arr[i] % 2 === 0) {
                even_value += 1;
            } else {
                not_an_even_value += 1;
            }
        }
    }

    console.log('четных элементов: ', even_value)
    console.log('нечетных элементов: ', not_an_even_value)
    console.log('нулей: ', zero)
}

Numbers()