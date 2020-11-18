(function () {
    var array1 = [1, 20, 3, 40, 5, 6, 7, 8];

    function sortByDesc(array) {
        return array.sort(function (e1, e2) {
            return e2 - e1;
        });
    }

    function getFirstElements(array, count) {
        return array.slice(0, count);
    }

    function getLastElements(array, count) {
        if (array.length <= count) {
            return array.slice(0);
        }

        return array.slice(array.length - count);
    }

    function getOddNumbersSum(array) {
        return array.reduce(function (sum, current) {
            if (current % 2 === 0) {
                return sum + current;
            } else {
                return sum;
            }
        }, 0);
    }

    var array2 = [];

    for (var i = 1; i <= 100; i++) {
        array2.push(i);
    }

    function getOddNumbersSquares(array) {
        return array
            .filter(function (current) {
                return current % 2 === 0;
            })
            .map(function (current) {
                return Math.pow(current, 2);
            });
    }

    console.log("Сортировка по убыванию: " + sortByDesc(array1));
    console.log("Первые 5 элементов: " + getFirstElements(array1, 5));
    console.log("Последние 5 элементов: " + getLastElements(array1, 5));
    console.log("Сумма четных элементов: " + getOddNumbersSum(array1));
    console.log("Квадраты четных чисел: " + getOddNumbersSquares(array2));
}());