function firstRepeatingElement(arr) {

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] == arr[j]) {
                return arr[i];
            }
        }
    }
    return undefined;
}

var result = firstRepeatingElement([1,2,3,4,5,2,0]);

console.log('Result = ' + result);

