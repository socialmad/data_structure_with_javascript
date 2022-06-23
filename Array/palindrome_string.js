//check weather a string is a palindrome or not

function palindromeString(string) {

    let len = string.length - 1;
    let revStr = [];

    for(let i = len; i >= 0; i--) {
        revStr.push(string[i]);
    }
    
    if(string == revStr.join('')) {
        console.log(string + ' is a palindrome string');
    }else{
        console.log(string + ' is not a palindrome string');
    }

}

palindromeString('dad');
