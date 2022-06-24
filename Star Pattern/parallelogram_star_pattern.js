/*

    *****
   *****
  *****
 *****
*****

*/
function parallelogramStarPattern(num) {
    let output = '';

    for(let i = 1; i <= num; i++) {
        for(j = 0; j < num - i; j++) {
            output += ' ';
        }
        for(let k = 1; k <= num; k++) {
            output += '*';
        }
        output += '\n';
    }
    console.log(output);
}

parallelogramStarPattern(5);
