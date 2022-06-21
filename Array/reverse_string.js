function reverse(str) {
    let arr = str.split(' ');
    return arr.reverse().join(' ');
}

function reverse2(str) {
    let len = str.length - 1;
    let reverseStr = [];
    for(let i = len; i >= 0; i--) {
        reverseStr.push(str[i]);
    }
    return reverseStr.join('');
}

var revString = reverse2('I am Sarfaraj');
console.log(revString);