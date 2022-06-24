/*

    *
   ***
  *****
 *******
*********

*/
function pyramidStarPattern(num) {
    let output = '';
    for(let i = 1; i <= num; i++) {
        for(let j = i; j < num; j++) {
            output += ' ';
        }
        for(let k = 1; k <= (2*i - 1); k++) {
            output += '*';
        }
        output += '\n';
    }
    console.log(output);
}

pyramidStarPattern(5);