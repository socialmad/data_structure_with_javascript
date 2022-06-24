/*

*
**
* *
*  *
*****

*/
function hollowRightTriangleStarPattern(num) {
    let output = '';

    for(let i = 1; i <= num; i++) {
        for(let j = 1; j <= i; j++) {
            if(j == 1 || j == i || i == num) {
                output += '*';
            }else{
                output += ' ';
            }
        }
        output += '\n';
    }

    console.log(output);

}

hollowRightTriangleStarPattern(5);