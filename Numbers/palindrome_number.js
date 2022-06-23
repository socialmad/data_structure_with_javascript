//Check the palindrome number

function palindromeNumber(num) {
    const temp = num;
    let rem, rev = 0;

    while (num > 0) {
        rem = num % 10;
        rev = rev * 10 + rem;
        num = parseInt(num/10);
    }

    if(temp == rev){
        console.log(temp +' is a palindrome number.');
    }else{
        console.log(temp + ' is not a palindrome number.');
    }
}

palindromeNumber(121);

