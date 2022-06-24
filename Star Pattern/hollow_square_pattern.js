/*

*****
*   *
*   *
*   *
*****

*/

function hollowSquarePattern(num) {
    let output = '';

    for(let i = 1; i <= num; i++) {
        for(let j = 1; j <= num; j++) {
            if(i == 1 || i == num || j == 1 || j == num) {
                output += '*';
            }else{
                output += ' ';
            }
        }
        output += '\n';
    }

    console.log(output);

}

hollowSquarePattern(5);