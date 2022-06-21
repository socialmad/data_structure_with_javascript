//Reverse an array program

function reverseArray(arr){
    let len = arr.length;
    for(let i = 0; i < len / 2; i++) {
        temp = arr[i];
        arr[i] = arr[len - i - 1];
        arr[len - i - 1] = temp;
        console.log(arr);
    }
    return arr;
}


const arr = [1,2,3,4,5,6,7];
reverseArray(arr);