/*

*****
 ****
  ***
   **
    *

*/
function riverseMirroredTriangle(num) {
    let output = '';

    for(let i = 1; i <= num; i++) {
        for(let j = 1; j < i; j++) {
            output += ' ';
        }   

        for(let k = i; k <= num; k++) {
            output += '*';
        }
        output += '\n';
    }
    console.log(output);
}

riverseMirroredTriangle(5);

