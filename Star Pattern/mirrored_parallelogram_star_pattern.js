/*

 *****
  *****
   *****
    *****
     *****
     
*/

function mirroredParallelogramStarPattern(num) {
    let output = '';

    for(let i = 1; i <= num; i++) {
        for(let j = 1; j < i; j++) {
            output += ' ';
        }
        for(let k = 1; k <= num; k++) {
            output += '*';
        }
        output += '\n';
    }

    console.log(output);

}

mirroredParallelogramStarPattern(5);

