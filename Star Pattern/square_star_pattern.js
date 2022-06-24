/*

*****
*****
*****
*****
*****

*/
function squareStarPattern(num) {
    let string = '';
    
    for(let i = 1; i <= num; i++) {
        for(let j = 1; j <= num; j++) {
            string += '*';
        }
        string += '\n';
    }

    console.log(string);
}

squareStarPattern(5);