/*

*
**
***
****
*****

*/

function rightTriangleStarPattern(num) {
    let output = '';

    for(let i = 1; i <= num; i++) {
        for(let j = 1; j <= i; j++) {
            output += '*';
        }
        output += '\n';
    }

    console.log(output);
}

rightTriangleStarPattern(5);