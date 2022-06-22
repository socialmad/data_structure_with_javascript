// Find duplicate element in array 

function findDuplicate(arr) {
    let duplicate = 0;

    for(let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]) {
                duplicate++;
                break;
            }
        }
    }
    return duplicate;
}

var data = findDuplicate([1,2,1,4,2,1,9]);
console.log(data);

