function getString(arr) {
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let newArr = [];
    arr.forEach(element => {
        let el = element.split("");
        el.forEach(x => {
            for (let i = 0; i < nums.length; i++) {
                if (x == nums[i]) {
                    if (newArr.includes(element)) {
                        break;
                    } else {
                        newArr.push(element);
                    }
                }
            }
        });
    });
    console.log(newArr);
}
getString(["sima", "m18", "music450", "w3schools"]);