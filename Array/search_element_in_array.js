//Find an element in array

function searchElementInArray(arr, search) {
    let found = 0;
    let position = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === search) {
            found = 1;
            position = i + 1;
            break;
        }
    }

    if(found === 1) {
        console.log('Element found at position ' + position);
    }else{
        console.log('Element does not exist');
    }
}

searchElementInArray([1,2,3,4,7,10,2],7); // O(n)

