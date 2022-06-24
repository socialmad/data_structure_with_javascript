/*

    *
   **
  * *
 *  *
*****

*/

function mirroredRightTriangleStarPattern(num) {
    let output = '';

    for(let i = 1; i <= num; i++) {
        for(let j = 1; j <= num - i; j++) {
            output += ' ';
        }

        for(let k = 1; k <= i; k++) {
            if(k == 1 || k == i || i == num){
                output += '*';
            }else{
                output += ' ';
            }
        }
        output += '\n';
    }
    console.log(output);
}

mirroredRightTriangleStarPattern(5);