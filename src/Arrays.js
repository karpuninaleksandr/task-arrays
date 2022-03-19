/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let array = data.split(',');
    array.sort(function (a, b) {
        return a - b;
    });
    let result = '';
    for (let i = 0; i < array.length; ++i) {
        result += array[i];
        if (i != array.length - 1) {
            result += ',';
        }
    }
    return result;
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    let res = new Array();
    let k = 0;
    for (let i = 0; i < data.length; ++i) {
        if (data[i] <= 100) {
            res.length = k + 1;
            res[k] = data[i];
            ++k;
        }
    }
    return res;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let array3 = new Array(10);
    for (let i = 0, k = 0; i < 5; ++i, ++k) {
        array3[k] = array1[i];
        array3[++k] = array2[i];
    }
    return array3;
}
