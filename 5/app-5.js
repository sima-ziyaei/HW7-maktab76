/*Array.prototype.myFilter = function (fun) {
    var filtered = [];
    for (let i = 0; i < this.length; i++) {
        if (fun(this[i], i, this))
            filtered.push(this[i]);
    }
    return filtered;
};

var returnedArr = [1, 2, 3, 4, 5, 6].myFilter(function (element, index, arr) {
    return element > 3;
});

console.log(returnedArr);*/



/*function find(arr, fun){
    let finalArr=[];
    for(let i=0; i<arr.length; i++){
        let res=fun(arr[i], i, arr);
        if(res){
            finalArr.push(arr[i]);
        }
    }
    console.log(finalArr);
}
find([1, 2, 3, 4, 5], element => element>3);*/



/*function mySlice(arr, start, end) {
    if (end === undefined || end > arr.length) {
        end = arr.length;
    }
    let newArr = [];
    for (let i = start; i < end; i++) {
        newArr.push(arr[i]);
    }
    console.log(newArr);
}
mySlice([2, 3, 4, 6, 7], 2);*/



function splice(arr, pos, remove, addArr) {

    if (!addArr) {
        addArr = []
    }
    if (typeof remove === undefined) {
        remove = arr.length - pos;
    }
    let finalArr = [];
    // let newArr = arr.slice(pos, pos + remove);
    // arr.forEach(element => {
    //     if (newArr.indexOf(element) == -1) {
    //         deletedArr.push(element);
    //     }
    // });
    // for (let j = 0; j < arr.length; j++) {
    //     if (j = pos) {
    //         finalArr.push(addArr);

    //     } else {
    //         finalArr.push(deletedArr[j])
    //     }
    // }
    for (let i = 0; i < arr.length; i++) {
        if (i < pos) {
            finalArr.push(arr[i]); //ta vaghti nareside be position push kone
        }
        else if (i >= pos + remove) {
            finalArr.push(arr[i]) // bade remove ro push kone
        } else if (remove == 0) {
            if (i === start) {
                finalArr.push(...addArr, arr[i]);
            } else {
                finalArr.push(arr[i]);
            }
        } else if (remove > 0) {
            if (i == pos) {
                finalArr.push(addArr);
            } else if (i < pos + remove) {
                continue;
            } else {
                finalArr.push(arr[i]);
            }
        }
    }
    console.log(finalArr.flat(Infinity));
}
splice([2, 3, 4, 5, 6, 8, 0], 1, 3, [0, 1]);