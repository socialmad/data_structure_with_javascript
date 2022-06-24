/*

*****
****
***
**
*

*/

function reverseRightTriangleStartPattern(num) {
    let output = '';

    for(let i = 1; i <= num; i++) {
        for(let j = i; j <= num; j++) {
            output += '*';
        }
        output += '\n';
    }
    console.log(output);
}

reverseRightTriangleStartPattern(5);