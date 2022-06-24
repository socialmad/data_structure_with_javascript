/*

    *****
   *   *
  *   *
 *   *
*****


*/

function hollowParallelogramStarPattern(num) {
    let output = '';
    for(let i = 1; i <= num; i++) {
        for(let j = 1; j <= num - i; j++) {
            output += ' ';
        }
        for(let k = 1; k <= num; k++) {
            if(i == 1 || i == num || k == 1 || k == num) {
                output += '*';
            }else{
                output += ' ';
            }           
        }
        output += '\n';
    }
    console.log(output);
}

hollowParallelogramStarPattern(5);