//Find negative element in an array

function negativeElementInArray(arr) {
    const negativeArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0 ) {
            negativeArr.push(arr[i]);
        }
    }
    return negativeArr;
}

var data = negativeElementInArray([1,2,-3,4,-5,6]); // O(n)

console.log(data);