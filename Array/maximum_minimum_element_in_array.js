//Find the maximum and minimum element in array that

function maximumAndMinimumElement(arr) {

    //Assume first element of array is max and minimum
    let max = arr[0];
    let min = arr[0];

    for(let i = 0; i < arr.length; i++) {

        //If current element is greater than maximum
        if(arr[i] > max) {
            max = arr[i];
        }

        //If current element is less than minimum
        if(arr[i] < min) {
            min = arr[i];
        }
    }

    console.log('Maximum  = ' + max);
    console.log('Minimum = ' + min);
}


maximumAndMinimumElement([10,20,50,2,30]); // O(n)