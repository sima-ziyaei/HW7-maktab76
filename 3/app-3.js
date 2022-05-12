function getLength(arr) {
    let newArr = arr.flat(Infinity).length;
    console.log(newArr);
}
getLength([1, [2, 3, [4, 7]]]);